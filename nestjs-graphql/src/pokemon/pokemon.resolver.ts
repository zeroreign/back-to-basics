import { Resolver, Query, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { PokemonTypes } from '../graphql.schema.types';
import { GetPokemonQueryArgs } from './pokemon.args';

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
