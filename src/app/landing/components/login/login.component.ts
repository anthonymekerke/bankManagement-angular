import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { Client } from 'src/app/shared/models/client.model';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new Client();

  loginForm!: FormGroup;

  constructor(private authService: AuthService, 
    private loginFormService: LoginFormService) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormService.loginForm();
  }

  connect(): void{
    this.authService.login({username: this.loginForm.value.username, password: this.loginForm.value.password});
  }

}
