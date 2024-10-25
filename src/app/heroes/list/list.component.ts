import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  public deleted: string|undefined = ''; //public deleted?: string;
  public heroList:string[] = ['Spiderman','Ironman','Thor','Antman','Hulk'];

  removeLast():void{
    this.deleted = this.heroList.pop();
  }
  }
