import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'reactiveform';
  errormsg = '';
  up: any;
  ucflag = false;
  lcflag = false;
  spflag = false;
  numflag = false;
  lenflag = false;

  registration = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required,Validators.minLength(10)  ]),
    age: new FormControl('', [Validators.required]),

  });


  get name() { return this.registration.get('name'); }
  get password() {
    this.passonchange();
    return this.registration.get('password');
  }
  get username() { return this.registration.get('username'); }
  get address() { return this.registration.get('address'); }
  get gender() { return this.registration.get('gender'); }
  get mobile() { return this.registration.get('mobile'); }
  get age() { return this.registration.get('age'); }

  fcontrol = this.registration.controls;
  register() {
    
    if (this.registration.valid) {
      console.log(this.registration.value);
      alert("Registration Succsesfully");
      localStorage.setItem("register",JSON.stringify(this.registration.value));
      this.registration.reset();
    }
    else {

      if (this.fcontrol.name.value == '') {
        this.marktouch(this.fcontrol.name);
      }
      else if (this.fcontrol.password.value == '') {
        this.passonchange();
        this.marktouch(this.fcontrol.password);
      }
      else if (this.fcontrol.password.value !== '') {
        this.passonchange();
      }
      else if (this.fcontrol.username.value == '') {
        this.marktouch(this.fcontrol.username);
      }
      else if (this.fcontrol.address.value == '') {
        this.marktouch(this.fcontrol.address);
      }
      else if (this.fcontrol.gender.value == '') {
        this.marktouch(this.fcontrol.gender);
      }
      else if (this.fcontrol.mobile.value == '') {
        this.marktouch(this.fcontrol.mobile);
      }
      else if (this.fcontrol.age.value == '') {
        this.marktouch(this.fcontrol.age);
      }
      // else {
      //   alert("all fields is required,");
      // }

    }
  }
  marktouch=(control: any)=> control.markAsTouched({ onlySelf: true });
  passonchange() {
    let x: any;
    x = this.fcontrol.password.value;
    //lowercase
    /[a-z]+/g.test(x) ? this.lcflag = true : this.lcflag = false;
    //uppercase
    /[A-Z]+/g.test(x) ? this.ucflag = true : this.ucflag = false;
    //special char
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(x) ? this.spflag = true : this.spflag = false;
    //number
    /[0-9]+/g.test(x) ? this.numflag = true : this.numflag = false;
    //length
    x?.length == 8 ? this.lenflag = true : this.lenflag = false;
  }

}
