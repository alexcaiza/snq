Ext.define('LoginAppDemo.store.TipoNotaStore', {
	extend:'Ext.data.Store',
    storeId: 'tipoNotaStore',
	requires : [
        'LoginAppDemo.model.TipoNota'
    ],
	model: "LoginAppDemo.model.TipoNota",
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarTiposNota.php',
        reader: {
            type: 'json',
			root: 'tiposnota',
        }
    },
	listeners: {
		'beforeload': function(store, options) {
			console.log(options);
		},
		'load': function(store, records, success) {
			console.log(records);
		}
	},
});