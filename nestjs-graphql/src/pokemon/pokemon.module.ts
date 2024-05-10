import { Module } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';

@Module({
  providers: [PokemonResolver, PokemonService]
})
export class PokemonModule {}
