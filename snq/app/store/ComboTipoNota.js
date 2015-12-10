Ext.define('LoginAppDemo.store.ComboTipoNota', {
	extend:'Ext.data.Store',
    storeId: 'comboTipoCurso',
	requires : [
        'LoginAppDemo.model.TipoNota'
    ],
	model: "LoginAppDemo.model.TipoNota",
	autoLoad: true,
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