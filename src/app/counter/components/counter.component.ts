import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3> Dentro del template Counter: {{ counter }} </h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetNumber()">Resetear</button>
  <br>
  `
})

export class CounterComponent {
  public default:number = 10;
  public counter:number = this.default;

  increaseBy(n:number):void{
    //this.counter +=1;     //this.counter = this.counter+1;
    this.counter +=n;
  }
  resetNumber():void{
    this.counter = this.default;
  }
}
