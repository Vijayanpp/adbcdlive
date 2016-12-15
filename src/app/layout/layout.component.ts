import { Component, OnInit } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

public loading:boolean=true;
public menustatus:boolean=false;
  constructor(private shareddataService:ShareddataService ) { }

  ngOnInit() {
  	this.loading=false;
  }

  menuClick()
  {
    this.menustatus!=this.menustatus;
    console.log('hi')
  }



  slectedNews(currentnews)
  {
  this.shareddataService.store.splice(0,1,currentnews)
  }

}
