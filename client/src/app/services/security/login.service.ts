import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/security/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  url: String = "http://localhost:3000/api/";

  user: UserModel;

  setLogged(value: UserModel) {
    this.userInfo.next(value);
  }

  getUserInfo() {
    return this.userInfo.asObservable();
  }

  constructor(private http: HttpClient) { }

  loginUser(username: String, pass: String): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}Users/login?include=User`, { email: username, password: pass }, {
      headers: new HttpHeaders({
        'access-token': "asdasdkjdfklj83798"
      })
    });
  }

}
