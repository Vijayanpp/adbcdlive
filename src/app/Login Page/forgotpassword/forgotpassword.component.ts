import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService, SimpleNotificationsComponent,  PushNotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 public resetForm: FormGroup;
 public error:string;
 public loading:boolean;
 public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'bottom']
    };
 constructor(private location:Location,private authenticationService: AuthenticationService, private fb: FormBuilder,private _service: NotificationsService) { }

  ngOnInit() {
  	 this.resetForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5)]],
       
    })
}


abort()
{
	this.location.back();
}

resetPassword(emaildata)
{
	this.loading=true;
  this.authenticationService.resetpassword(emaildata.value.email)
  .subscribe(resultS => {
                if (resultS === true) {
                    /*this.router.navigate(['/']);*/
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                    this._service.error('Email is not exists' ,'This is not a correct email', {id: 123});
                }
            });
}


onCreate(event) {
        console.log(event);
    }

    onDestroy(event) {
        console.log(event);
    }


}


