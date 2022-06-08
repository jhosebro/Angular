import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-remove',
  templateUrl: './button-remove.component.html',
  styleUrls: ['./button-remove.component.css']
})
export class ButtonRemoveComponent {
  @Input()
  numero = 0;

  @Output()
  onRemove: EventEmitter<number> = new EventEmitter();

  remove(){
    this.numero--;
    this.onRemove.emit(this.numero);
  }
}
