import { LoginGuard } from './pages/login/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 页面路由
const myRouter: Routes = [
    {
        path: 'login',
        // component: LoginComponent
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    },
    // 懒加载的模式，不需要component替代为loadChildren 配合子module的forChild使用
    {
        path: 'staffList',
        loadChildren: () => import('./pages/staff-list/staff-list.module').then(m => m.StaffListModule),
        canActivate: [LoginGuard],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
@NgModule({
    imports: [RouterModule.forRoot(myRouter)],
    exports: [RouterModule]
})
export class AppRouteModule { }
