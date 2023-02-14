const sum = (a, b) => {
	return a + b;
}

console.log(sum(7,3));

// export the function to be used on other files
module.exports = { sum };
