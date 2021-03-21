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
    this.heroes.push(this.formObject);
    this.resetForm();
  }

  addSpell2FormObject(item: Spell) {
    let index = this.formObject.spells.indexOf(item);
    if (index == -1) {
      this.formObject.spells.push(item);
    } else {
      this.formObject.spells = this.formObject.spells.filter(el => el != item);
    }
  }
  setCheckedCheckbox(item: Spell) {
    if (this.formObject.spells == undefined) {
      this.formObject.spells = [];
    }
    // arrow function
    let index = this.formObject.spells.findIndex(el => el.id == item.id);
    console.log(index,)
    return index != 1;
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
}