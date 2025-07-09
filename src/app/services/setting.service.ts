import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}


setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  translateKey(key: string): string {
    return this.translate.instant(key);
  }

  onLangChange(callback: (lang: string) => void) {
    this.translate.onLangChange.subscribe(event => callback(event.lang));
  }
}
