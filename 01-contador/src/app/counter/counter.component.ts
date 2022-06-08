import { Component } from "@angular/core";



@Component({
  selector: "app-contador",
  templateUrl: "./counter.component.html",
})
export class CounterComponent{
 numero = 0;

 handleCount( value: number){
  this.numero = value;
 };
}
