import { Pokemon } from '../../shared/interfaces/pokemon';
import { PokemonType } from '../../shared/enums/pokemonTypes';

export function getHint(
	pokemonToFind: Pokemon,
	pokemon: Pokemon,
	hintUsed: string[],
) {
	const comparisonFunctions: ((
		pokemonToFind: Pokemon,
		pokemon: Pokemon,
	) => string)[] = [
		compareNumber,
		compareName,
		compareTypes,
		compareIfType,
		compareHeight,
		compareWeight,
		compareMalePct,
		compareFemalePct,
		compareCaptRate,
		compareExpPoints,
		compareHP,
		compareAttack,
		compareDefense,
		compareSpecial,
		compareSpeed,
		compareNormalDmg,
		compareFireDmg,
		compareWaterDmg,
		compareElectricDmg,
		compareGrassDmg,
		compareIceDmg,
		compareFightDmg,
		comparePoisonDmg,
		compareGroundDmg,
		compareFlyingDmg,
		comparePsychicDmg,
		compareBugDmg,
		compareRockDmg,
		compareGhostDmg,
		compareDragonDmg,
		compareEvolutions,
		compareLegendary,
	];
	let result = ``;
	let randomFunction!: (pokemonToFind: Pokemon, pokemon: Pokemon) => string;
	while (result === ``) {
		const remainingFunctions = comparisonFunctions.filter(
			(func) => !hintUsed.includes(func.name),
		);
		if (remainingFunctions.length === 0) {
			break;
		}

		const randomIndex = Math.floor(
			Math.random() * remainingFunctions.length,
		);
		randomFunction = remainingFunctions[randomIndex];
		result = comparisonFunctions[randomIndex](pokemonToFind, pokemon);
	}
	return {
		hint: result || `Aucun indice disponible.`,
		hintUsed: randomFunction.name,
	};
}

function compareNumber(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.number && pokemon2.number) {
		if (pokemon1.number > pokemon2.number) {
			return `Il se trouve plus loin dans ton Pokédex !`;
		} else if (pokemon1.number < pokemon2.number) {
			return `Il se trouve moins loin dans ton Pokédex !`;
		}
	}
	return ``;
}

function compareName(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.name && pokemon2.name) {
		if (pokemon1.name > pokemon2.name) {
			return `Il a un nom plus grand !`;
		} else if (pokemon1.name < pokemon2.name) {
			return `Il a un nom plus petit !`;
		}
	}
	return ``;
}

function compareTypes(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.types && pokemon2.types) {
		if (pokemon1.types > pokemon2.types) {
			return `Il a plus de types !`;
		} else if (pokemon1.types < pokemon2.types) {
			return `Il a moins de types !`;
		}
	}
	return ``;
}

function compareIfType(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.type1 && pokemon2.type1) {
		if (pokemon1.type1 === pokemon2.type1) {
			return `Il a un type en commun !`;
		}
		if (pokemon2.type2) {
			if (pokemon1.type1 === pokemon2.type2) {
				return `Il a un type en commun !`;
			}
		}
	}
	if (pokemon1.type2 && pokemon2.type1) {
		if (pokemon1.type2 === pokemon2.type1) {
			return `Il a un type en commun !`;
		}
		if (pokemon2.type2) {
			if (pokemon1.type2 === pokemon2.type2) {
				return `Il a un type en commun !`;
			}
		}
	}
	return `Il n'a pas de type en commun !`;
}

function compareHeight(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.height && pokemon2.height) {
		if (pokemon1.height > pokemon2.height) {
			return `Il a une taille plus grande !`;
		} else if (pokemon1.height < pokemon2.height) {
			return `Il a une taille plus petite !`;
		}
	}
	return ``;
}

function compareWeight(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.weight && pokemon2.weight) {
		if (pokemon1.weight > pokemon2.weight) {
			return `Il a un poids plus grand !`;
		} else if (pokemon1.weight < pokemon2.weight) {
			return `Il a un poids plus petit !`;
		}
	}
	return ``;
}

