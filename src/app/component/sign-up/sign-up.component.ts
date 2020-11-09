import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private loginService: LoginService,private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
  }

  register() {
    if (this.password == this.confirmPassword) {
      this.loginService.register(this.email, this.password).then((data) => {
        console.log("Autentificado");
        this.loginService.loggedIn = true;
        console.log("gLoggedIn:" + this.loginService.loggedIn);
      }, (error) => {
        console.log(error);
      })
    } else {
      alert("The password and confirmacion don't match");
    }
  }
}
