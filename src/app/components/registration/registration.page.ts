import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validators';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

    registrationForm:any = FormGroup;
    isSubmitted: boolean = false;

    constructor(private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.registrationForm = this.formBuilder.group(
            {
                fname: ['', Validators.required],
                lname: ['', Validators.required],
                email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
                password: ['', [Validators.required,Validators.minLength(6)]],
                cpassword:['']
            },
            {
                validator: ConfirmPasswordValidator("password", "cpassword")
            }
        )
    }

    get validate() {
        return  this.registrationForm.controls
    }

    onSubmit(formData:any){
        if(this.registrationForm.invalid){
            this.isSubmitted = true;
            return
        }

        localStorage.setItem('userDetails',JSON.stringify(formData))
        this.router.navigate(['/login']);
    }

}
