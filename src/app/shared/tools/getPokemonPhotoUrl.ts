import { Pokemon } from '../interfaces/pokemon';

export const getImageUrl = (pokemon: Pokemon) => {
	if (pokemon.image == null) {
		console.log(`ici null`);
		const id = pokemon.number.toString().padStart(3, `0`);
		return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
	} else {
		console.log(`ici pas null`);
		return pokemon.image;
	}
};
