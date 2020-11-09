import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: string = 'andrei@mail.com';
  password: string = 'andreimail';

  constructor(private loginService: LoginService,private translateService: TranslateService) {
    console.log("sign-in loggedIn:" + this.loginService.loggedIn);
    this.translateService.use(localStorage.getItem('language'));
  }

  signIn() {
    this.loginService.login(this.email, this.password).then((data) => {
      console.log("Usuario autenticado");

      this.loginService.loggedIn = true;

    // localStorage.setItem('loggedIn',this.loginService.loggedIn);

      console.log("u got logged in bro! logedInSignIn: " + this.loginService.loggedIn);
    
    }, (error) => {
      console.log(error);
      console.log(this.email);
      console.log(this.password);
    });
  }







}
