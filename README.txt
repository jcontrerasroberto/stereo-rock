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

Cada vista que es update_*.html es un formulario con metodo post para la actualizacion usar el input id que tiene el valor original de la PK. el formulario se llena solo usando el fill_update.js (cambiar rutas de ajax)

Cambiar las rutas de post en admin.js en los metodos ajax para commitDelete() y commitDeleteUser()

Cambiar rutas ajax en fill_update.js, las mismas que en mostrarinfo.js ya que requieren de lo mismo
