import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-reviews',
  imports: [CommonModule],
  templateUrl: './business-reviews.html',
  styleUrl: './business-reviews.css',
})
export class BusinessReviews {
  reviews = [
    { projectType:"Demolition", name: "Tanna Combs Crouch", stars: 5, reviewDesc: "We love everything you all have done and highly recommend this company." }, 
    { projectType:"Demolition", name: "Tanna Combs Crouch", stars: 5, reviewDesc: "We love everything you all have done and highly recommend this company." } ,
    { projectType:"Demolition", name: "Tanna Combs Crouch", stars: 5, reviewDesc: "We love everything you all have done and highly recommend this company." } 
  ]
}
