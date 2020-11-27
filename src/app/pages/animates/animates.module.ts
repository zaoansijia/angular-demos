import { RouterModule } from '@angular/router';
import { AnimatesComponent } from './animates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SlideStatusComponent } from './components/slide-status/slide-status.component';
import { AutoCalcucationComponent } from './components/auto-calcucation/auto-calcucation.component';
import { ScrollTestComponent } from './components/scroll-test/scroll-test.component';

@NgModule({
  declarations: [
    AnimatesComponent,
    OpenCloseComponent,
    SlideStatusComponent,
    AutoCalcucationComponent,
    ScrollTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnimatesComponent,
      },
    ]),
  ]
})
export class AnimatesModule { }
