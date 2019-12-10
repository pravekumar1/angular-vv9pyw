import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from "@angular/core";

import { Ingradients } from "../../shared/ingradients.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") inputNameRef: ElementRef;
  @ViewChild("amountInput") inputAmountRef: ElementRef;

  @Output() ingredientsAdded = new EventEmitter<Ingradients>();
  constructor() {}

  ngOnInit() {}

  onAddItem(){
    const ingName= this.inputNameRef.nativeElement.value;
    const ingAmount= this.inputAmountRef.nativeElement.value;
    const newIngredients = new Ingradients(ingName, ingAmount);
    this.ingredientsAdded.emit(newIngredients);
  }
}
