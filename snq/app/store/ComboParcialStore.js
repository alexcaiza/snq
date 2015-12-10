Ext.define('LoginAppDemo.store.ComboParcialStore', {
	extend:'Ext.data.Store',
    storeId: 'comboParcialStore',
	requires : [
        'LoginAppDemo.model.Parcial'
    ],
	model: "LoginAppDemo.model.Parcial",
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarParciales.php',
        reader: {
            type: 'json',
			root: 'parciales',
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