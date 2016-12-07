import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
	  public token: string;

  constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password): Observable<boolean> {
        return this.http.post('https://office.inquisiv.ch/authentication/login.json', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
               
                let token = response.json();
              
                if (token.status==0) {                   
                   console.log('logged in');
                    return true;
                } else {
                   
                   /* alert(token.message);*/
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    resetpassword(email)    
    {
       return this.http.post('https://inquisivdev.mypits.org/authentication/request_reset_password.json',JSON.stringify({ email: email})).map((response: Response) => {
               
                let token = response.json() && response.json().token;
                if (token) {
                    
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

}
