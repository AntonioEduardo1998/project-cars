import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      model: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public handleRegisterForm(): void {
    const submit = this.registerForm.getRawValue();
    console.log(submit);

  }

}
