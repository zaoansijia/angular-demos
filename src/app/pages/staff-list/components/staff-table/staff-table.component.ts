import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PriceTransformPipe } from 'src/app/shared/pipes/price-transform.pipe';
import { Staff } from '../../../../typescripts/staff.D';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css'],
  // providers: [PriceTransformPipe], // Defines the name that can be used in the template to assign this directive to a variable
})
export class StaffTableComponent implements OnInit {
  @Input() staffs: Staff;
  @Input() isUnion: boolean;
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
