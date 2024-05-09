import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonService],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a pokemon from pokemon api by id', async () => {
    const pokemon = await service.getPokemon('1');
    expect(pokemon).toBeDefined();
    expect(pokemon.id).toBe('1');
    expect(pokemon.name).toBe('bulbasaur');
  });

  it('should get a pokemon from pokemon api by name', async () => {
    const pokemon = await service.getPokemon('bulbasaur');
    expect(pokemon).toBeDefined();
    expect(pokemon.id).toBe('1');
    expect(pokemon.name).toBe('bulbasaur');
  });
});
