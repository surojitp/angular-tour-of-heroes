import { Component, OnInit } from '@angular/core';

import {HeroService} from "../hero.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hero_d;
  //s_hero;

  constructor(private h:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(){
    this.h.getHeros().subscribe(
      rh => this.hero_d = rh.slice(1,5)
    );
  }
  // fun_s_hero(str){
  //   this.s_hero = str;
  // }

}
