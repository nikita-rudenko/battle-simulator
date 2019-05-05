export function getGeometricMean(arr) {
  const geoMean = arr.reduce((sum, num) => {
    return sum * num;
  }, 1);

  return Math.pow(geoMean, 1 / arr.length);
}

export function getSum(arr) {
  return arr.reduce((sum, num) => sum + num);
}

export function getRandomFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
