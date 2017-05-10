import { Injectable } from '@angular/core';

import { User } from './user';

const USERS: User[] = [
  {id: 1, name: 'sasha', password: 'password'},
  {id: 2, name: 'jr', password: 'password'},
  {id: 3, name: 'first-ave', password: 'password'}
];

@Injectable()
export class LoginService {

  constructor() { }

  loginUser(username: string, password: string): User {
    return USERS.find(user => username === user.name && password === user.password)
  }

}
