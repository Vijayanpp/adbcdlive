import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
public NewsContent;
public News;
public newsObject;
  constructor( @Inject('news') private todayNews) {

   }

  
   
  ngOnInit() {
  	 this.todayNews.searchNews().subscribe(news=>
  	 {
     this.NewsContent=news;
     this.News=this.NewsContent.articles;
     for(let i=0;i<this.News.length;i++)
     {
      this.News[i].source=this.NewsContent.source;
     }});
  }


}
