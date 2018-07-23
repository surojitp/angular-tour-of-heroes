import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  msg:string[] = [];
  constructor() { }

  addMsg(m){
    this.msg.push(m);
  }

  clearMsg(){
    console.log(123);
    this.msg = [];
  }
}
