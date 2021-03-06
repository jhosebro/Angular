import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*imprimir_letra = (letra: string) => {
    return alert(letra);
  };*/
  name = 'Jhosebro Store';
  age = 21;
  img = 'https://i1.sndcdn.com/artworks-PZOnPSbRx5SlcIfY-QpdgbA-t500x500.jpg';
  btn_disabled = true;
  person = {
    name: 'Jhosebro',
    age: 21,
    img: 'data:image/png;base64,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'
  }
  imprimir_nombre_al_reves = (nombre: string) => {
    var array = nombre.split('');
    var array2 = [];
    for (let i = array.length; i >= 0 ; i--) {
     array2.push(array[i]);
    }
    return array2;
  }

  toggle_button() {
    this.btn_disabled = !this.btn_disabled;
  }

  Aumentar_edad() {
    return this.age++;
  }
}



