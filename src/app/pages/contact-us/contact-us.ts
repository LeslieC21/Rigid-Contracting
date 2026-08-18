import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://maps.google.com/maps?q=6224+US+HWY+460+W,+Frenchburg,+KY+40322&t=&z=14&ie=UTF8&iwloc=&output=embed',
  );
  sentMessage = signal<boolean>(false);

  submitForm(): void {
    // Check if form is valid

    // Send form

    // If it send add animations to the img and text elements
    const btnText = document.getElementById("form_submit_text");
    const btnImg = document.getElementById("form_submit_img");
    const btn = document.getElementById("form_submit_btn");

    console.log(btnText + " " + btnImg + " " + btn);

    btnText?.classList.add("form_submit_text-Animation");
    btnImg?.classList.add("form_submit_img-Animation");
    // btn?.classList.add("form_submit_btn-Animation");
    
    setTimeout(() => {
      btn!.innerText = "Thanks for reaching out!"
      btn!.style = "border: none; background-color: #f5f5f3; box-shadow: none;"
    }, 1300)
  }
}
