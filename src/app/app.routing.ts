import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent} from './Login Page/forgotpassword/forgotpassword.component';
import {  MainnewsComponent } from './mainnews/mainnews.component';
/*import { CalendarComponent } from './Calendar Module/Components/calendar/calendar.component';*/
import { NewsdetailComponent } from './newsdetail/newsdetail.component'
const appRoutes: Routes = [
 
     {path: '', component: MainnewsComponent},
      {path: 'newsdetail/:id', component: NewsdetailComponent},
           /* {path: 'calendar', component: CalendarComponent}*/
     { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);