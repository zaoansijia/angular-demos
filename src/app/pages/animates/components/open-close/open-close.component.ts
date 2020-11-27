import { trigger, state, animate, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open=>close', [
        animate('1s')
      ]),
      transition('close=>open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
