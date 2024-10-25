import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddCharacterComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class DbzModule { }
