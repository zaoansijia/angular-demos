import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { StaffInfo } from '../../typescripts/staff.D';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
  // providers: [StaffService]
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
    private router: Router,
    private userService: UserService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.userName = params.userName;
    });
  }

  ngOnInit(): void {
    // 这是观察者Observable模式,简化版，可以理解为如下
    // this.service.getStaffs().subscribe({
    //     next: res => this.staffInfo = res || {}, // 类似于es6的promise.then
    //     error: err => console.error('Observer got an error: ' + err), // 类似于es6的promise.catch
    //     complete: () => console.log('Observer got a complete notification'), // 类似于es6的promsie.finally
    // });
    this.service.getStaffs().subscribe(res => {
      this.staffInfo = res || {};
    }, error => {
      console.log(error.message);
    }, () => {
      console.log('complate');
    });
  }
  changeSalary(): void {
    this.isUnion = !this.isUnion;
  }
  btnClick(): void {
    this.salaryIncrease = this.salaryIncrease + 1;
  }
  logout(): void {
    this.userService.removeUserInfo();
    // 跳转路径 实现的是动态跳转数据
    this.router.navigate(['/login']);
  }
}
