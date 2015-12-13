Ext.define('LoginAppDemo.store.ComboCursosStore', {
	extend:'Ext.data.Store',
    storeId: 'comboCursosStore',
	requires : [
        'LoginAppDemo.model.Curso'
    ],
	model: "LoginAppDemo.model.Curso",
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarCursos.php',
        reader: {
            type: 'json',
			root: 'cursos',
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