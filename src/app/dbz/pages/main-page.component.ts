import { Component, OnInit } from '@angular/core';
import { CharacterInt } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor( private dbzService:DbzService ) {

  }

  get characters(): CharacterInt[]{
    return [...this.dbzService.characters] ;
  }

  deleteCharacter ( id:string ):void {
    this.dbzService.ondeleteByID(id);
  }

  createCharacter (character: CharacterInt ):void{
    this.dbzService.onNewCharacter(character);
  }


}
