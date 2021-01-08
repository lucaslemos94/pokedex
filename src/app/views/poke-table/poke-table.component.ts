import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  constructor(private pokemonService:PokemonService, private router:Router) { }

  displayedColumns:string[] =['id','image','name'];
  data:any[]=[];
  dataSource =  new MatTableDataSource<any>(this.data);
  pokemons:any[] = [];


  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.getPokemons();
    
  }

  getPokemons(){
    let pokemonData;

    for(let i = 1; i<=150; i++){
      this.pokemonService.getPokemon(i).subscribe(
        resp => {
          pokemonData ={
            id: resp.id,
            image: resp.sprites.front_default,
            name: resp.name
          }
          this.data.push(pokemonData);
          this.dataSource =  new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator
        },
        error =>{
          console.log('error!')
        }
       
      )

    }


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row){
   this.router.navigateByUrl(`pokeDetail/${row.id}`);
  }

}
