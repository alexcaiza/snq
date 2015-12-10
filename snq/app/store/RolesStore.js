Ext.define('LoginAppDemo.store.RolesStore', {
    extend: 'Ext.data.ArrayStore',
    storeId: 'rolesStore',
	model: "LoginAppDemo.model.Rol",
    fields: [
	   {name: 'codigorol'},
	   {name: 'nombre'},
	   {name: 'descripcion'},
	   {name: 'estado'},
	]
});