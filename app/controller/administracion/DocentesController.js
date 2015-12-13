Ext.define('LoginAppDemo.controller.administracion.DocentesController', {
    extend: 'Ext.app.Controller',
    views: [
        'administracion.DocentesBusqueda',
		'administracion.DocentesCenter',
    ],
	stores: [
        'DocentesStore',
    ],
    init: function() {
        console.log('Initialized DocentesController! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
			'docentesBusqueda button[action=search]' : {
				click: this.searchDocentes
			},
        });
    },
	
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
	
	searchDocentes: function(button, e, eOpts) {
		console.log('The searchDocentes() method.');
		
		console.log('INI');
		
		var me = this;
		
		var form = Ext.getCmp('docentesBusquedaID');
		var values = form.getValues();
		
		console.log(values);
		
		if (form.isValid()) {
			dstore = Ext.getCmp('gridDocentesID').getStore();
			dstore.loadPage(1 ,{
				params: {
					page: '1',
					start: '0',
					params: Ext.encode(values),
				},
				callback: function(records, operation, success) {
					if (success == true) {
						console.log('success search');
						Ext.getCmp('gridDocentesID').doLayout();
						Ext.getCmp('gridDocentesID').getView().refresh();
					}
				}
			});
		}
		
		console.log('FIN');	
	},
	
});


