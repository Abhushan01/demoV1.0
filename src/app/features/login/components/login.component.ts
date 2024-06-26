import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  passwordResetForm!:FormGroup;
  passWordForgot:boolean=false;
   showPassword:boolean=false;
    nextPassword:boolean=false;
     constructor(
  private fb:FormBuilder ){ }
  
   ngOnInit(): void {
   this.createLoginForm();
   }
  
   createLoginForm(){
   this.loginForm=this.fb.group({
   username:new FormControl(null,Validators.required),
   password:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
   remember:new FormControl(false)
   })
  
  this.passwordResetForm=this.fb.group({
  username:new FormControl(null,Validators.required),
  newPassword:new FormControl(null,[Validators.required,Validators.maxLength(10)])
  })
  }
  
  showIcon(value:string){
  this.showPassword=!this.showPassword;
   }

   clickMe(){
    console.log("Hello world")
   }
}
