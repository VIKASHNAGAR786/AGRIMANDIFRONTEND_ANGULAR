import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertService } from '../../services/alert.service';
import e from 'express';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule // ✅ add here so | translate works
  ],       
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService,
    private alertService: AlertService,
    
  ) {}

  ngOnInit(): void {
    this.settingService.setLanguage('en'); 
  }

  language: string = '';
  onLangChange(lang: string): void {
    if(lang ==="en"){
      this.language = "English";
    }else{
      this.language = "हिन्दी";
    }
    this.alertService.showAlert(`Language changed to ${this.language}`, 'success');
    this.alertService.showAlert(`Language changed to ${this.language}`, 'error');
    this.alertService.showAlert(`Language changed to ${this.language}`, 'warning');
    this.alertService.showAlert(`Language changed to ${this.language}`, 'info');
    this.settingService.setLanguage(lang);
  }
}
