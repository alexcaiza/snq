Ext.define('LoginAppDemo.store.ComboParalelosStore', {
	extend:'Ext.data.Store',
    storeId: 'comboParalelosStore',
	requires : [
        'LoginAppDemo.model.Paralelo'
    ],
	model: "LoginAppDemo.model.Paralelo",
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarParalelos.php',
        reader: {
            type: 'json',
			root: 'paralelos',
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