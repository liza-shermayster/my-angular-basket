import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { delay } from 'rxjs/operators';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contactData = false;
  contact$: Subscription;
  constructor(private location: Location, private contactService: ContactService) { }


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
    this.createContact();
  }

  getData(): Contact {
    return {
      name: this.contactForm.value.userName,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };
  }

  createContact() {
    const contact = this.getData();
    this.contact$ = this.contactService.createDataContact(contact).pipe(
      tap(() => {
        this.contactData = true;
      }),
      delay(1500)
    )
      .subscribe((res) => {
        this.location.back();

      }, err => {
        console.log('contact not created', err);
      });

  }
}



