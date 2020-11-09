import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { first, tap } from 'rxjs/operators';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public loginService: LoginService, private languageService: LanguageService, private translateService: TranslateService) {
    // console.log("nav loginState:" + loginService.loggedIn);
    
  }
  
  logOut() {
    this.loginService.logOut();
    this.loginService.checkState().pipe(first()).pipe(
      tap(user => {
        if (user) {
          this.loginService.loggedIn = true;
          console.log("U got logged out bro! nav-logout-loggedIn: " + this.loginService.loggedIn)
          location.reload();
        } else {
          this.loginService.loggedIn = false;
        }
      })
    ).subscribe();
  }

}
