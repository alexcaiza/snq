Ext.define('LoginAppDemo.model.Parcial', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'codigoparcial', type: 'int'},
		{name: 'nombre', type: 'string'}, 
		{name: 'descripcion', type: 'string'},
		{name: 'codigoreferencia', type: 'string'},
		{name: 'tipocomponente', type: 'string'},
		{name: 'titleid', type: 'string'},
		{name: 'estado', type: 'string'},
		]
});

