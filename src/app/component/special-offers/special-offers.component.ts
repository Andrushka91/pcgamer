import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
   }

  ngOnInit(): void {
  }

}
