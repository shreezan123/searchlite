import { Injectable } from '@angular/core';

@Injectable()
export class ProfileDataService {

  user: any;

  constructor() {}

  setUser(u: any){
    this.user = u;
  }

  getUser(){
    return this.user;
  }

  getUID(){
    if(this.user != null)
      return this.user.uid;
    return null;
  }

}
