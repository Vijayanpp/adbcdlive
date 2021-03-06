﻿import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent} from './Login Page/forgotpassword/forgotpassword.component';
import {  MainnewsComponent } from './mainnews/mainnews.component';
/*import { CalendarComponent } from './Calendar Module/Components/calendar/calendar.component';*/
import { NewsdetailComponent } from './newsdetail/newsdetail.component'
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { MoviesComponent } from './movies/movies.component';

import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { FashionComponent } from './fashion/fashion.component';
import { TechnologyComponent } from './technology/technology.component';
import { MusicComponent } from './music/music.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const appRoutes: Routes = [
 
     {path: '', component:MainnewsComponent},
      {path: 'Entertainment', component: EntertainmentComponent},
      {path: 'Movies', component: MoviesComponent},
      {path: 'News', component: NewsComponent},
      {path: 'Business', component: BusinessComponent},
      {path: 'Sports', component: FashionComponent},
      {path: 'Music', component: MusicComponent},
      {path: 'Technology', component:TechnologyComponent},
       {path: 'detail/:id', component: MoviedetailComponent},         
     { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);