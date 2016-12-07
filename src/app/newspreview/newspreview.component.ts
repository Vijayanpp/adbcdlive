import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-newspreview',
  templateUrl: './newspreview.component.html',
  styleUrls: ['./newspreview.component.css']
})
export class NewspreviewComponent implements OnInit {
	@Input() news

  constructor() { }

  ngOnInit() {
  }


   get id() {
    return this.news.id;
  }
  
  get source()
  {
  	return this.news.source
  }
  get publishTime()
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

}
