import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';
@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
	public currentNews;
	public NewsContent

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage()
  {
  this.currentNews=this.shareddataService.store[0];
  this.currentnews. retrieveNews(this.currentNews).subscribe(news=>
  	 {
     this.NewsContent=news;     
  })
  

  }

}
