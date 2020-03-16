import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  public show :boolean= false;
  public btn_text="show"

  
  // employee=[{
  //   "id": 1,
  //   "first_name": "Jeanette",
  //   "last_name": "Penddreth",
  //   "email": "jpenddreth0@census.gov",
  //   "gender": "Female",
  //   "ip_address": "26.58.193.2"
  // }, {
  //   "id": 2,
  //   "first_name": "Giavani",
  //   "last_name": "Frediani",
  //   "email": "gfrediani1@senate.gov",
  //   "gender": "Male",
  //   "ip_address": "229.179.4.212"
  // }, {
  //   "id": 3,
  //   "first_name": "Noell",
  //   "last_name": "Bea",
  //   "email": "nbea2@imageshack.us",
  //   "gender": "Female",
  //   "ip_address": "180.66.162.255"
  // }, {
  //   "id": 4,
  //   "first_name": "Willard",
  //   "last_name": "Valek",
  //   "email": "wvalek3@vk.com",
  //   "gender": "Male",
  //   "ip_address": "67.76.188.26"
  // }];

  food=[
    {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
      {
        "batter":
          [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
          ]
      },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
  "id": "0002",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}]
  
  ngOnInit() {
  }
team(){
  this.route.navigate(['/team'])
}


showMe(){
this.show=true
this.btn_text="Hide"

console.log("testing",this.show)
}
}
