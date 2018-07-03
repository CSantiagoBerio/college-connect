export class LoginForm {
    username: string;
    password: string;
}


export class User {
    usrid: number;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    username: string;
}

export const apiRoot = 'http://jechat-restapi.herokuapp.com/JEChat/';
