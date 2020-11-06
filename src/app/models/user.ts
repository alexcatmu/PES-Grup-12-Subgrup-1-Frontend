interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isManager: boolean;
}


export class User implements IUser{
  email: string;
  firstName: string;
  id: number;
  isManager: boolean;
  lastName: string;
  username: string;
}
