import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Observable,Subject} from 'rxjs';
import {debounceTime,distinctUntilChanged,switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$:Observable<any>;
  private searchTerms = new Subject();


  constructor(private hs:HeroService) { }

  search(trm){
    this.searchTerms.next(trm);
  }

  ngOnInit() {

    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((t) => this.hs.searchHero(t))
    )
  }

  // search(val){

  //   this.hs.searchHero(val).subscribe(
  //     (h) => this.heroes = h 
  //   )

  // }

}
