import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../models/drink'

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  drinks: Drink[] = [];
  constructor(private drinkSevice: DrinkService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.drinkSevice.getAll().subscribe((item: any) => {
      this.drinks = item;
    })
  }

}
