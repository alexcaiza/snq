Ext.define('LoginAppDemo.model.Curso', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'codigocurso', type: 'int'},
		{name: 'codigomateria', type: 'int'},
		{name: 'codigodocente', type: 'int'},
		{name: 'codigoperiodo', type: 'int'},
		{name: 'codigoparalelo', type: 'int'},	
		{name: 'estado', type: 'string'},
		{name: 'nombremateria', type: 'string'},
		{name: 'nombreparalelo', type: 'string'},
		{name: 'nombrecurso', type: 'string'},
		{name: 'numrow', type: 'int'},
		]
});

