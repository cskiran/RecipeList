import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','testing','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wellplated.com%2Fwp-content%2Fuploads%2F2017%2F12%2FHoppin-John-recipe-600x629.jpg&imgrefurl=https%3A%2F%2Fwww.wellplated.com%2Fhoppin-john-recipe%2F&docid=Az3joRwdjiBzoM&tbnid=ZUWPq8LVR5RurM%3A&vet=10ahUKEwjGp9fPsPngAhV57HMBHbkWDbAQMwiMASgUMBQ..i&w=600&h=629&bih=647&biw=663&q=recipe&ved=0ahUKEwjGp9fPsPngAhV57HMBHbkWDbAQMwiMASgUMBQ&iact=mrc&uact=8')
  ];
  constructor() { }

  ngOnInit() {
  }

}
