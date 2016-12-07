import { Component, OnInit,Input} from '@angular/core';
import{ShareddataService} from'../../providers/shareddata.service';

@Component({
  selector: 'app-newspreview',
  templateUrl: './newspreview.component.html',
  styleUrls: ['./newspreview.component.css']
})
export class NewspreviewComponent implements OnInit {
	@Input() news

  constructor(private shareddataService:ShareddataService) { }

  ngOnInit() {
  }


   get id() {
    return this.news.id;
  }

  get source()
  {
  	return this.news.source
  }
  get time()
  {
  	return this.news.publishedAt
  }
  get url()
  {
  	return this.news.url;
  }

  get title() {
    return this.news.title;
  }

  get author() {
    return this.news.author;
  }

  get description() {
    return this.news.description;
  }

  get thumbnail(): string | boolean {
    if (this.news.imageLinks) {
      return this.news.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
  slectedNews(currentnews)
  {
  this.shareddataService.store.splice(0,1,currentnews)
  }

}
