Ext.define('LoginAppDemo.store.UsuariosStore', {
    extend: 'Ext.data.ArrayStore',
    storeId: 'contratosStore',
	model: "LoginAppDemo.model.Usuario",
    fields: [
	   {name: 'codigocontrato'},
	   {name: 'codigoempleado'},
	   {name: 'cedula'},
	   {name: 'nombrecompleto'},
	   {name: 'fechainicio'},
	   {name: 'fechafin'},
	   {name: 'estado'},
	   {name: 'valorhora'},
	   {name: 'codigohorario'},
	   {name: 'codigoperiodo'},
	   {name: 'anio'},
	   {name: 'numerohoras'},
	]
});