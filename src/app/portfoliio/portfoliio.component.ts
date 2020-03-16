import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portfoliio',
  templateUrl: './portfoliio.component.html',
  styleUrls: ['./portfoliio.component.css']
})
export class PortfoliioComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
contact(){
  this.route.navigate(['/contact'])
}
}
