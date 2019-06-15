import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contactData = false;
  constructor() { }


  ngOnInit() {
    this.contactForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('')

    });
  }

  getErrorMessage() {
    return this.contactForm.controls.email.hasError('required') ? ' Please enter your email' :
      this.contactForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.contactData = true;

  }
}

