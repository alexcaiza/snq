Ext.define('LoginAppDemo.view.seguridades.SeguridadesEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.seguridadesEdit',
    title: 'Seguridades',
	width: 350,
    //layout: 'fit',
	layout: {
				type: 'vbox',       // Arrange child items vertically
				align: 'stretch',    // Each takes up full width
				padding: 5
			},
	margins: '5 5 0 0',
    autoShow: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 50,
					anchor: '100%'
				},
                items: [
					{
                        xtype: 'textfield',						
                        name: 'codigoempleado',
						itemId : 'codigoempleadoID',
                        fieldLabel: 'Id',
                        disabled:true
                    },{
                        xtype: 'textfield',
                        name: 'cedula',
                        fieldLabel: 'cedula'
                    },{
                        xtype: 'textfield',
                        name: 'nombres',
                        fieldLabel: 'Nombre'
                    },{
                        xtype: 'textfield',
                        name: 'apellidos',
                        fieldLabel: 'apellidos'
                    },{
                        xtype: 'textfield',
                        name: 'edad',
                        fieldLabel: 'Edad'
                    },{
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    },{
						fieldLabel: 'Genero',
						xtype: 'combobox',
						name: 'genero',
						store: ['M', 'F'],
					},{
						fieldLabel: 'Usuario',
						xtype: 'textfield',
						name: 'usuario',
					}
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Guardar',
                id: 'btnCreateEmpleadoID',
                action: 'save'
            },{
                text: 'Actualizar',
                id: 'btnUpdateEmpleadoID',
                action: 'update'
            },{
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});


