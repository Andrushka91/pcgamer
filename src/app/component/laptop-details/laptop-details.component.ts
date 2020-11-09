import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
   }

  ngOnInit(): void {
  }

}
