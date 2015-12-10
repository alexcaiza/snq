Ext.define('LoginAppDemo.store.CursosStore', {
	extend:'Ext.data.Store',
    storeId: 'cursosStore',
	requires : [
        'LoginAppDemo.model.Curso'
    ],
	model: "LoginAppDemo.model.Curso",
	proxy: {
        type: 'ajax',
        url : 'php/cursos/busquedaCursos.php',
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