import { Injectable } from '@angular/core';

@Injectable()
export class ResultsService {

  result: any;

  constructor() { }

  getResult(){
   
    return this.result;
  }

  setResult(r: any){
    this.result = r;
  }

}
