import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'reactiveform';
  errormsg = '';
  up:any;
  upperCaseCharacters = /[A-Z]+/g;
  lowerCaseCharacters = /[a-z]+/g;
  numberCharacters = /[0-9]+/g;
  specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


  registration = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(6),

    ]),
    username: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),

  });
  // uppercase = new FormGroup({
  //   password: new FormControl('', [
  //     Validators.
  //   ])
  // })

  // get uppercasefun() {return this.uppercase.get('password');}

  get name() { return this.registration.get('name'); }
  get password() { return this.registration.get('password'); }
  get username() { return this.registration.get('username'); }
  get address() { return this.registration.get('address'); }
  get gender() { return this.registration.get('gender'); }
  get mobile() { return this.registration.get('mobile'); }
  get age() { return this.registration.get('age'); }
  n: any;
  fcontrol = this.registration.controls;
  register() {
    // debugger;

    if (this.registration.valid) {
      console.log(this.registration.value);
      // console.log(this.registration.controls.name.value);
      alert("Registration Succsesfully");
      this.registration.reset();
    }
    else {
      if (this.fcontrol.name.value == '') {
        this.marktouch(this.fcontrol.name);
      }
      else if (this.fcontrol.password.value == '') {
        this.up=true;
        this.marktouch(this.fcontrol.password);
       
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
      else {
        alert("all fields is required,");
      }
    

    }



  }
  marktouch(control: any) {
    control.markAsTouched({ onlySelf: true });
  }






}

