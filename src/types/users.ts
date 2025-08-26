export type UserProps = {
    confirmed: boolean;
    blocked: boolean;

    homes: string[];

    username: string;
    email: number;
    role: number;
    id: string;
}

export type UserDataProps = {
    loginToken: string;
    userData: UserProps;
}