import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;


  constructor() {
    this.contador = 10;
  }

  ngOnInit(): void {
   let interval = setInterval(()=> {
      this.contador--
    if (this.contador === 0){

      }
    }; 1000);
  }

}
