// import the function sum from the app.js file
const { sum, fromDollarToEuro, fromYenToEuro } = require('./app.js');

// start first test
test('adds 14 + 9 to equal 23', () => {
	let total = sum(14,9);
	expect(total).toBe(23);
});

// Test Dollars to Euros
test('One dollar should be 0.83 euros', () => {
	const { fromDollarToEuro } = require('./app.js');
	const euros = (Math.round(fromDollarToEuro(1) * 100) / 100).toFixed(2); // To get 2 decimals
	expect(euros).toBe('0.83');
});

// Test Yens to Euros
test('One yen should be 0.0078 euros', () => {
	const { fromYenToEuro } = require('./app.js');
	const euros = (Math.round(fromYenToEuro(1) * 10000) / 10000).toFixed(4); // To get 4 decimals
	expect(euros).toBe('0.0078');
});

// Test Dollars to Yens
test('One dollar should be 106.58 yens', () => {
	const { fromDollarToYen } = require('./app.js');
	const yens = fromDollarToYen(1);
	const expected = fromDollarToEuro(1) * 127.9;
	expect(yens).toBe(expected);
})

// Test Euros To Dollars
test('One euro should be 1.206 dollars', () => {
	const { fromEuroToDollar } = require('./app.js');
	const dollars = fromEuroToDollar(3.5);
	const expected = 3.5 * 1.2;
	expect(dollars).toBe(expected);
});

//Test Yens to Punds
test('One yen should be 0.0062 pounds', () => {
	const { fromYenToPound } = require('./app.js');
	const pounds = fromYenToPound(1);
	const expected = fromYenToEuro(1) * 0.8;
	expect(pounds).toBe(expected);
})
