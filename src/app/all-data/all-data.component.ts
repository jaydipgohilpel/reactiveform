import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss']
})
export class AllDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
// user_data_arr = [];
    user_data_arr = JSON.parse(localStorage.getItem("register") || "");
    // console.log(user_data_arr);
    // console.log(user_data_arr[0].name );
}
