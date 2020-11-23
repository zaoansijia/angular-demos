import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  isEn = true;
  langs: {
    value: string,
    name: string
  }[] = [
      { value: 'en', name: 'English' },
      { value: 'zh', name: '中文' },
    ];
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'zh']);

    // 设置默认语言，一般在无法匹配的时候使用
    // this.translate.setDefaultLang('zh');
    // this.translate.use('en');
  }
  changeLang(lang: string): void {
    this.translate.use(lang);
  }
}
