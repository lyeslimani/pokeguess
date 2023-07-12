export const getTypeColor = (type: string) => {
	let color: string;
	switch (type) {
		case `fire`:
			color = `#FDDFDF`;
			break;
		case `grass`:
			color = `#DEFDE0`;
			break;
		case `electric`:
			color = `#FCF7DE`;
			break;
		case `water`:
			color = `#DEF3FD`;
			break;
		case `ground`:
			color = `#f4e7da`;
			break;
		case `rock`:
			color = `#d5d5d4`;
			break;
		case `fairy`:
			color = `#fceaff`;
			break;
		case `poison`:
			color = `#98d7a5`;
			break;
		case `bug`:
			color = `#f8d5a3`;
			break;
		case `dragon`:
			color = `#97b3e6`;
			break;
		case `psychic`:
			color = `#eaeda1`;
			break;
		case `flying`:
			color = `#F5F5F5`;
			break;
		case `fighting`:
			color = `#E6E0D4`;
			break;
		case `normal`:
			color = `#F5F5F5`;
			break;
		default:
			color = `#F5F5F5`;
			break;
	}
	return color;
};
