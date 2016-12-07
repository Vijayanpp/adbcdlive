import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

public loading:boolean=true;
  constructor() { }

  ngOnInit() {
  	this.loading=false;
  }

}
