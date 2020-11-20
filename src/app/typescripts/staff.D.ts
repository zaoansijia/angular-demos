export interface Staff {
    id: number;
    staffNo: number;
    name: string;
    salary: number;
}
export interface StaffInfo {
    username: string;
    staffs: Staff[];
}