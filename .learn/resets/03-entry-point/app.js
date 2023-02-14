const sum = (a, b) => {
	return a + b;
}

console.log(sum(7,3));

const fromDollarToEuro = (dollars) => {
	return dollars / 1.2;
}

const fromYenToEuro = (yens) => {
	return yens / 127.9;
}

const fromEuroToDollar = (euros) => {
	return euros * 1.2;
}

const fromDollarToYen = (dollars) => {
	const euros = fromDollarToEuro(dollars);
	return euros * 127.9;
}

const fromYenToPound = (yens) => {
	const euros = fromYenToEuro(yens);
	return euros * 0.8;
}

// export the function to be used on other files
module.exports = {
	sum, fromDollarToEuro, fromYenToEuro, fromDollarToYen, fromEuroToDollar, fromYenToPound
};
