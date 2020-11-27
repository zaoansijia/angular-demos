import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-animates',
  templateUrl: './animates.component.html',
  styleUrls: ['./animates.component.css'],
  animations: []
})
export class AnimatesComponent implements OnInit {
  type = 'scroll-test';
  constructor() { }

  ngOnInit(): void {
  }
  changeComponent(type: string): void {
    this.type = type;
  }

}
