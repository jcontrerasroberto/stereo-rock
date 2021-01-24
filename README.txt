FALTA (ROBERT):
+Estilo
Editar adminpanel
Editar usuario


AGREGADOS:
Ya se puede buscar igual un estudio, musico


BACKEND (JULIO):

register.html sirve para registrar un nuevo usuario via post, en caso de exito redireccionar al usuario a la vista users.html

Todas las vistas que son registro son formularios con metodo POST, cambiar ruta action
Si el registro es exitoso redireccionar al usuario a la vista show_info.html?key=id&category=categoria para que pueda ver el dato registrado

Cada vista que es update_*.html recive via get un id que corresponde al id del que quieren editar, por ejemplo update_cancion.html?key=1201
Dependiendo lo que sea se busca en la bd y los datos se vacian en los value de cada input, cada vista viene ya con un value puesto que debes cambiar

Cambiar las rutas de post en admin.js en los metodos ajax para commitDelete() y commitDeleteUser()