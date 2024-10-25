import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInt } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class DbzListComponent {

  @Input()
  public charactersList: CharacterInt[] = []

  onDelete(index:number):void{
    this.onDeleteIndex.emit(index);
  }

  onDeleteID(id?:string):void{
    if ( !id ) return; //Opcional - no lo borra si no existe
    this.onDeletebyID.emit(id);
  }

  @Output()
  onDeletebyID:EventEmitter<string> = new EventEmitter();
  onDeleteIndex:EventEmitter<number> = new EventEmitter(); //Version anterior que borra por index
  //onDeleteIndex = new EventEmitter<number>();

}
