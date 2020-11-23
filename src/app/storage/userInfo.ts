import { Observable } from 'rxjs';
import { UserInfo } from '../typescripts/staff.D';
// 存储userInfo
export const setUserInfo = (values: UserInfo): void => {
    localStorage.setItem('userInfo', JSON.stringify(values));
};
export const getUserInfo = (): UserInfo| undefined => {
    return JSON.parse(localStorage.getItem('userInfo'));
};
export const clearUserInfo = (): void => {
    localStorage.removeItem('userInfo');
};
