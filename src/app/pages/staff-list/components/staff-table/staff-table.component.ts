import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Staff } from '../../../../typescripts/staff.D';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css'],
})
export class StaffTableComponent implements OnInit {
  @Input() staffs: Staff;
  @Input() isUnion: boolean;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
