import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  public name:string = 'iron man';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getDescription():string{
    return `${this.name} - ${this.age}`;
    // return this.name + ' - ' + this.age;
  }

  changeName(newName:string):void{
    this.name = newName;
  }

  changeAge(newAge:number):void{
    this.age = newAge;
  }

}
