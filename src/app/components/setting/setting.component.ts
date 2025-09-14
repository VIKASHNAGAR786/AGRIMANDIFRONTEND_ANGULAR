import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertService } from '../../services/alert.service';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';


@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule 
  ],       
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService,
    private alertService: AlertService,
     private userInfo: UserinfowithloginService
    
  ) {}

  ngOnInit(): void {
    let lang: string = this.userInfo.getUserLang() ?? 'en';
    this.settingService.setLanguage(lang); 
  }

  language: string = '';
  onLangChange(lang: string): void {
    if(lang ==="en"){
      this.language = "English";
    }else{
      this.language = "हिन्दी";
    }
    this.alertService.showAlert(`Language changed to ${this.language}`, 'success');
    this.settingService.setLanguage(lang);
    this.userInfo.changeUserLang(lang);
  }
}
