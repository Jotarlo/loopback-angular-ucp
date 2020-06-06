export class UserModel{
    username: String;
    email: String;
    password: String;
    isLogged: Boolean = false;
    token: String;
    user: UserModel;
}