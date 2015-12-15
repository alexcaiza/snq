Ext.define('LoginAppDemo.store.MateriasStore', {
	extend:'Ext.data.Store',
    storeId: 'materiasStore',
    autoLoad: true,
	requires: [
        'LoginAppDemo.model.Materia'
    ],
	model: "LoginAppDemo.model.Materia",
	proxy: {
        type: 'ajax',
        url : 'php/cursos/busquedaMaterias.php',
        reader: {
            type: 'json',
			root: 'materias',
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