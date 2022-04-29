import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcartserService } from '../ecartser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: any;
  show = true;
  show1 = true;
  show2 = true;
  show3 = true;
  fieldRequired: string = "This field is required";
  siteKey: string = "6LfrBHMfAAAAAE43X60CJPZTKZmhizHUReaLnFMX";

  constructor(private formBilder: FormBuilder, private router: Router, private src: EcartserService) { }
  ngOnInit(): void {
    this.registerForm = this.formBilder.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      MobileNo: new FormControl('', Validators.required),
      Password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      recaptcha: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl(null, Validators.required)
    }, { validator: this.pwdchk })

  }

  get f() {
    return this.registerForm.controls
  }

  getData(data: string) {

    if (data === 'email') {
      this.show = false;
    }
    if (data === 'mobile') {
      this.show1 = false;
    }
    if (data === 'password') {
      this.show2 = false;
    }
    if (data === 'confirm') {
      this.show3 = false;
    }
  }

  pwdchk(g: FormGroup) {
    if (g.controls['Password'].value === g.controls['ConfirmPassword'].value) {
      return null;
    }
    else
      return {
        'mismatch': true
      }
  }

  checkValidation(input: string) {
    const validation = this.registerForm.get(input).invalid && (this.registerForm.get(input).dirty || this.registerForm.get(input).touched)
    return validation;
  }
  emaiErrors() {
    return this.registerForm.get('Email').hasError('required') ? 'This field is required' :
      this.registerForm.get('Email').hasError('pattern') ? 'Not a valid emailaddress' : ''
  }
  nameErrors() {
    return this.registerForm.get('Name').hasError('required') ? 'This field is required' : ''
  }
  mobileErrors() {
    return this.registerForm.get('MobileNo').hasError('required') ? 'This field is required' : ''
  }
  passwordErrors() {
    return this.registerForm.get('Password').hasError('required') ? 'This field is required' :
      this.registerForm.get('Password').hasError('minLength') ? 'This field is required shoud not match minlength' : ''
  }

  newData() {
    
    if (this.registerForm.valid) {
      this.src.AddNewUser(this.registerForm.value).subscribe();
      alert(`${this.registerForm.value.Name} ur registration was done`);
      this.router.navigate(['/Home']);
     } 
     else {
      this.router.navigate(['/Register']);
    }
  }
}
