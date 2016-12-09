import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
	public currentNews;
	public NewsContent;
	public News

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage()
  {
  this.currentnews. retrieveNews('/entertainment').subscribe(news=>
  	 {
    this.NewsContent=news;
     this.News=this.NewsContent
     }); 
  }

   

}
