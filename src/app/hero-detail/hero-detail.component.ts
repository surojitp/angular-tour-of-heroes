import { Component, OnInit,Input } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  //hero:Hero;

  constructor(private hs:HeroService,private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.get_hero();
  }

  get_hero(){
    const id = +this.route.snapshot.paramMap.get('id');
    //alert("aaa"+id);
    this.hs.get_single_hero(id).subscribe(
      h => {
        this.hero = h
        //console.log(h)
      }

    );
  }

  saveUpdate(){
    this.hs.updateHero(this.hero).subscribe(
      () => this.goBack()
    )
    
  }

  goBack(){
    this.location.back();
  }



}
