export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refresh_token?: string;
  user?: IUser;
}

export interface IUser {
  id: string;
  role?: string;
  fullname?: string;
  username?: string;
}
