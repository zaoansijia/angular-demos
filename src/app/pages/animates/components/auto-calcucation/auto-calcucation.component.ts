import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-calcucation',
  templateUrl: './auto-calcucation.component.html',
  styleUrls: ['./auto-calcucation.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('*=>void', [
        style({ height: '*' }),
        animate(150, style({ height: 0 }))
      ])
    ])
  ]
})
export class AutoCalcucationComponent implements OnInit {
  names: { name: string }[] = [
    { name: 'Bullet Yuan' },
    { name: 'Ossa Tu' },
    { name: 'Martin Wang' },
    { name: 'Scott Tian' },
    { name: 'ZhengHong Wang' },
    { name: 'Phoebe Yang' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  remove(name: string): void {
    this.names = this.names.filter(hero => hero.name !== name);

  }

}
