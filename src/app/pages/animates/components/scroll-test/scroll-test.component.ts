import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-test',
  templateUrl: './scroll-test.component.html',
  styleUrls: ['./scroll-test.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ offset: '*' })),
      transition('*=>void', [
        style({ offset: '*' }),
        animate(150, style({ offset: 0 }))
      ])
    ])
  ]
})
export class ScrollTestComponent implements OnInit {
  names: { name: string }[] = [
    { name: 'Bullet Yuan' },
    { name: 'Ossa Tu' },
    { name: 'Martin Wang' },
    { name: 'Scott Tian' },
    { name: 'Zheng Wang' },
    { name: 'Phoebe Yang' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  btnClick(name: string): void {

  }

}
