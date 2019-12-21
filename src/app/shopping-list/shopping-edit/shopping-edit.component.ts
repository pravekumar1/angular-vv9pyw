import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";

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

  ngOnInit() {}

  onAddItem(form: NgForm) {
    debugger;
    // const ingName= this.inputNameRef.nativeElement.value;
    // const ingAmount= this.inputAmountRef.nativeElement.value;
    const value = form.value;
    console.log(value);
    const newIngredients = new Ingradients(value.name, value.amount);
    // this.ingredientsAdded.emit(newIngredients);
    this.slService.addIngredients(newIngredients);
  }
}
