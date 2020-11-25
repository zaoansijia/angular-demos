import { BrowserStorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { UserInfo } from '../typescripts/staff.D';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: BrowserStorageService,
  ) { }
  setUserInfo(value: UserInfo): void {
    this.storage.set('userInfo', JSON.stringify(value));
  }
  getUserInfo(): UserInfo | undefined {
    const user: any = this.storage.get('userInfo');
    return user ? JSON.parse(user) : undefined;
  }
  removeUserInfo(): void {
    this.storage.remove('userInfo');
  }
  getUserByKey(key: string): void {
    const user: any = this.storage.get('userInfo');
    return user ? JSON.parse(user)[key] : '';
  }
}
