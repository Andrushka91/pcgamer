import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 

  constructor(private modalService: NgbModal, public languageService: LanguageService, private translateService: TranslateService ) {
    this.translateService.use(localStorage.getItem('language'));
  }




  
}
