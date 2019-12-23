import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import {Subscription} from 'rxjs/Subscription';

import { Ingradients } from "../../shared/ingradients.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild("nameInput") inputNameRef: ElementRef;
  // @ViewChild("amountInput") inputAmountRef: ElementRef;
  // @Output() ingredientsAdded = new EventEmitter<Ingradients>();

  constructor(private slService: ShoppingListService) {}
  subscription: Subscription;
  editMode = false;
  editedItemIdex: number;
  editedItem: Ingradients;
  @ViewChild("formData") editFormData: NgForm;

  ngOnInit() {
    this.subscription = this.slService.startEditingValue.subscribe((index: number) => {
      this.editedItemIdex = index;
      this.editMode= true;
      this.editedItem = this.slService.getIngredient(index);
      this.editFormData.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      })
    } );
  }

  onAddItem(form: NgForm) {
    // const ingName= this.inputNameRef.nativeElement.value;
    // const ingAmount= this.inputAmountRef.nativeElement.value;
    const value = form.value;
    console.log(value);
    const newIngredients = new Ingradients(value.name, value.amount);
    // this.ingredientsAdded.emit(newIngredients);
    if (this.editMode) {
      this.slService.updateIngredients(this.editedItemIdex, newIngredients);
    } else {
      this.slService.addIngredients(newIngredients);
    } 
    this.editMode= false;
    form.reset();
  }

  onClearForm() {
    this.editFormData.reset();
    this.editMode= false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
