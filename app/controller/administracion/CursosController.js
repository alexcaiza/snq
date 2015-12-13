Ext.define('LoginAppDemo.controller.administracion.CursosController', {
    extend: 'Ext.app.Controller',
    views: [
        'cursos.CursosBusqueda',
		'cursos.CursosCenter',
    ],
	stores: [
        'CursosStore',
    ],
    init: function() {
        console.log('Initialized CursosController! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
			'cursosBusqueda button[action=search]' : {
				click: this.searchCursos
			},
			'#gridCursosID' : {
                itemdblclick: this.seleccionarCurso,
            },
        });
    },
	
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
	
	searchCursos: function(button, e, eOpts) {
		console.log('The searchCursos() method.');
		
		console.log('INI');
		
		var me = this;
		
		var form = Ext.getCmp('cursosBusquedaID');
		var values = form.getValues();
		
		console.log(values);
		
		if (form.isValid()) {
			dstore = Ext.getCmp('gridCursosID').getStore();
			dstore.loadPage(1 ,{
				params: {
					page: '1',
					start: '0',
					params: Ext.encode(values),
				},
				callback: function(records, operation, success) {
					if (success == true) {
						console.log('success search');
						Ext.getCmp('gridCursosID').doLayout();
						Ext.getCmp('gridCursosID').getView().refresh();
					}
				}
			});
		}
		
		console.log('FIN');	
	},
	
	seleccionarCurso: function(grid, record, item, index, e, eOpts) {
        me = this;
		me.editarUsuario(grid, record, index);
    },
	
});


