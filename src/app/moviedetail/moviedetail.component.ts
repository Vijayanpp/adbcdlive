import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  public currentId;
	public NewsContent;
	public URL;
  public id:number;
  public sub:any;
  public movie:any;
  
  constructor(@Inject('news') private moviedetail,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
      this.URL='https://api.themoviedb.org/3/movie/'+this.id+'?api_key=9cdc371119e251328b3113f78936e475';     
      
  this.moviedetail. retrieveNews(this.URL).subscribe(news=>
  	 {
     this.movie=news;
      console.log(this.movie);
    }); 
    });

    
  
  }

 
  

  

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
