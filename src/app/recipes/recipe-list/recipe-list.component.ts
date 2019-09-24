import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pasta', 'Supper yummy italian pizza', './assets/images/recipe1.jpg'),
    new Recipe('Chicken', 'Roasted chicken with green beans', './assets/images/recipe2.jpg'),
    new Recipe('Pizza', 'Cheesy pepperoni deep dish pizza', './assets/images/recipe3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipeItem(selectedRecipeItem: Recipe) {
    this.recipeSelectedEvent.emit(selectedRecipeItem);
  }
}
