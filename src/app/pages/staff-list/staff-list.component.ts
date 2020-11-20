import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { StaffInfo } from '../../typescripts/staff.D';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffInfo: StaffInfo = {
    username: '',
    staffs: []
  };
  userName = '';
  salaryIncrease = 0;
  isUnion = false;
  en = true;
  zh = false;
  constructor(
    private service: StaffService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      this.userName = params.userName;
    });
  }

  ngOnInit(): void {
    this.service.getStaffs().subscribe(res => {
      this.staffInfo = res || {};
    }, error => {
      console.log(2212);
    });
  }
  changeSalary(): void {
    this.isUnion = !this.isUnion;
  }
  btnClick(): void {
    this.salaryIncrease = this.salaryIncrease + 1;
  }

}
