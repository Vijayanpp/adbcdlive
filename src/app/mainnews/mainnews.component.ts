import { Component, OnInit ,Inject,Input} from '@angular/core';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
public NewsContent;
public News;
public selectNews;


 constructor( @Inject('news') private todayNews) { }  
   
  ngOnInit() {
  	 this.todayNews.searchNews().subscribe(news=>
  	 {
     this.NewsContent=news;
     this.News=this.NewsContent;
     });

     

    /*this.todayNews.retrieveNews('https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e').subscribe(news=>
     {
     this.NewsContent=news;
     this.News=this.News.concat(this.NewsContent.articles);
     for(let i=0;i<this.News.length;i++)
     {
      this.News[i].source=this.NewsContent.source;
     }
     });*/

    
  }
  


}
