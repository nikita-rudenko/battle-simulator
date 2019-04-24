export function getGeometricMean(arr) {
	const geoMean = arr.reduce((sum, num) => {
		return sum * num;
	}, 1);

	return Math.pow(geoMean, 1 / arr.length);
}
