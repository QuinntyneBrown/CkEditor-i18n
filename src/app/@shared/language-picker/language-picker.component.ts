import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { combine } from '@core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent {


  currentLanguage = this._translateService.currentLang;

  constructor(
    private readonly _translateService: TranslateService
  ) {

  }

  toggle() {
    var language = this._translateService.currentLang == "en" ? "fr": "en";
    localStorage.setItem("currentLanguage", language);
    window.location.reload();
  }
}

@NgModule({
  declarations: [
    LanguagePickerComponent
  ],
  exports: [
    LanguagePickerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class LanguagePickerModule { }
