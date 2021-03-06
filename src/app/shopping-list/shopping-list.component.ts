import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('cheese', 500),
    new Ingredient('tomatoes', 3),
    new Ingredient('apples', 4),
  ];

  constructor() { }

  ngOnInit() {
  }

}
