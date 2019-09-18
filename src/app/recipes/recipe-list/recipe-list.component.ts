import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pasta', 'Supper yummy italian pizza', './assets/images/recipe1.jpg'),
    new Recipe('Chicken', 'Roasted chicken with green beans', './assets/images/recipe2.jpg'),
    new Recipe('Pizza', 'Cheesy pepperoni deep dish pizza', './assets/images/recipe3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
