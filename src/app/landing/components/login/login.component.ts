import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router,
    private authService: AuthService, 
    private loginFormService: LoginFormService) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormService.loginForm();
  }

  connect(): void{
    this.authService.login();
    this.router.navigateByUrl('/home');
  }

}
