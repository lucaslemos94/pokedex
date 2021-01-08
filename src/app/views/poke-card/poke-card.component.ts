import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  pokemon:Pokemon={}

  constructor(private pokemonService:PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
   }

  ngOnInit(): void {
 
  }

  getPokemon(id){
    this.pokemonService.getPokemon(id).subscribe(
      resp =>{
        console.log(resp)
        
        this.pokemon.id = resp.id
        this.pokemon.name = resp.name;
        this.pokemon.pokemonImg = resp.sprites.front_default;
        this.pokemon.pokemonType = resp.types[0].type.name;
        this.pokemon.pokemonWeight =  resp.weight;
        this.pokemon.pokemonHeight = resp.height;
        this.pokemon.pokemonMoves = resp.moves.length;
        this.pokemon.pokemonBaseExperience =  resp.base_experience;
        this.pokemon.pokemonHP =  resp.stats[0].base_stat;
        this.pokemon.pokemonAttack =  resp.stats[1].base_stat;
        this.pokemon.pokemonDefense =  resp.stats[2].base_stat;
      },
      error =>{

      }
    )
  }

}
