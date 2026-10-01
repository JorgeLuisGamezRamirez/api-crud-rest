const express = require('express');
const app = express();

app.use(express.json());

let productos = [
  { id: 1, nombre: 'Mouse', precio: 20 }
];

app.get('/productos', (req, res) => {
  res.status(200).json(productos);
});

app.post('/productos', (req, res) => {
  if (!req.body.nombre) {
    return res.status(400).json({
      error: true,
      status: 400,
      mensaje: 'El nombre es obligatorio',
      detalles: null
    });
  }
  const nuevo = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

app.put('/productos/:id', (req, res) => {
  const item = productos.find(p => p.id == req.params.id);
  if (!item) {
    return res.status(404).json({
      error: true,
      status: 404,
      mensaje: `El producto con ID ${req.params.id} no fue encontrado`,
      detalles: null
    });
  }
  item.nombre = req.body.nombre || item.nombre;
  item.precio = req.body.precio || item.precio;
  res.status(200).json(item);
});

app.delete('/productos/:id', (req, res) => {
  productos = productos.filter(p => p.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Servidor listo en el puerto 3000'));
