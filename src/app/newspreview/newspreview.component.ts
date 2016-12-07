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

}
