# Unit testing with Jest

There are many great alternatives to create unit tests using javascript or node like: Mocha, Jasmin or Jest.

We are using [Jest](https://jestjs.io/) because currently is the most popular one, with most documentation and better integrated with React.js.

```
Important: Before starting make sure you have node version 12+
	$ node -v
```

## 🌱  How to create a unit test

a) Before installing jest, we have to initialize the project using npm package manager.

```sh
$ npm init -y
```
💡 If you installed successfully you will find a `package.json` file on your project root.


b) Now it's time to install jest.

```sh
$ npm install jest --save
```
💡 If your package was installed successfully you will find that:

1. There is a new folder in your root called `./node_modules`
2. If you open your package.json file, you will find `jest` inside the `dependencies` object

c) Create an `app.js` file on the root of your project that contains the following content:

```js
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files
// (similar to the keyword `export` when using webpack)
module.exports = { sum };
```

💡 To verify that the result has been successful, run the following command on your console:

```sh
$ node app.js
```

c) The next step is to create a `test.js` file on the root of the project that will include our tests.

```js
// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
```

d) Before running our test we have to update our `package.json` file to specify the test command with the word jest like this:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

e) Type on the console the following command:
```sh
$ npm run test
```

✅✅✅ Your test should be working!

## What is this example about?

We are going to be using the Jest library to build a program capable of converting numeric values from one currency to another:

| Function name     | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Receives a dollar amount and returns equivalent amount in Japan Yen   |
| fromEuroToDollar  | Receives a Euro amount and returns equivalent amount in US Dollar     |
| fromYenToPound    | Receives a Yen amount and equivalent amount in England Pound          |
