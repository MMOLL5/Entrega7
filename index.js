import express, { request, response } from 'express';

const puerto = 8080;

const app = express();


const server = app.listen(puerto, () =>
console.log('Server up en puerto ', puerto)
);

server.on('error', (err) => {
    console.log('ERROR => ', err);
});

 const between = (pmin, pmax) => {
    return Math.floor(Math.random() * (pmax + 1 - pmin) + pmin);
  };

 let visitas1 = 0;
 let visitas2 = 0;

 let productos = [{"title":"Registro 1","price":100.5,"thumbnail":"http://hola1.com","id":1}, {"title":"Registro 2","price":101.5,"thumbnail":"http://hola2.com","id":2}, {"title":"Registro 3","price":102.5,"thumbnail":"http://hola3.com","id":3}];

app.get('/items', (request, response) => {
    visitas1++;
    let arrayProd = {'items':productos, 'cantidad':productos.length};
    response.json({
        arrayProd, 
    });
});

app.get('/item-random', (request, response) => {
    visitas2++;
    let posicion = between(1, productos.length);
    let item = productos[posicion-1];
    response.json({
        item,
    });
});

app.get('/visitas', (request, response) => {
    let visitas = {'items': visitas1, 'item': visitas2};
    response.json({
        visitas,
    });
});