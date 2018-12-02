const API = 'https://pokeapi.co/api/v2/pokemon/';
const MAX_POKEMONS_GEN = [0, 151, 251, 386];
const MAX_POKEMONS_GEN_I = 151;
const MAX_POKEMONS_GEN_II = 251;
const MAX_POKEMONS_GEN_III = 386;
const MAX_POKEMONS_GEN_IV = 493;
const MAX_POKEMONS = MAX_POKEMONS_GEN_IV;
const BASENAME = process.env.NODE_ENV === 'production' ? '/react-pokedex' : '';
export {
  BASENAME,
  API,
  MAX_POKEMONS,
  MAX_POKEMONS_GEN,
  MAX_POKEMONS_GEN_I,
  MAX_POKEMONS_GEN_II,
  MAX_POKEMONS_GEN_III,
  MAX_POKEMONS_GEN_IV,
};
