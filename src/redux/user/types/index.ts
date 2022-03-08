
export interface IModel{
    id: number,
    name: string,
    url: string,
    avatarUrl: string,
}

interface IUser{
    id: number,
    login: string,
    password: string,
    telegramId: number,
    role: string,
    models: IModel[]
}

export interface IState{
    isLoad: boolean;
    error: any;
    data: IUser | null
}