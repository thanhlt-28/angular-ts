import { Component, Input, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';
import {HEROES} from '../../mock-data/HEROES';
import { Spell } from 'src/app/models/spell';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Array<Hero> = HEROES;
  updateObject: Hero = {
    id: 0,
    name: "",
    image: "",
    details: "",
    spells: []
  };
  constructor() { }

  ngOnInit(): void {
  }

  updateHero(hero: Hero){
    this.updateObject = { ...hero};
  }

  parentRemove(removeObject: Hero){
    this.heroes = this.heroes.filter(item => item.id != removeObject.id);
  }
}