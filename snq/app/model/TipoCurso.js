Ext.define('LoginAppDemo.model.TipoCurso', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'codigotipocurso', type: 'int'},
		{name: 'nombre', type: 'string'},
		{name: 'codigoreferencia', type: 'string'},
		{name: 'codigonumerico', type: 'string'},
		{name: 'estado', type: 'string'},
	]
});

