import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settingService.setLanguage('en'); 
  }

  onLangChange(lang: string): void {
    this.settingService.setLanguage(lang);
  }
}
