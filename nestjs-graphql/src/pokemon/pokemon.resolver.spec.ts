import { Test, TestingModule } from '@nestjs/testing';
import { PokemonResolver } from './pokemon.resolver';

describe('PokemonResolver', () => {
  let resolver: PokemonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonResolver],
    }).compile();

    resolver = module.get<PokemonResolver>(PokemonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should be able to get a pokemon from a service', async () => {
    const pokemon = await resolver.getPokemon({ name: 'bulbasaur' });
    expect(pokemon).toBeDefined();
  });

  it('should be able to return pokemon types', async () => {
      const response = await resolver.types();
      expect(response).toBeDefined();
    });
});
