import { Component, OnInit } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

public loading:boolean=true;
  constructor(private shareddataService:ShareddataService ) { }

  ngOnInit() {
  	this.loading=false;
  }



  slectedNews(currentnews)
  {
  this.shareddataService.store.splice(0,1,currentnews)
  }

}
