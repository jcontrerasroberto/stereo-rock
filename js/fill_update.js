function llenarAlbum(){
    //Obtener informacion del musico
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "album"
    };

    var mostrar = JSON.stringify(elem);
    //console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/album.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            console.log(resp);
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombrealbum").setAttribute("value", resp.nombre);
            document.getElementById("fecha_lanzamiento").setAttribute("value", resp.fechaLanzamiento);
            document.getElementById("pistas").setAttribute("value", resp.pistas);
            document.getElementById("banda").setAttribute("value", resp.banda);
            document.getElementById("estudio").setAttribute("value", resp.estudio);
            document.getElementById("portada").setAttribute("value", resp.portada);
            document.getElementById("contraportada").setAttribute("value", resp.contraportada);

        },
        data: mostrar
    });
    
}

function llenarArtist(){
    //Obtener informacion del musico
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "artist"
    };

    var mostrar = JSON.stringify(elem);
    //console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/artist.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            console.log(resp);
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombre").setAttribute("value", resp.nombre);
            document.getElementById("fecha_nacimiento").setAttribute("value", resp.fechaNacimiento);
            document.getElementById("ciudad").setAttribute("value", resp.cdNacimiento);
            if(resp.genero=="Masculino")
                document.getElementById('masculino').checked = true;
            else document.getElementById('femenino').checked = true;
            document.getElementById("web").setAttribute("value", resp.web);
            document.getElementById("biografia").value="";
            document.getElementById("biografia").value=resp.biografia;

        },
        data: mostrar
    });
    
}

function llenarBanda(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "band"
    };

    var mostrar = JSON.stringify(elem);
    console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/band.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombre").setAttribute("value", resp.nombre);
            document.getElementById("fecha").setAttribute("value", resp.anio);
            document.getElementById("ciudad").setAttribute("value", resp.ciudad);
            document.getElementById("influencias").value = "";
            for(let inf of resp.influencias){
                document.getElementById("influencias").value += inf+"\n";
            }
        },
        data: mostrar
    });
}

function llenarSong(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "song"
    };

    var mostrar = JSON.stringify(elem);
    console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/song.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombrecancion").setAttribute("value", resp.nombre);
            document.getElementById("compositor").setAttribute("value", resp.compositor);
            document.getElementById("fecha_lanzamiento").setAttribute("value", resp.fechaLanzamiento);
            document.getElementById("duracion").setAttribute("value", resp.duracion);
            
            document.getElementById("observaciones").value = "";
            document.getElementById("observaciones").value = resp.observaciones;
            document.getElementById("invitados").value = "";
            for(let inv of resp.invitados){
                document.getElementById("invitados").value += inv+"\n";
            }
            document.getElementById("tablatura_url").setAttribute("value", resp.tablatura_url);
            document.getElementById("tablatura_compositor").setAttribute("value", resp.tablatura_compositor);
            document.getElementById("fecha_tablatura").setAttribute("value", resp.tablatura_fecha);
            document.getElementById("traductor").setAttribute("value", resp.tablatura_traductor);
            document.getElementById("email_traductor").setAttribute("value", resp.tablatura_email);

        },
        data: mostrar
    });
}


function llenarEstudio(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "estudio"
    };

    var mostrar = JSON.stringify(elem);
    console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/estudio.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombre").setAttribute("value", resp.nombre);
            
            document.getElementById("direccion").value = "";
            document.getElementById("direccion").value = resp.direccion;
            
            document.getElementById("telefono").setAttribute("value", resp.telefono);
            document.getElementById("web").setAttribute("value", resp.web);

        },
        data: mostrar
    });
}


function llenarMusico(){
    //Obtener informacion del musico
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
        "type": "musico"
    };

    var mostrar = JSON.stringify(elem);
    console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/musico.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("nombre").setAttribute("value", resp.nombre);
            document.getElementById("instrumento").setAttribute("value", resp.instrumento);
            document.getElementById("ciudad").setAttribute("value", resp.cdNacimiento);
        },
        data: mostrar
    });
    
}


function llenarRegistro(){
    //Obtener informacion del musico
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('key');
    console.log(key);

    var elem = {
        "id": key,
    };

    var mostrar = JSON.stringify(elem);
    console.log(mostrar);

    //PETICION AJAX

    $.ajax({
        url: '../test/user.json', //Cambiar
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            document.getElementById("id").setAttribute("value", resp.id);
            document.getElementById("name").setAttribute("value", resp.nombre);
            document.getElementById("last_name").setAttribute("value", resp.apellido);
            document.getElementById("username").setAttribute("value", resp.username);
            document.getElementById("email").setAttribute("value", resp.email);
            if(resp.rol=="admin")
                document.getElementById('admin').checked = true;
            else
                document.getElementById('locutor').checked = true;
        },
        data: mostrar
    });
    
}

