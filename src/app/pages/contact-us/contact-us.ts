import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { debounce } from 'rxjs';

interface contactUsForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  imports: [FormField],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})

export class ContactUs {
  private readonly sanitizer = inject(DomSanitizer);
  private http = inject(HttpClient)
  readonly mapSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://maps.google.com/maps?q=6224+US+HWY+460+W,+Frenchburg,+KY+40322&t=&z=14&ie=UTF8&iwloc=&output=embed',
  );
  sentMessage = signal<boolean>(false);

  ContactUsModel = signal<contactUsForm>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  ContactUsForm = form(this.ContactUsModel, (schema) => {
    required(schema.firstName, { message: "This is a required field."});
    required(schema.lastName, { message: "This is a required field."});
    required(schema.email, { message: "This is a required field."});
    email(schema.email, { message: "Invalid Email"});
  });

  submitForm(event: Event): void {
    event.preventDefault();

    // Check if form is valid
    const bot_check = document.getElementById("machine_verify") as HTMLInputElement;
    if(this.ContactUsForm().invalid())
      return;
    else if(bot_check.value !== '')
      return;
    

    const formSpreeUrl = 'https://formspree.io/f/mrpzrqyg';
    const btnText = document.getElementById("form_submit_text");
    const btnImg = document.getElementById("form_submit_img");
    const btn = document.getElementById("form_submit_btn") as HTMLButtonElement;

    // Submit only submits if the form passes
    submit(this.ContactUsForm, async () => {
      const payload = this.ContactUsModel();

      this.http.post(formSpreeUrl, payload).subscribe({
        next: () => {
          this.resetForm();
          btnText?.classList.add("form_submit_text-Animation");
          btnImg?.classList.add("form_submit_img-Animation");
          btn!.disabled = true;
          
          setTimeout(() => {
            btn!.innerText = "Thanks for reaching out! We'll get back to you as soon as possible."
            btn!.style = "border: none; background-color: #f5f5f3; box-shadow: none;"
          }, 1000)
        },
        error: (error) => {
          console.error("Submission Failed", error);
        }
      });
    });
  }

  resetForm(): void {
    this.ContactUsModel.set({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }
}
