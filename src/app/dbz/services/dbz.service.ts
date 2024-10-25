import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { CharacterInt } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:CharacterInt[] = [
    {
      id: uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power:9500
    }
];

  public onNewCharacter( character:CharacterInt ):void {
    // Forma 1
    // const newCharacter: CharacterInt ={
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // Forma 2 : spread
    const newCharacter: CharacterInt ={ id: uuid(), ...character };

    console.log(newCharacter);
    // this.characters.push(character);
    this.characters.push(newCharacter);
  }

  public onDeleteI (i:number):void{
    // Borra un elemento del array por su index
    this.characters.splice(i,1);
  }

  public ondeleteByID (id:string):void{
    // Actualiza del array con todos excepto el que tiene el ID a eliminar
    this.characters = this.characters.filter( x => x.id !== id )
  }

}
