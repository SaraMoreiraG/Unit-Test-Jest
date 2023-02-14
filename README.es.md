# Unit test con Jest

Existen muchas alternativas para crear un Unit Test utilizando javascript o node como: Macha, Jasmin o Jest.

Vamos a utilizar [Jest](https://jestjs.io/) porque por el momento es el más popular, con más documentación y el mejor integrado con React.js.

Importante: Antes de empezar asegurate de tener instalada una versión de node más nueva de 12
```
$ node -v
```

## 🌱  Como crear un unit test

a) Antes de instalar jest tenemos que inicializar el proyecto utilizando npm package manager.

```sh
$ npm init -y
```
💡 Si lo has instalado correctamente encontrarás el archivo `package.json` en la raíz de tu proyecto.


b) Ahora hay que instalar jest.

```sh
$ npm install jest --save
```
💡 Si tu package se ha instalado correctamente podrás observar que:

1. Ha una nueva carpeta en la raíz llamada `./node_modules`
2. Si abres el archivo package.json, encontrarás `jest` dentro del objeto `dependencies`

c) Crea un archivo llamdo `app.js` en la raíz de tu proyecto que contenga:

```js
// Esta es una funcion que suma dos numeros
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// exporta la funcion para poder utilizarla en otros archivos
module.exports = { sum };
```

💡 Para verificar el resultado, utiliza el siguiente comando en tu consola:

```sh
$ node app.js
```

c) El siguiente paso es crear un archivo `test.js` en la raíz del proyecto que incluirá los test.

```js
// importa la funcion sum del archivo app.js
const { sum } = require('./app.js');

// empieza el primer test
test('adds 14 + 9 to equal 23', () => {
    //dentro del test llamamos a la funcion sum con dos numeros
    let total = sum(14, 9);

    // esperamos que la suma de los 2 numeros sea 23
    expect(total).toBe(23);
});
```

d) Antes de probar el test tenemos que actualizar el archivo `package.json` para especificar el comando con la palabra jest de la siguiente manera:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

e) Escribe en la consola el siguiente comando:
```sh
$ npm run test
```

✅✅   Tu test debería funcionar!  💃

## De que va el ejemplo?

Vamos a utilizar la libreria de Jest para construir un programa capaz de convertir valores numerico de una divisa a otra.

| Function name     | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Receives a dollar amount and returns equivalent amount in Japan Yen   |
| fromEuroToDollar  | Receives a Euro amount and returns equivalent amount in US Dollar     |
| fromYenToPound    | Receives a Yen amount and equivalent amount in England Pound          |
