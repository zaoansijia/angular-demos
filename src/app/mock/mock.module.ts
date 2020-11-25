import { InMemoryDataService } from './staff-mock-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // mock数据，数据拦截
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ],
  exports: [HttpClientInMemoryWebApiModule]
})
export class MockModule { }
