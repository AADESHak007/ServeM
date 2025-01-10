import { atom } from "recoil";

export interface User{
    id:number,
    name:string,
    email:string,
}


export const LoginStatus =atom({
    key: 'loginStatus',
    default: false,
})
export const Userdetails = atom<User>({
    key: 'userDetails',
    default: {

        id: 0,

        name: '',

        email: '',

    },
})
