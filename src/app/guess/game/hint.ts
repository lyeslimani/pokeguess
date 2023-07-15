import { Pokemon } from '../../shared/interfaces/pokemon';

function getHint(pokemonToFind: Pokemon, pokemon: Pokemon): string {
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
	const result = ``;
	while (result === ``) {
		const randomIndex = Math.floor(
			Math.random() * comparisonFunctions.length,
		);
		const result = comparisonFunctions[randomIndex](pokemonToFind, pokemon);
	}
	return result;
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
	if (pokemon1.fireDmg && pokemon2.fireDmg) {
		if (pokemon1.fireDmg > pokemon2.fireDmg) {
			return `Il a des dégâts de type feu plus élevés !`;
		} else if (pokemon1.fireDmg < pokemon2.fireDmg) {
			return `Il a des dégâts de type feu moins élevés !`;
		}
	}
	return ``;
}

function compareWaterDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.waterDmg && pokemon2.waterDmg) {
		if (pokemon1.waterDmg > pokemon2.waterDmg) {
			return `Il a des dégâts de type eau plus élevés !`;
		} else if (pokemon1.waterDmg < pokemon2.waterDmg) {
			return `Il a des dégâts de type eau moins élevés !`;
		}
	}
	return ``;
}

function compareElectricDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.electricDmg && pokemon2.electricDmg) {
		if (pokemon1.electricDmg > pokemon2.electricDmg) {
			return `Il a des dégâts de type électrique plus élevés !`;
		} else if (pokemon1.electricDmg < pokemon2.electricDmg) {
			return `Il a des dégâts de type électrique moins élevés !`;
		}
	}
	return ``;
}

function compareGrassDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.grassDmg && pokemon2.grassDmg) {
		if (pokemon1.grassDmg > pokemon2.grassDmg) {
			return `Il a des dégâts de type plante plus élevés !`;
		} else if (pokemon1.grassDmg < pokemon2.grassDmg) {
			return `Il a des dégâts de type plante moins élevés !`;
		}
	}
	return ``;
}

function compareIceDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.iceDmg && pokemon2.iceDmg) {
		if (pokemon1.iceDmg > pokemon2.iceDmg) {
			return `Il a des dégâts de type glace plus élevés !`;
		} else if (pokemon1.iceDmg < pokemon2.iceDmg) {
			return `Il a des dégâts de type glace moins élevés !`;
		}
	}
	return ``;
}

function compareFightDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.fightDmg && pokemon2.fightDmg) {
		if (pokemon1.fightDmg > pokemon2.fightDmg) {
			return `Il a des dégâts de type combat plus élevés !`;
		} else if (pokemon1.fightDmg < pokemon2.fightDmg) {
			return `Il a des dégâts de type combat moins élevés !`;
		}
	}
	return ``;
}

function comparePoisonDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.poisonDmg && pokemon2.poisonDmg) {
		if (pokemon1.poisonDmg > pokemon2.poisonDmg) {
			return `Il a des dégâts de type poison plus élevés !`;
		} else if (pokemon1.poisonDmg < pokemon2.poisonDmg) {
			return `Il a des dégâts de type poison moins élevés !`;
		}
	}
	return ``;
}

function compareGroundDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.groundDmg && pokemon2.groundDmg) {
		if (pokemon1.groundDmg > pokemon2.groundDmg) {
			return `Il a des dégâts de type sol plus élevés !`;
		} else if (pokemon1.groundDmg < pokemon2.groundDmg) {
			return `Il a des dégâts de type sol moins élevés !`;
		}
	}
	return ``;
}

function compareFlyingDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.flyingDmg && pokemon2.flyingDmg) {
		if (pokemon1.flyingDmg > pokemon2.flyingDmg) {
			return `Il a des dégâts de type vol plus élevés !`;
		} else if (pokemon1.flyingDmg < pokemon2.flyingDmg) {
			return `Il a des dégâts de type vol moins élevés !`;
		}
	}
	return ``;
}

function comparePsychicDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.psychicDmg && pokemon2.psychicDmg) {
		if (pokemon1.psychicDmg > pokemon2.psychicDmg) {
			return `Il a des dégâts de type psy plus élevés !`;
		} else if (pokemon1.psychicDmg < pokemon2.psychicDmg) {
			return `Il a des dégâts de type psy moins élevés !`;
		}
	}
	return ``;
}

function compareBugDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.bugDmg && pokemon2.bugDmg) {
		if (pokemon1.bugDmg > pokemon2.bugDmg) {
			return `Il a des dégâts de type insecte plus élevés !`;
		} else if (pokemon1.bugDmg < pokemon2.bugDmg) {
			return `Il a des dégâts de type insecte moins élevés !`;
		}
	}
	return ``;
}

function compareRockDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.rockDmg && pokemon2.rockDmg) {
		if (pokemon1.rockDmg > pokemon2.rockDmg) {
			return `Il a des dégâts de type roche plus élevés !`;
		} else if (pokemon1.rockDmg < pokemon2.rockDmg) {
			return `Il a des dégâts de type roche moins élevés !`;
		}
	}
	return ``;
}

function compareGhostDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.ghostDmg && pokemon2.ghostDmg) {
		if (pokemon1.ghostDmg > pokemon2.ghostDmg) {
			return `Il a des dégâts de type spectre plus élevés !`;
		} else if (pokemon1.ghostDmg < pokemon2.ghostDmg) {
			return `Il a des dégâts de type spectre moins élevés !`;
		}
	}
	return ``;
}

function compareDragonDmg(pokemon1: Pokemon, pokemon2: Pokemon): string {
	if (pokemon1.dragonDmg && pokemon2.dragonDmg) {
		if (pokemon1.dragonDmg > pokemon2.dragonDmg) {
			return `Il a des dégâts de type dragon plus élevés !`;
		} else if (pokemon1.dragonDmg < pokemon2.dragonDmg) {
			return `Il a des dégâts de type dragon moins élevés !`;
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
