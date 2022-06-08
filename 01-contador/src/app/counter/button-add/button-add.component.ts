import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {

  @Input()
  numero = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter();

  add(){
    this.numero++;
    this.onAdd.emit(this.numero);
  }
}
