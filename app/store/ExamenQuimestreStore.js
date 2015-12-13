Ext.define('LoginAppDemo.store.ExamenQuimestreStore', {
	extend:'Ext.data.Store',
    storeId: 'examenQuimestreStore',
	autoSync: true,
	requires : [
        'LoginAppDemo.model.ExamenQuimestre'
    ],
	model: "LoginAppDemo.model.ExamenQuimestre",
	proxy: {
        type: 'ajax',
		pageParam: 'p',
        //url : 'php/notas/busqueda.php',
		api: {
			 create      : 'php/notas/actualizar-nota1.php',
			 read        : 'php/notas/busqueda-examen-quimestre.php',
			 update      : 'php/notas/actualizar-nota.php',
			 destroy     : 'php/notas/busquedaDestroy.php'
		},
        reader: {
            type: 'json',
			root: 'estudiantes',
			totalProperty: 'totalCount',
        },
		writer: {
			 type            : 'json',
			 writeAllFields  : false,
			 rootProperty    : 'data'
		},
    },
	pageSize : 24,
	listeners: {
		'beforeload': function(store, options) {
			form = Ext.getCmp('notasBusquedaID');
			values = form.getValues();
			values = Ext.encode(values)
			store.proxy.extraParams.params = values;
		},
		'load': function(store, records, success) {
			/*
			currentPage = dstore.currentPage;
			var i=1;
			dstore.each(function(record) {
				var taskID = record.data.id;
				numrow = i + ( 20 * (currentPage -1))
				record.set('numrow', numrow);
				i++;
			});
			*/
		}
	},
});