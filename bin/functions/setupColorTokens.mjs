import { camelize } from './camelize.mjs';
import { formatName } from './formatName.mjs';

export function setupColorTokens(colorFrame) {
	let colors = {};

	colorFrame.children.forEach(color => {
		const colorString = `rgba(${color.fills[0].color.r * 255}, ${color.fills[0].color.g *
			255}, ${color.fills[0].color.b * 255}, ${color.fills[0].color.a * 100})`;

		let normalizedName = camelize(color.name);
		normalizedName = formatName(normalizedName);
		colors[normalizedName] = colorString;
	});

	return colors;
}
