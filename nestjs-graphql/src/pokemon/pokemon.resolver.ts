import { Resolver, Query, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { GraphQLError } from 'graphql';
import { PokemonTypes } from '../graphql.schema.types';
import { GetPokemonQueryArgs } from './pokemon.args';
import { UsePipes } from '@nestjs/common';

@Resolver()
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  @Query()
  async pokemon(
    @Args({type: () => GetPokemonQueryArgs}) args: GetPokemonQueryArgs
  ) {
    return this.pokemonService.getPokemon(args.name ?? args.id);
  }

  @Query()
  async types() {
    return Object.values(PokemonTypes);
  }
}
