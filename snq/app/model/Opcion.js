Ext.define('LoginAppDemo.model.Opcion', {
    extend: 'Ext.data.Model',
	idProperty: 'codigoopcion',
    fields: [
		'codigoopcion', 
		'nombre',
		'descripcion',
		'url',
		'referencia',
		'estado',
		]
});

