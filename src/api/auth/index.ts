import {$api} from "../../http";
import {IAuth} from "../../models/auth";

export const login = async (dto: IAuth) => {
    const response = await $api.post('user/login', dto);
    localStorage.setItem('user_id', response.data.id);
    return response.data;
}
export const register = async (dto: IAuth) => {
    const response = await $api.post('user/signUp', dto);
    localStorage.setItem('user_id', response.data.id);
    return response.data;
}
export const getUserById = async (id: number) => {
    const response = await $api.get(`/user/${id}`);
    return response.data;
}
export const logout = () => {
    localStorage.removeItem('user_id');
    return null;
}