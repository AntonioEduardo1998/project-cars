import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) {
    this.login = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

}