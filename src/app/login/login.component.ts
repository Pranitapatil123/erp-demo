import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/login/auth-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  loginRequest = {
    "password": "",
    "username": ""
  }

 

  constructor( private authloginservice: AuthLoginService,  private router: Router,) { }

  ngOnInit(): void {}

  login(){
    this.authloginservice.isLogin(this.loginRequest).subscribe((res: any) => {
      //console.log(res);
      if (res.email == "admin@gmail.com") {
      this.router.navigate(['/admin']);
      console.log('success');
      alert('Login Successfull');
      }
    }, (err) => {
      console.log('Error While Login');
      console.error(err);
    });
  }
}
