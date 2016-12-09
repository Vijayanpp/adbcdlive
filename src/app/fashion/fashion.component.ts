import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  public currentNews;
	public NewsContent;
	public News

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  
loadPage()
  {
  this.currentnews. retrieveNews('/fashion').subscribe(news=>
  	 {
    this.NewsContent=news;
     this.News=this.NewsContent
     });
  
  }

}