function compareMalePct(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.malePct && pokemon2.malePct) {
		if (pokemon1.malePct > pokemon2.malePct) {
			return `Il a un pourcentage de mâles plus grand !`;
		} else if (pokemon1.malePct < pokemon2.malePct) {
			return `Il a un pourcentage de mâles plus petit !`;
		}
	}
	return ``;
}

function compareFemalePct(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.femalePct && pokemon2.femalePct) {
		if (pokemon1.femalePct > pokemon2.femalePct) {
			return `Il a un pourcentage de femelles plus grand !`;
		} else if (pokemon1.femalePct < pokemon2.femalePct) {
			return `Il a un pourcentage de femelles plus petit !`;
		}
	}
	return ``;
}

function compareCaptRate(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.captRate && pokemon2.captRate) {
		if (pokemon1.captRate > pokemon2.captRate) {
			return `Il a un taux de capture plus grand !`;
		} else if (pokemon1.captRate < pokemon2.captRate) {
			return `Il a un taux de capture plus petit !`;
		}
	}
	return ``;
}

function compareExpPoints(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.expPoints && pokemon2.expPoints) {
		if (pokemon1.expPoints > pokemon2.expPoints) {
			return `Il a plus de points d'expérience !`;
		} else if (pokemon1.expPoints < pokemon2.expPoints) {
			return `Il a moins de points d'expérience !`;
		}
	}
	return ``;
}

function compareHP(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.hp && pokemon2.hp) {
		if (pokemon1.hp > pokemon2.hp) {
			return `Il a plus de points de vie !`;
		} else if (pokemon1.hp < pokemon2.hp) {
			return `Il a moins de points de vie !`;
		}
	}
	return ``;
}

function compareAttack(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.attack && pokemon2.attack) {
		if (pokemon1.attack > pokemon2.attack) {
			return `Il a une attaque plus puissante !`;
		} else if (pokemon1.attack < pokemon2.attack) {
			return `Il a une attaque moins puissante !`;
		}
	}
	return ``;
}

function compareDefense(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.defense && pokemon2.defense) {
		if (pokemon1.defense > pokemon2.defense) {
			return `Il a une défense plus élevée !`;
		} else if (pokemon1.defense < pokemon2.defense) {
			return `Il a une défense moins élevée !`;
		}
	}
	return ``;
}

function compareSpecial(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.special && pokemon2.special) {
		if (pokemon1.special > pokemon2.special) {
			return `Il a une attaque spéciale plus puissante !`;
		} else if (pokemon1.special < pokemon2.special) {
			return `Il a une attaque spéciale moins puissante !`;
		}
	}
	return ``;
}

function compareSpeed(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.speed && pokemon2.speed) {
		if (pokemon1.speed > pokemon2.speed) {
			return `Il est plus rapide que ça !`;
		} else if (pokemon1.speed < pokemon2.speed) {
			return `Il est plus lent que ça !`;
		}
	}
	return ``;
}

function compareNormalDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.normalDmg && pokemon2.normalDmg) {
		if (pokemon1.normalDmg > pokemon2.normalDmg) {
			return `Il a des dégâts de type normal plus élevés !`;
		} else if (pokemon1.normalDmg < pokemon2.normalDmg) {
			return `Il a des dégâts de type normal moins élevés !`;
		}
	}
	return ``;
}

function compareFireDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Fire ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Fire)
	) {
		if (pokemon1.fireDmg) {
			if (pokemon1.fireDmg > 1) {
				return `Le pokemon est faible face à ton type feu !`;
			} else if (pokemon1.fireDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type feu !`;
			}
		}
	}
	return ``;
}

function compareWaterDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Water ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Water)
	) {
		if (pokemon1.waterDmg) {
			if (pokemon1.waterDmg > 1) {
				return `Le pokemon est faible face à ton type eau !`;
			} else if (pokemon1.waterDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type eau !`;
			}
		}
	}
	return ``;
}

function compareElectricDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Electric ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Electric)
	) {
		if (pokemon1.electricDmg) {
			if (pokemon1.electricDmg > 1) {
				return `Le pokemon est faible face à ton type électrique !`;
			} else if (pokemon1.electricDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type électrique !`;
			}
		}
	}
	return ``;
}

function compareGrassDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Grass ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Grass)
	) {
		if (pokemon1.grassDmg) {
			if (pokemon1.grassDmg > 1) {
				return `Le pokemon est faible face à ton type plante !`;
			} else if (pokemon1.grassDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type plante !`;
			}
		}
	}
	return ``;
}

function compareIceDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Ice ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Ice)
	) {
		if (pokemon1.iceDmg) {
			if (pokemon1.iceDmg > 1) {
				return `Le pokemon est faible face à ton type glace !`;
			} else if (pokemon1.iceDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type glace !`;
			}
		}
	}
	return ``;
}

function compareFightDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Fighting ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Fighting)
	) {
		if (pokemon1.fightDmg) {
			if (pokemon1.fightDmg > 1) {
				return `Le pokemon est faible face à ton type combat !`;
			} else if (pokemon1.fightDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type combat !`;
			}
		}
	}
	return ``;
}

function comparePoisonDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Poison ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Poison)
	) {
		if (pokemon1.poisonDmg) {
			if (pokemon1.poisonDmg > 1) {
				return `Le pokemon est faible face à ton type poison !`;
			} else if (pokemon1.poisonDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type poison !`;
			}
		}
	}
	return ``;
}

function compareGroundDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Ground ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Ground)
	) {
		if (pokemon1.groundDmg) {
			if (pokemon1.groundDmg > 1) {
				return `Le pokemon est faible face à ton type sol !`;
			} else if (pokemon1.groundDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type sol !`;
			}
		}
	}
	return ``;
}

function compareFlyingDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Flying ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Flying)
	) {
		if (pokemon1.flyingDmg) {
			if (pokemon1.flyingDmg > 1) {
				return `Le pokemon est faible face à ton type vol !`;
			} else if (pokemon1.flyingDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type vol !`;
			}
		}
	}
	return ``;
}

function comparePsychicDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Psychic ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Psychic)
	) {
		if (pokemon1.psychicDmg) {
			if (pokemon1.psychicDmg > 1) {
				return `Le pokemon est faible face à ton type psy !`;
			} else if (pokemon1.psychicDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type psy !`;
			}
		}
	}
	return ``;
}

function compareBugDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Bug ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Bug)
	) {
		if (pokemon1.bugDmg) {
			if (pokemon1.bugDmg > 1) {
				return `Le pokemon est faible face à ton type insecte !`;
			} else if (pokemon1.bugDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type insecte !`;
			}
		}
	}
	return ``;
}

function compareRockDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Rock ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Rock)
	) {
		if (pokemon1.rockDmg) {
			if (pokemon1.rockDmg > 1) {
				return `Le pokemon est faible face à ton type roche !`;
			} else if (pokemon1.rockDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type roche !`;
			}
		}
	}
	return ``;
}

function compareGhostDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Ghost ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Ghost)
	) {
		if (pokemon1.ghostDmg) {
			if (pokemon1.ghostDmg > 1) {
				return `Le pokemon est faible face à ton type spectre !`;
			} else if (pokemon1.ghostDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type spectre !`;
			}
		}
	}
	return ``;
}

function compareDragonDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (
		pokemon2.type1 === PokemonType.Dragon ||
		(pokemon2.type2 && pokemon2.type2 === PokemonType.Dragon)
	) {
		if (pokemon1.dragonDmg) {
			if (pokemon1.dragonDmg > 1) {
				return `Le pokemon est faible face à ton type dragon !`;
			} else if (pokemon1.dragonDmg < 1) {
				return `Le pokemon ne craint pas beaucoup ton type dragon !`;
			}
		}
	}
	return ``;
}

function compareEvolutions(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.evolutions && pokemon2.evolutions) {
		if (pokemon1.evolutions > pokemon2.evolutions) {
			return `Il a plus d'évolutions !`;
		} else if (pokemon1.evolutions < pokemon2.evolutions) {
			return `Il a moins d'évolutions !`;
		}
	}
	return ``;
}

function compareLegendary(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.legendary && pokemon2.legendary) {
		if (pokemon1.legendary > pokemon2.legendary) {
			return `Il est légendaire !`;
		} else if (pokemon1.legendary < pokemon2.legendary) {
			return `Il n'est pas légendaire !`;
		}
	}
	return ``;
}
