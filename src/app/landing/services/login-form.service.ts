import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {

    constructor(private formBuilder: FormBuilder){}

    loginForm(){
        return this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }
}