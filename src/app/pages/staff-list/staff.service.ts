import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private headers: HttpHeaders;
  private staffUrls = 'api/staffs';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-type', 'application/json');
  }
  staffInfo = [];
  getStaffs(): any {
    return this.http.get(this.staffUrls);
  }
}
