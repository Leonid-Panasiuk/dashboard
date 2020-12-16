import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms'
import { AuthService } from '../auth.service';

let isAuthorised = true;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public wrongCreds: boolean = false;

  constructor(private authService: AuthService) { 
  }

  login(){
      this.wrongCreds = !this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    }


  ngOnInit(): void {
    
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

}

