import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  public itemList=[];
  public item:string;


  addItem(listOfItems){
  this.itemList=listOfItems;
  }

  onDeleteButton(item:string){
    const index=this.itemList.indexOf(item,0);
    this.itemList.splice(index,1);
  }

}
