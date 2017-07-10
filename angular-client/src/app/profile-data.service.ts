import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileDataService {

  user: Observable<any>;

  constructor() {}

  setUser(u: any){
    this.user = u;
  }

  getUser(){
    return this.user;
  }

}
