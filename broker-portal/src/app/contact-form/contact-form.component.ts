import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', Validators.required],
    });
  }

  submit() {
    this.form.reset();
    const message = document.querySelector('#message-send');
    const alert = document.querySelector('#alert-send');
    if(!alert.classList.contains('show')){
        alert.classList.add('show')
    }
    message.classList.remove('d-none');
    message.classList.add('d-block');
  }

  onClick() {
    const message = document.querySelector('#message-send');
    const alert = document.querySelector('#alert-send');
    if(alert.classList.contains('show')){
      alert.classList.remove('show')
    }

    message.classList.remove('d-block');
    message.classList.add('d-none');
  }
}
