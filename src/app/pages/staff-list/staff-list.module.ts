import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list.component';

import { StaffTableComponent } from './components/staff-table/staff-table.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// // AoT
// export const createTranslateLoader = (http: HttpClient) => {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// };

@NgModule({
  declarations: [
    StaffListComponent,
    StaffTableComponent,
  ],
  imports: [
    SharedModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [HttpClient],
    //   },
    //   defaultLanguage: 'en'
    // }
    // ),
    RouterModule.forChild([
      {
        path: '',
        component: StaffListComponent,
      },
    ])
  ],
})
export class StaffListModule { }
