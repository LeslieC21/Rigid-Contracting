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
    { projectType:"Repair & Restoration", name: "All Spark Electric", stars: 5, reviewDesc: "Rigid Contracting, we appreciate your assistance on this project, which involved multiple repairs to restore its original appearance after the removal of the old service. We look forward to collaborating with you again in the future..." } ,
    { projectType:"Demolition", name: "Tanna Combs Crouch", stars: 5, reviewDesc: "We love everything you all have done and highly recommend this company." } 
  ]
}
