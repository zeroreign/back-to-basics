import { Injectable } from '@nestjs/common';
import { Pokemon, PokemonTypes } from '../graphql.schema.types';
import { PokemonApiResponse } from './pokemon.service.types';


@Injectable()
export class PokemonService {
  async getPokemon(identifier: number|string): Promise<Pokemon> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
      const pokemon = await response.json() as PokemonApiResponse;
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(type => PokemonTypes[type.type.name.toUpperCase()]),
        weight: pokemon.weight,
        height: pokemon.height,
        image: pokemon.sprites.front_default
      };
    }
    catch (error) {
      console.error(error);
    }
  }
}
