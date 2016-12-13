import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-moviepreview',
  templateUrl: './moviepreview.component.html',
  styleUrls: ['./moviepreview.component.css']
})
export class MoviepreviewComponent implements OnInit {
	@Input() movie

  constructor() { }

  ngOnInit() {
  }


   

}
