import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../mock-data/HEROES';
import { Spell } from 'src/app/models/spell';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Array<Hero> = HEROES;
  formObject: Hero = {
    id: 0,
    name: "",
    image: "",
    details: "",
    spells: []
  };

  lstSkills: Array<Spell> = [
    {
      id: 1,
      name: "PHP"
    },
    {
      id: 2,
      name: "javascript"
    },
    {
      id: 3,
      name: "HTML"
    },
    {
      id: 4,
      name: "CSS"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitHeroForm(event: any) {
    event.preventDefault();
    this.formObject.id = Number(this.formObject.id);
    let index = this.heroes.findIndex(el => el.id == this.formObject.id);
    debugger;
    if (index == -1) {
      this.heroes.push({ ...this.formObject });
    } else {
      this.heroes[index] = { ...this.formObject };
    }

    this.resetForm();
  }

  updateHero(hero: Hero) {
    this.formObject = { ...hero };
  }

  addSkill2FormObject(item: Spell, event: any) {
    let index = this.formObject.spells.findIndex(el => el.id == item.id);

    if (event.target.checked == true) {
      if (index == -1) {
        this.formObject.spells.push(item);
      }
    } else {
      this.formObject.spells = [...this.formObject.spells].filter(el => el.id != item.id);
    }
  }

  setCheckedCheckbox(item: Spell) {

    if (this.formObject.spells == undefined) {
      this.formObject.spells = [];
    }

    let index = this.formObject.spells.findIndex(el => el.id == item.id);
    return index != -1;
  }
  resetForm() {
    this.formObject = {
      id: 0,
      name: "",
      image: "",
      details: "",
      spells: []
    };
  }
  parentRemove(removeObject:Hero){
    this.heroes = this.heroes.filter(item => item.id != removeObject.id);
  }
}