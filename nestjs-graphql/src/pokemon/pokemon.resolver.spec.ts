import { Test, TestingModule } from '@nestjs/testing';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';

describe('PokemonResolver', () => {
  let resolver: PokemonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonResolver, PokemonService],
    }).compile();

    resolver = module.get<PokemonResolver>(PokemonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should be able to get a pokemon from a service', async () => {
    const pokemonByName = await resolver.pokemon({name: 'bulbasaur'});
    const pokemonById = await resolver.pokemon({id: 1});
    expect(pokemonByName).toBeTruthy();
    expect(pokemonById).toBeTruthy();
  });

  it('should be able to return pokemon types', async () => {
      const response = await resolver.types();
      expect(response).toBeTruthy();
    });
});
