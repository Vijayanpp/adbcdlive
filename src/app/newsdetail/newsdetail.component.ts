import { Component, OnInit,Inject } from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
	public currentId;
	public NewsContent;
	public URL;
  public id:number;
  public sub:any;

  constructor(@Inject('news') private moviedetail,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.URL='https://api.themoviedb.org/3/movie/346672?api_key=9cdc371119e251328b3113f78936e475';
       	this.loadPage(this.URL);
      
    });
  
  }

  loadPage(url)
  {
  
  this.moviedetail. retrieveNews(url).subscribe(news=>
  	 {
      console.log(news);
    }); 
  

  }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
