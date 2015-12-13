Ext.define('LoginAppDemo.store.DocentesStore', {
	extend:'Ext.data.Store',
    storeId: 'docentesStore',
	requires : [
        'LoginAppDemo.model.Docente'
    ],
	model: "LoginAppDemo.model.Docente",
	proxy: {
        type: 'ajax',
        url : 'php/docentes/busquedaDocentes.php',
        reader: {
            type: 'json',
			root: 'docentes',
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