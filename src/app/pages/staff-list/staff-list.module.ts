import { IndexModule } from './../../shared/index.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list.component';

import { StaffTableComponent } from './components/staff-table/staff-table.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { PriceTransformPipe } from 'src/app/shared/pipes/price-transform.pipe';
// AoT
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    StaffListComponent,
    StaffTableComponent,
  ],
  imports: [
    CommonModule,
    IndexModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }
    ),
    RouterModule.forChild([
      {
        path: '',
        component: StaffListComponent,
      },
    ])
  ],
})
export class StaffListModule { }
