import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
public NewsContent;
public News;
  constructor( @Inject('news') private todayNews) {

   }

  
   
  ngOnInit() {
  	 this.todayNews.searchNews().subscribe(news=>
  	 {
     this.NewsContent=news;
     this.News=this.NewsContent.articles;

     }
   	)
  }


}
