Ext.define('LoginAppDemo.view.seguridades.OpcionesEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.opcionesEdit',
	id: 'opcionesEditID',
    title: 'Administrar opcion',
	width: 350,
    buttonAlign:'center',
	bodyPadding: 2,
	layout: {
				type: 'vbox', 
				align: 'stretch',
				//padding: 5
			},
	margins: '5 5 0 0',
    autoShow: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
				id: 'formOpcionesEditID',
				bodyPadding: 2,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 50,
					anchor: '100%',
					labelStyle: 'font-weight:bold; width:50px; font-size: 9px;',
					fieldStyle: 'font-size: 10px;',
				},
                items: [
					{
                        xtype: 'textfield',
                        name: 'nombre',
                        fieldLabel: 'Nombre'
                    },
					{
                        xtype: 'textfield',
                        name: 'descripcion',
                        fieldLabel: 'Descripcion'
                    },
					{
                        xtype: 'textfield',
                        name: 'estado',
                        fieldLabel: 'Estado'
                    },
					
					{
                        xtype: 'textfield',
                        name: 'referencia',
                        fieldLabel: 'Referencia'
                    },
					{
                        //xtype: 'textfield',
                        name: 'url',
						xtype: 'hiddenfield',
                        fieldLabel: 'Url'
                    },
					{
						xtype: 'hiddenfield',
						name: 'codigoopcion'
					}
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Aceptar',
                id: 'btnOpcionSaveID',
                action: 'save',
				icon: ' public/images/bullet_save.png',
            },{
                text: 'Aceptar',
                id: 'btnOpcionUpdateID',
                action: 'update',
				icon: ' public/images/bullet_save.png',
            },{
                text: 'Cancelar',
				id: 'btnOpcionCancelID',
                action: 'cancel',
                scope: this,
                handler: this.close,
				icon: ' public/images/bullet_cancel.png',
            }
        ];

        this.callParent(arguments);
    }
});


