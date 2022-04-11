import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("Form is submitted");
    if((this.credentials.username != '' && this.credentials.password != '') 
          && (this.credentials.username != null && this.credentials.password != null) )
    {
      console.log("Submitted");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
            console.log(response);    // Success
            this.loginService.loginUser(response.token);
            window.location.href="/dashboard"
        },
        error=>{
            console.log(error);       // Error
        }
      )
    }
    else{
      alert("Values are required !");
    }
  }
}
