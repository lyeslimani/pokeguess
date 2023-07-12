import { Pokemon } from '../interfaces/pokemon';

export const getImageUrl = (pokemon: Pokemon) => {
	const id = pokemon.number.toString().padStart(3, `0`);
	return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
};
