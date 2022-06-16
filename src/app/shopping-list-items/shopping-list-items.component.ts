import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent {

   listOfItems=[];
   @Output() addListEvent=new EventEmitter<any>(); 

   

  addItem(value:string){
    this.listOfItems.push(value);
  }
  

  onAddItems(){
     this.addListEvent.emit(this.listOfItems);
  }
  

}
