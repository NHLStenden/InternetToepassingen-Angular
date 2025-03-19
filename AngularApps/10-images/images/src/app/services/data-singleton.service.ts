import { Injectable } from '@angular/core';
import {WebsiteUser} from '../classes/websiteUser';

@Injectable({
  providedIn: 'root'
})
export class DataSingletonService {
  private users: Array<WebsiteUser> | undefined = new Array<WebsiteUser>();

  constructor() {
    this.users = [];
    this.users.push(new WebsiteUser('jannie', 'female01.jpeg', 'Jannie de Vries'));
    this.users.push(new WebsiteUser('Martin', 'male01.jpeg', 'Martin Molema'));
    this.users.push(new WebsiteUser('Jan', 'male02.jpeg', 'Jan Karel van Amsterdam'));
    this.users.push(new WebsiteUser('', 'female02.jpeg', ''));
    this.users.push(new WebsiteUser('', 'female03.jpeg', ''));
    this.users.push(new WebsiteUser('Bernhard', 'male03.jpeg', 'Prins Bernhard'));

  }

  get allUsers(): Array<WebsiteUser> | undefined {
    return this.users;
  }

  getUser(id:string): WebsiteUser | undefined {
    return this.users?.find(u => u.username === id);
  }
}
