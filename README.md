# backend-project


| Method | Path | Description | Additional info
| ------------- | ------------- | ------------- | ------------- |
| GET   | / | Home con info y frase motivacional (api) | |
| GET   | /signup	| Muestra el formulario para registrarse | |
| POST  | /signup	| Guarda nuevo usuario en la BBDD si los campos están rellenos y no está ya registrado ese correo (+bcrypt), si no envía error	| |
| GET   | /login	| Muestra el formulario para iniciar sesión (solo si is active, es decir, no ha eliminado su perfil)	| |
| POST  | /login	| Comprueba que los datos son válidos e inicia sesión (redirige a /home) o envía error al usuario	| |
| GET   | /logout	| Cierra sesión y redirige a home	| |
| GET   | /my-profile	| Muestra nombre, email, contraseña y botones para editar todo. También muestra los consejos (si los hay) que ha enviado para publicar y su estado (pendiente de validación, publicado, rechazado) y permite eliminar de la lista los consejos que han sido rechazados	| Meter el título de consejos en el if de hbs |
| GET   | /my-profile/edit	| Muestra formulario para editar datos (nombre, email, contraseña)	| |
| POST	| /my-profile/edit	| Actualiza info en BBDD y redirije al perfil	| |
| POST	| /my-profile/delete	| Cambia active a false	| |
| POST 	| /:adviceId/delete	| Elimina consejo de BBDD y redirije al perfil	| |
| GET	| /home	| Saluda al usuario y pregunta cómo está hoy + otras opciones (botones)	| |
| POST	| /home	| Guarda estado de ánimo en la BBDD	| El usuario debe meter el mood cada día |
| GET	| /moments	| Muestra lista de momentos	| |
| GET	| /moments/create	| Muestra formulario para crear un nuevo lugar/momento	| |
| POST	| /moments/create	| Guarda nuevo lugar/momento en la BBDD	| Si hay datos de lugar, crear el lugar, con el id del nuevo lugar creado, crear el momento. Si no tiene lugar, es null o what? |
| GET	| /moments/:momentId/edit	| Muestra formulario para editar lugar/momento	| |
| POST	| /moments/:momentId/edit	| Actualiza info en la base de datos y redirige a la lista de momentos	| |
| POST	| /moments/:momentId/delete	| Elimina un momento de la BBDD	| |
| GET	| /api/moments	| Retorna json de todos los momentos para llamarlo desde el js	| |
| GET	| /places	| Muestra el mapa con las chinchetas de los lugares (lista ya veremos) | |
| GET	| /api/places	| Retorna json de todos los lugares para llamarlo desde el js	| Las otras apis directamente desde javascript? (axios.| get(enlace de random?) |
| GET	| /daily-phrase	| Muestra la frase inspiracional del día traída desde API (la de la home)	| |
| GET	| /activity	| Muestra una actividad para hacer traída desde API	| Incluir botón para mostrar otra actividad (otra llamada a la API) |
| GET	| /daily-advice |	Muestra el consejo del día traído desde API	| |
| GET	| /community-advice	| Muestra la lista de consejos que publican los usuarios (aceptados por el moderador)	| BONUS: rating de cada consejo? |
| GET	| /community-advice/create	| Muestra formulario para crear un nuevo consejo para la comunidad	| |
| POST	| /community-advice/create	| Guarda consejo en la BBDD a la espera de ser aceptados y redirige a la lista de consejos de usuarios	| |
| GET	| /community-advice/control	| Muestra la lista de consejos por aceptar y ofrece al moderador la opción de aceptarlos/editarlos/eliminarlos	| Acceso solo al moderador |
| GET	| /community-advice/:adviceId/edit	| Muestra formulario para editar consejo	| Acceso solo al moderador |
| POST	| /community-advice/:adviceId/edit	| Actualiza consejo en la base de datos y redirige a la lista de consejos por aceptar	| Acceso solo al moderador |
| POST	| /community-advice/:placeId/delete	| Elimina un consejo de la BBDD	| Acceso solo al moderador |
| GET	| /moderators	| Muestra una lista de los moderadores actuales (puede editarlos o eliminarlos)	| Acceso admin y moderadores, pero solo ve las opciones de editar y eliminar el admin |
| GET	| /moderators/:moderatorId/edit	| Muestra formulario para editar moderador	| Solo admin |
| POST	| /moderators/:moderatorId/edit	| Guarda cambios de moderador en la BBDD (hacer que el moderador sea usuario normal)	| Solo admin |
| POST	| /moderators/:moderatorId/delete	| Elimina moderador de BBDD (cambiar key active a false, no eliminar)	| Solo admin |
| GET	| /moderators/create	| Muestra formulario para crear un nuevo usuario moderador (crear moderador de cero). Con campos de nombre y contraseña también.	| Solo admin |
| POST	| /moderators/create	| Crea usuario nuevo con rol de moderador en la BBDD	| Solo admin |
| GET	| moderators/edit-user	| Muestra formulario para convertir un usuario existente en moderador (cambiar el rol a un user). Búsqueda a través del correo electrónico	| Solo admin |
| POST	| moderators/edit-user	| Actualiza rol de usuario en la BBDD	| Solo admin |
