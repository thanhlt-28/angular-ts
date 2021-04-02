import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Spell } from 'src/app/models/spell';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() formObject!: Hero;

  @Output() submitForm = new EventEmitter<Hero>();
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
    this.submitForm.emit(this.formObject);
  }

  addSpells2FormObject(item: Spell, event: any) {

    if (event.target.checked == true) {
      let index = this.formObject.spells.findIndex(e => e.id == item.id);
      if (index == -1) {
        this.formObject.spells.push(item);
      }
    } else {
      this.formObject.spells = this.formObject.spells.filter(e => e.id != item.id);
    }
  }

  setCheckedCheckbox(item: Spell) {
    if (this.formObject.spells == undefined) {
      this.formObject.spells = [];
    }

    let index = this.formObject.spells.findIndex(el => el.id == item.id);
    return index != -1;
  }

  updateAttribute(attrName: string, event: any) {
    switch (attrName) {
      case 'id':
        this.formObject.id = Number(event.target.value);
        break;
      case 'name':
        this.formObject.name = event.target.value;
        break;
      case 'image':
        this.formObject.image = event.target.value;
        break;
    }
  }
}