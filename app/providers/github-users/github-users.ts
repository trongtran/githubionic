import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

// Import the user model
import User from '../../models/user'

/*
  Generated class for the GithubUsers provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
  githubUsers: any = null;

  constructor(public http: Http) {}

  load() {
    if (this.githubUsers) {
      // already loaded users
      return Promise.resolve(this.githubUsers);
    }

    // Get users from github
    return this.http.get(`https://api.github.com/users`)
      // Cast the response into an array of users
      .map(res => <Array<User>>(res.json()))
      // Assign the response to the class property githubusers
      .do(users => this.githubUsers = users)
      // Return the result as a promise
      .toPromise();

  }

  // Get user details from the github api  
  loadDetails(login: string) {
    // get the data from the api and return it as a promise
    return this.http.get( `https://api.github.com/users/${login}`)
      // Cast the json response into a User
      .map(res => <User>(res.json()))
      // Convert the response to a Promise
      .toPromise()
  }

  // Search for github users  
  searchUsers(searchParam: string) {
    // get the data from the api and return it as a promise
    return this.http.get(`https://api.github.com/search/users?q=${searchParam}`)
      // Cast the json response into an array of Users  
      .map(res => <Array<User>>(res.json().items))
      // Convert the response to a Promise
      .toPromise()
  }
}