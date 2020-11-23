import { getUserInfo } from './../../storage/userInfo';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserInfo } from '../../typescripts/staff.D';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  // 处理导航到某路由的情况
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo: UserInfo | undefined = getUserInfo();
    if (!userInfo) {
      alert('没有登录');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  // 等同 canActivate，只不过针对是所有子路由
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo: UserInfo | undefined = getUserInfo();
    console.log('chilld-route', childRoute.url, userInfo);
    if (!userInfo) {
      alert('没有登录');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  // 离开时候的路由守卫。提醒用户执行保存操作后才能离开
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo: { userName: string } | undefined = getUserInfo();
    console.log('de-route', currentRoute.url, userInfo);
    return true;
  }
  // 控制是否允许延迟加载整个模块
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo: { userName: string } | undefined = getUserInfo();
    console.log('load-route', route.path, userInfo);
    return true;
  }
}
