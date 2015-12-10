Ext.define('LoginAppDemo.store.OpcionesStore', {
    extend: 'Ext.data.ArrayStore',
    storeId: 'opcionesStore',
	model: "LoginAppDemo.model.Opcion",
    fields: [
	   {name: 'codigoopcion'},
	   {name: 'nombre'},
	   {name: 'descripcion'},
	   {name: 'estado'},
	]
});