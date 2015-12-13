Ext.define('LoginAppDemo.model.TipoNota', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'codigotiponota', type: 'int'},
		{name: 'codigotiponotapadre', type: 'int'},
		{name: 'codigodomino', type: 'int'},
		{name: 'nombre', type: 'string'},
		{name: 'descripcion', type: 'string'},
		{name: 'codigoreferencia', type: 'string'},
		{name: 'codigoreferenciadominio', type: 'string'},
		{name: 'codigoperiodo', type: 'int'},	
		{name: 'orden', type: 'int'},
		{name: 'componente', type: 'string'},
		{name: 'componenteid', type: 'string'},
		{name: 'estado', type: 'string'},
		{name: 'numrow', type: 'int'},
		]
});

