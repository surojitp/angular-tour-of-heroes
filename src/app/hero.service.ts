import { Injectable } from '@angular/core';

import {HEROES} from "./mock-heroes";

import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import {MessagesService} from "./messages.service";
import {HttpClient,HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

 
  constructor(private ms:MessagesService,private http:HttpClient) { }

  
  OnInit(){
    console.log(213);
  }

  private log(msg){
    this.ms.addMsg(`HeroService:${msg}`);
  }

  getHeros():Observable<any>{
    // this.ms.addMsg("Heros Fetched successfully");
    // return of (HEROES);
    this.log("Heros Fetched successfully");
    return this.http.get<any>(this.heroesUrl);
  }

  

  get_single_hero(id):Observable<any>{
    //alert("bbb"+id);
    // this.ms.addMsg(`HeroService: fetched hero id=${id}`);
    // return of (HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    //alert(url)
    return this.http.get<Hero>(url);
  }

  updateHero(hero):Observable<any>{
    return this.http.put<any>(this.heroesUrl,hero,httpOptions)
  }

  addHero(h):Observable<any>{
    return this.http.post(this.heroesUrl,h,httpOptions);
  }

  deleteHero(hero: Hero | number){

    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`; 
    
    return this.http.delete(url,httpOptions)

  }

  searchHero(trm):Observable<any>{
    if(!trm){
      return of ([]);
    }
    return this.http.get(`${this.heroesUrl}/?name=${trm}`);
  }
}
