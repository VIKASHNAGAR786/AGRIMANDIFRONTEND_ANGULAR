import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settingService.setLanguage('en'); 
  }

  onLangChange(lang: string): void {
    this.settingService.setLanguage(lang);
  }
}
