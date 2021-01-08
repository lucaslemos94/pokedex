import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeCardComponent } from './views/poke-card/poke-card.component';
import { PokeTableComponent } from './views/poke-table/poke-table.component';

const routes: Routes = [
  {path:'home', component:PokeTableComponent},
  {path:'pokeDetail/:id', component:PokeCardComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
