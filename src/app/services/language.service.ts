import { Injectable, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
declare var $ : any;
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  globalLanguage: string = 'en';


  public language = new FormGroup({
    language: new FormControl('')
  });

  constructor(private translateService: TranslateService) {
  }

  setLanguage() {
    this.globalLanguage = this.language.value.language;
    localStorage.setItem('language', this.language.value.language)
    this.translateService.use(this.globalLanguage);
    $('#exampleModal').modal('hide');
  }

}
