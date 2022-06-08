import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonRemoveComponent } from "./button-remove/button-remove.component";
import { CounterComponent } from "./counter.component";



@NgModule({
  declarations: [CounterComponent, ButtonAddComponent, ButtonRemoveComponent],
  imports: [CommonModule],
  exports: [CounterComponent]
})
export class CounterModule {

}
