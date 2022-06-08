import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  //template: `<h1>Componente Saludo</h1>
  //    <h2>Subtitulo</h2>`,
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
  //styles: [`h1{
  //  background-color: green;
  //}
  //h2{
  //  color: tomato;
  //}
  //`]
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identifParrafo: string;
  identifInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.identifParrafo = 'ParrafoPrincipal';
    this.identifInput = 'text';

    setTimeout(() => {
      this.mensaje =  'Otro mensaje diferente';
      this.identifParrafo = 'main';
      this.identifInput = 'password';
    }, 3000);
   }

  ngOnInit(): void {
  }

  mostrarSaludo(): string{
    return 'Saludo desde el metodo';
  }
}
