import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInt } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<CharacterInt> = new EventEmitter();

  public character: CharacterInt = {
    name: '',
    power: 0
  }

  public emitCharacter():void{
    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = {name: '', power:0};
  }

}
