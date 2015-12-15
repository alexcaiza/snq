Ext.define('LoginAppDemo.model.Materia', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'codigomateria', type: 'int'},
		{name: 'nombre', type: 'string'},
		{name: 'descripcion', type: 'string'},
		{name: 'codigoreferencia', type: 'string'},
		{name: 'estado', type: 'string'},
		{name: 'numrow', type: 'int'},
		]
});

