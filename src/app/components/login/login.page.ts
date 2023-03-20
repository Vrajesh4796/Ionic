import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm:any = FormGroup;
    isSubmitted:boolean = false

    constructor(private formBuilder: FormBuilder,
      private commonSer: CommonService,
      private route: Router) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }

    get validate(){
      return this.loginForm.controls
    }

    submitLoginData(formData:any){
      if(this.loginForm.invalid){
        this.isSubmitted = true;
        return
      }

      let userDetails = this.commonSer.getUserDetails
   
      if(formData.password == userDetails?.['password'] && formData.email == userDetails?.['email']){
        this.route.navigate(['/dashboard'])
      }
    }

}
