import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8080/login';

  private _token: string | undefined;

  private _user: any = {
    isAuth: false,
    isAdmin: false,
    user: undefined
  }

  constructor(private http: HttpClient) { }

  loginUser({ username, password }: any) {
    return this.http.post<any>(this.url, { username, password });
  }

  set user(user: any) {
    this._user = user;
    sessionStorage.setItem('login', JSON.stringify(user));
  }

  get user() {
    return this._user;
  } 

  set token(token: string){
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  get token(): string | undefined {
    return this._token!;
  }
}
