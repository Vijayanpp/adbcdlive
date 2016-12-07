import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent} from './Login Page/forgotpassword/forgotpassword.component';
import {  MainnewsComponent } from './mainnews/mainnews.component';
/*import { CalendarComponent } from './Calendar Module/Components/calendar/calendar.component';*/
const appRoutes: Routes = [
 
     {path: '', component: MainnewsComponent},
      {path: 'forgotpassword', component: ForgotpasswordComponent},
           /* {path: 'calendar', component: CalendarComponent}*/
     { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);