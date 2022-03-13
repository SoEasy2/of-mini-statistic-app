export interface IAuth{
    login:string;
    password: string;
    telegramId?: string;
}
export interface IUpdate{
    id: number,
    password: string,
    confirm: string,
    login: string,
    telegramId: string
}