import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem("register") )
    {
      localStorage.setItem("register",JSON.stringify([]));
    }
  }
  title = 'reactiveform';
  errormsg = '';
  up: any;
  ucflag = false;
  lcflag = false;
  spflag = false;
  numflag = false;
  lenflag = false;
  mobval = false;

  registration = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]),
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
  get mobile() {
    return this.registration.get('mobile');
  }
  get age() { return this.registration.get('age'); }

  fcontrol = this.registration.controls;
  register() {



    if (this.registration.valid && this.ucflag && this.lcflag && this.numflag && this.lenflag && this.spflag) {
      let user_data_arr = [];
      user_data_arr = JSON.parse(localStorage.getItem("register") || "");
      user_data_arr.push(this.registration.value);
      localStorage.setItem("register", JSON.stringify(user_data_arr));
      console.log(this.registration.value);
      this.registration.reset();
      alert("Registrion succsesfully")
     // window.location.reload();
    }
    else {

      if (this.fcontrol.name.value == '') {
        this.marktouch(this.fcontrol.name);
      }
      else if (this.fcontrol.password.value == '') {
        this.passonchange();
        this.marktouch(this.fcontrol.password);
      }
      // else if (this.fcontrol.password.value !== '') {
      //   this.passonchange();
      //   this.marktouch(this.fcontrol.password);
      // }
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

    }
  }

  marktouch = (control: any) => control.markAsTouched({ onlySelf: true });
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
  digitonly(control: any) {

  if (control.keyCode >= 48 && control.keyCode <= 57) { return true; }
    else { return false; };

    // debugger;
    // if (/[a-z][A-Z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(control.value)) {
    //   this.mobval = false;
    //   console.log("found");
    // }
    // else {
    //   this.mobval = true;
    //   console.log("not found");
    // }
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    // var key = String.fromCharCode(!control.charCode ? control.which : control.charCode);
    // if (!regex.test(key)) {
    //   control.preventDefault();
    //    return false;
    // }
    // else{
    //   return true
    // }
    // const pattern = /[0-9\+\-\ ]/;
    // let inputChar = String.fromCharCode(control.value.charCode);
    // console.log(control.value.charCode);
    // if (control.value.keyCode != 8 && !pattern.test(inputChar)) {
    //   control.value.preventDefault();
    // }
  }

}
