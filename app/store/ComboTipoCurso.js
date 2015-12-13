Ext.define('LoginAppDemo.store.ComboTipoCurso', {
	extend:'Ext.data.Store',
    storeId: 'comboTipoCurso',
	requires : [
        'LoginAppDemo.model.TipoCurso'
    ],
	model: "LoginAppDemo.model.TipoCurso",
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarTiposCurso.php',
        reader: {
            type: 'json',
			root: 'tiposcurso',
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