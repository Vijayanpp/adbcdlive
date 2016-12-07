import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import {  StorageService } from '../services/storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import {NotificationsService, SimpleNotificationsComponent,  PushNotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    private username:string;
    private pw:string;
    private checked:boolean=false;
    private loginForm: FormGroup;

    public deleteId: string;

    

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
   
    constructor(private authenticationService: AuthenticationService, private fb: FormBuilder, private storageservice: StorageService, private _service: NotificationsService,private router:Router) {  

    
    }

     
    

    ngOnInit() {
        // reset login status

        this.authenticationService.logout();
        let pitsolution='';
      if(this.storageservice.get('pitsolution').length>0)
      {
         
        pitsolution=JSON.parse(this.storageservice.get('pitsolution'))
       }
    
      
        this.username=(pitsolution!=''&&pitsolution.length>0)?window.atob(pitsolution[0]):"";
        this.pw=(pitsolution!=''&&pitsolution.length>0)?window.atob(pitsolution[1]):"";
        this.checked=(pitsolution!=''&&pitsolution.length>0)?true:false;

        this.loginForm = this.fb.group({
        username: [this.username, [Validators.required, Validators.minLength(5)]],
        password: [this.pw, [Validators.required, Validators.minLength(5)]],
        checked:[this.checked]
      
    }) 
       

    }


    storeUnAndPw(remember:boolean,value:any)
    {
      
    if(remember)
    {
      this.storageservice.set('pitsolution',value);
      
    }
    else
    {
       this.storageservice.remove("pitsolution");
      
    }
}



    login(model:any) {
        this.loading = true;
       
              this.storeUnAndPw(model.value.checked,[window.btoa(model.value.username),window.btoa(model.value.password)]);      
             this.authenticationService.login(model.value.username,model.value.password)
            .subscribe(result => {
               
               console.log(result)
                if (result == true) {
                    this.router.navigate(['/calendar']);

                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                    this._service.error('Login Failed' ,'Username or password is incorrect', {id: 123});

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
