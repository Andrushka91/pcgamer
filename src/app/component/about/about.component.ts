import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lng: number = -0.899664;
  lat: number = 41.636941;
  zoom: number = 14;
  
  constructor(private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));

   }

  ngOnInit(): void {
  }

}
