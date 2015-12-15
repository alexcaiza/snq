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
            '#gridCursosID actioncolumn#accionesCursosID' : {
                click: this.onActionGridCursos
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
	
	onActionGridCursos: function(grid,cell,row,col,e){
		console.log('The grid onActionGridCursos() method');
		
		var record = grid.getStore().getAt(row);
		
		var action = e.target.getAttribute('class');
		
		me = this;
		
		if (action.indexOf("x-action-col-0") != -1) {
			console.log('You chose to do edit to ' + record.get('codigocurso'));
			me.editarUsuario(grid, record, row);
	   } else if (action.indexOf("x-action-col-1") != -1) {
			console.log('You chose to do Eliminar to ' + record.get('codigocurso'));
			//me.eliminarUsuario(grid, record, row);	   
	   }
	},
	
	seleccionarCurso: function(grid, record, item, index, e, eOpts) {
        me = this;
		me.editarUsuario(grid, record, index);
    },
    
    editarUsuario: function(grid, record, index) {
		console.log('The editarUsuario method');
		
		var view = Ext.widget('cursosEdicion');
		
		var formCursoEdicion = Ext.getCmp('formCursoEdicion');
		var valuesUsuariosEdit = formCursoEdicion.getValues();
		console.log(valuesUsuariosEdit);
		
		if (formCursoEdicion) {
			formCursoEdicion.loadRecord(record);
		}
	},
	
});


