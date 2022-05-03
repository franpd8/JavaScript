// alert("eu")

let arrayMin = [2, 5, 7, 1, 9];
let minimo = Math.min(...arrayMin);
console.log(minimo)

// .min() admite solo valores individuales, por eso no funciona con el array.
// sin embargo, con el spread (...) si los admitiría.