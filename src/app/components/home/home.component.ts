import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public LoggedInFlag = false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
     this.LoggedInFlag = this.loginService.isLoggedIn();
  }

  logoutUser()
  {
      this.loginService.logout();
  }
}
