import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus-card',
  imports: [],
  templateUrl: './contactus-card.html',
  styleUrl: './contactus-card.css',
})
export class ContactusCard {
  owners = [
    { name: "Justice Reed", number:"(859) 595-8172", email: "justice.reed@rigidcontractingky.com" },
    { name: "Austin Richards", number:"(606) 484-0606", email: "austin.richards@rigidcontractingky.com" }
  ]
}
