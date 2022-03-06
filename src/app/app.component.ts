import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(readonly _translateService: TranslateService) {
    var currentLanguage = localStorage.getItem("currentLanguage") || "en";
    _translateService.setDefaultLang(currentLanguage);
    _translateService.use(currentLanguage);     
  }

  readonly config = {
    language: localStorage.getItem("currentLanguage")
  }

}
