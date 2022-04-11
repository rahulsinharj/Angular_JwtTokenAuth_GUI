import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
