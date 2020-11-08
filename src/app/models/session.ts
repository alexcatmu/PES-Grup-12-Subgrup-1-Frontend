import {User} from './user';

interface ISession {
  token: string;
  user: User;
}


export class Session implements ISession {
  token: string;
  user: User;
}
