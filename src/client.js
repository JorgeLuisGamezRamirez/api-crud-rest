const nuevoProducto = { nombre: 'Teclado', precio: 50 };

fetch('http://localhost:3000/productos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(nuevoProducto)
})
  .then(res => res.json())
  .then(datos => console.log('Guardado con éxito:', datos))
  .catch(err => console.error('Error:', err));

const datosActualizados = { nombre: 'Teclado Gamer', precio: 65 };

fetch('http://localhost:3000/productos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(datosActualizados)
})
  .then(res => res.json())
  .then(datos => console.log('Actualizado con éxito:', datos))
  .catch(err => console.error('Error:', err));
