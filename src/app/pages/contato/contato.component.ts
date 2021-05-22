

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  public ngOnInit(): void {
  }

  public handleContactForm(): void {
    const submit = this.contactForm.getRawValue();
    console.log(submit);

  }

}



