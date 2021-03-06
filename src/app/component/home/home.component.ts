import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {

    if (localStorage.getItem('language') != null) {
      this.translateService.use(localStorage.getItem('language'));

    } else {
      this.translateService.use('en');
    }
  }
}
