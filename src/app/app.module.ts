import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';
import { routing }      from './app.routing';
import { LoginsComponent } from './Login Page/logins/logins.component';
import {  MainnewsComponent } from './mainnews/mainnews.component';
import { AuthenticationService} from './Login Page/services/authentication.service';
import { StorageService } from './Login Page/services/storage.service';
import { SmallloaderComponent } from './smallloader/smallloader.component';
import { ForgotpasswordComponent } from './Login Page/forgotpassword/forgotpassword.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {Md5} from 'ts-md5/dist/md5';
/*import {store} from "./Calendar Module/Store/store";*/
import{NewsfetchService} from '../providers/newsfetch.service';
import{ShareddataService} from'../providers/shareddata.service';
import { NewspreviewComponent } from './newspreview/newspreview.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { FashionComponent } from './fashion/fashion.component';
import { TechnologyComponent } from './technology/technology.component';
import { MusicComponent } from './music/music.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoaderComponent,
    LoginsComponent,
    SmallloaderComponent,
    ForgotpasswordComponent,
    MainnewsComponent,
    NewspreviewComponent,
    NewsdetailComponent,
    EntertainmentComponent,
    MoviesComponent,
    NewsComponent,
    BusinessComponent,
    FashionComponent,
    TechnologyComponent,
    MusicComponent
    /*ContactComponent,
    CalendarComponent,
    WeekViewComponent,
    MonthViewComponent,
    DayViewComponent,
    DayDetailComponent,
    AppointmentDetailComponent,*/   
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    routing,
    SimpleNotificationsModule,
    /*StoreModule.provideStore(store),*/
   
  ],
  providers: [AuthenticationService,StorageService,ShareddataService,Md5,{provide:'news',useClass:NewsfetchService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
