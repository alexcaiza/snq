Ext.define('LoginAppDemo.store.ComboPeriodoConfiguracionStore', {
	extend:'Ext.data.Store',
    storeId: 'comboPeriodoConfiguracionStore',
	requires : [
        'LoginAppDemo.model.TipoNota'
    ],
	model: "LoginAppDemo.model.TipoNota",
	autoLoad: false,
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarTipoNota.php',
        reader: {
            type: 'json',
			root: 'datos',
        }
    },
	/*
	listeners: {
		'beforeload': function(store, options) {
			console.log(options);
		},
		'load': function(store, records, success) {
			console.log(records);
		}
	},
	*/
});