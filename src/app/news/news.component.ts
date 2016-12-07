import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  	public currentNews;
	public NewsContent;
	public News

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage()
  {
    if(this.shareddataService.store[0])
    {
  this.currentNews=this.shareddataService.store[0];
    }
    else
    {
      this.currentNews=' https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e'
    }
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
