export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    status: boolean;
    date: string;
    data: string;
}
