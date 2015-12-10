function mensaje() {
    alert('Hola js');
}

function confirmarEliminarPersona(url) {
    if (confirm('Realmente desea eliminar el registro?')) {
        window.location = url;
    }
}

function carga_ajax(ruta, id, div) {
    // alert(ruta );
    $.post(ruta, {id: id, }, function(resp)
    {
        $("#" + div + "").html(resp);
    });
}