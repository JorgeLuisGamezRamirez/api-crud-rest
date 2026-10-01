# Arquitectura y Consumo de APIs REST

**Alumno:** Gámez Ramírez Jorge Luis  
**Docente:** Hernandez Marin Juan Carlos  
**Materia:** Arquitectura y Diseño de Software  
**Institución:** Universidad Autónoma de Tamaulipas - Facultad de Ingeniería Tampico (FIT)  

---

## Descripción del Proyecto

Este repositorio contiene la implementación práctica y teórica de una API REST funcional desarrollada en Node.js con Express, que gestiona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con persistencia en memoria, manejo estandarizado de códigos de error HTTP y ejemplos de consumo mediante el uso de `fetch`.

---

## Métodos HTTP y Estructura de Endpoints

| Operación CRUD | Método HTTP | Estructura de Endpoint | Descripción | Requiere Cuerpo (Body) |
| :--- | :--- | :--- | :--- | :--- |
| Crear | POST | `/productos` | Captura y persiste un nuevo registro. | Sí (JSON) |
| Leer (Lista) | GET | `/productos` | Recupera la lista completa de registros. | No |
| Leer (Uno) | GET | `/productos/:id` | Consulta un registro por su ID único. | No |
| Actualizar (Total) | PUT | `/productos/:id` | Reemplaza la totalidad del registro especificado. | Sí (JSON) |
| Actualizar (Parcial)| PATCH | `/productos/:id` | Modifica únicamente los campos enviados. | Sí (JSON) |
| Eliminar | DELETE | `/productos/:id` | Elimina permanentemente el registro. | No |

---

## Códigos de Estado y Manejo de Errores

### Respuestas Satisfactorias (2xx)
- **200 OK:** Petición procesada exitosamente (Consultas GET y Actualizaciones PUT).
- **201 Created:** Recurso creado y persistido con éxito (Peticiones POST).
- **204 No Content:** Acción completada con éxito sin cuerpo de respuesta (Operaciones DELETE).

### Errores del Cliente (4xx)
- **400 Bad Request:** Datos de entrada malformados o ausencia de campos obligatorios.
- **401 Unauthorized:** Ausencia de credenciales de autenticación válidas.
- **403 Forbidden:** El cliente no cuenta con los permisos necesarios.
- **404 Not Found:** El recurso o identificador solicitado no existe.
- **409 Conflict:** Conflicto de integridad en los datos.

### Errores del Servidor (5xx)
- **500 Internal Server Error:** Excepción no controlada en la lógica del servidor.

### Estructura de Error JSON
```json
{
  "error": true,
  "status": 404,
  "mensaje": "El producto con ID 5 no fue encontrado",
  "detalles": null
}
