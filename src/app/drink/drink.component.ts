import { Component, OnInit } from '@angular/core';
// import { DrinkService } from '../sevice/drink.service';
import { Drink } from '../models/drink'

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  drinks: Drink[] = [];
  constructor() { }

  ngOnInit(): void {
    // console.log(1);
    // this.getAll();
  }
  // getAll() {
  //   this.drinkSevice.getAll().subscribe((item: any) => {
  //     this.drinks = item;
  //   })
  // }

}
