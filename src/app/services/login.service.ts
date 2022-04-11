import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl="http://localhost:9595"
  
  constructor(private http:HttpClient) { }

  // Calling the server to generate token
  generateToken(credentials:any)
  {
    return this.http.post(`${this.baseurl}/auth`, credentials);
  }


  // For Login User
  loginUser(token:any)
  {
    localStorage.setItem("token", token);
    return true;
  }

  // TO check that is user is logged in or not
  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  logout()
  {
    localStorage.removeItem("token");
    window.location.href="/login"
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }
  
}
