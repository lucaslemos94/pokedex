import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl =  environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<any>(`${this.baseUrl}/pokemon/?limit=150&offset=150`)
  }

  getPokemon(id){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`)
  }

}
