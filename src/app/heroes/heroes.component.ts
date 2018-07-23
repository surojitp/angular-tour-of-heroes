import { Component, OnInit } from '@angular/core';

import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
    id: 1,
    name: "surojit"
  }

  //hero_list = HEROES;
  hero_list;

  selectedHero;

  constructor(private hs:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(){
    this.hs.getHeros().subscribe(h => this.hero_list = h);
  }

  add(name){
    name = name.trim();
    if(!name){
      return false;
    }
    this.hs.addHero({ name} as Hero).subscribe(
      (hero) => this.hero_list.push(hero)
    )
    
  }

  delete(hd){

    this.hero_list = this.hero_list.filter(h => h!== hd);
    this.hs.deleteHero(hd).subscribe();

  }

}
