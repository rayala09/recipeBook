import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nametInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
    );
      this.shoppingListService.addIngredient(newIngredient);
  }

}
