import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';
@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
	public currentNews;
	public NewsContent;
	public News

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage()
  {
  this.currentNews=this.shareddataService.store[0];
  console.log(this.currentNews);
  this.currentnews. retrieveNews(this.currentNews).subscribe(news=>
  	 {
    this.NewsContent=news;
     this.News=this.NewsContent.articles;
     for(let i=0;i<this.News.length;i++)
     {
      this.News[i].source=this.NewsContent.source;
     }});   
  
  

  }

   

}
