import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/internal/operators/tap';
import { debounceTime, delay } from 'rxjs/operators';






@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contactData = false;
  constructor(private http: HttpClient, private location: Location, private toastr: ToastrService) { }


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
    }
  }

  createContact() {
    const contact = this.getData();
    console.log('contact', contact);
    this.http.post('http://localhost:3000/api/contact', contact)
      .pipe(
        tap(() => {
          this.contactData = true;
        }),
        delay(1500)
      )
      .subscribe((res) => {
        console.log('contact created!', res);
        this.location.back();

      }, err => {
        console.log('contact not created', err);
      });

  }
}



