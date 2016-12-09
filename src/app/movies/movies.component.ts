import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  	public currentNews;
	public NewsContent;
	public News

  constructor(private shareddataService:ShareddataService,@Inject('news') private currentnews) { }

  ngOnInit() {
  	this.loadPage();
  }

  loadPage()
  {
    

  this.currentnews. retrieveNews('/movies').subscribe(news=>
  	 {
    this.NewsContent=news;
     this.News=this.NewsContent
     });   
  
  

  }

}
