Ext.define('LoginAppDemo.view.seguridades.UsuariosEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.usuariosEdit',
	id: 'usuariosEditID',
    title: 'Usuario',
	width: 350,
	buttonAlign:'center',
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
				id: 'formUsuariosEdit',
				bodyPadding: 2,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 75,
					anchor: '100%',
					labelStyle: 'font-weight:bold; width:75px; font-size: 9px;',
					fieldStyle: 'font-size: 10px;',
				},
                items: [
					{
                        xtype: 'textfield',
                        name: 'cedula',
                        fieldLabel: 'cedula',
						maxLength: 20,
						enforceMaxLength :20,
                    },{
                        xtype: 'textfield',
                        name: 'nombres',
                        fieldLabel: 'Nombre',
						maxLength: 20,
						enforceMaxLength :20,
                    },{
                        xtype: 'textfield',
                        name: 'apellidos',
                        fieldLabel: 'Apellidos',
						maxLength: 20,
						enforceMaxLength :20,
                    }
					,{
						fieldLabel: 'Usuario',
						xtype: 'textfield',
						name: 'username',
						maxLength: 20,
						enforceMaxLength :20,
					}
					,{
						fieldLabel: 'Clave',
						xtype: 'textfield',
						name: 'clave',	
						inputType: 'password',
						maxLength: 10,
						enforceMaxLength :10,
					}
					,{
						fieldLabel: 'Clave(confirmacion)',
						xtype: 'textfield',
						name: 'clave2',
						inputType: 'password',
						maxLength: 10,
						enforceMaxLength :10,
						labelStyle: 'font-weight:bold; width:100px; font-size: 9px;',
					}
					,{
						fieldLabel: 'Estado',
						xtype: 'combobox',
						name: 'estado',
						width: 100,
						editable: false,
						store: [['','Selecione'],['1','Activo'], ['0', 'Inactivo']],
						listeners: {
							render: function (field) {
								field.setValue('');
							}
						},
					}
					,{
						xtype: 'grid',
						title: 'Roles',
						itemId: 'gridUsuarioRolesID',
						id: 'gridUsuarioRolesID',
						selModel: Ext.create('Ext.selection.CheckboxModel'),
						columns: [
							{ text: 'Nombre', dataIndex: 'nombre', flex: 3 },
							{ 
								text: 'Estado', 
								dataIndex: 'estado', 
								align:'center',
								width: 50,
								renderer: function(value) {
									if (value == '1') {
										return '<img src="public/images/accept.png" />';
									} else if (value == '0') {
										return '<img src="public/images/stop.png" />';
									} else {
										return value;
									}
								}
							},
						]
					}, {
						xtype: 'hiddenfield',
						name: 'codigousuario'
					}, {
						xtype: 'hiddenfield',
						name: 'codigoempleado'
					}
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Aceptar',
                id: 'btnUsuarioRolesID',
                action: 'save',
				icon: ' public/images/bullet_save.png',
            },{
                text: 'Cancelar',
                scope: this,
                handler: this.close,
				icon: ' public/images/bullet_cancel.png',
            }
        ];

        this.callParent(arguments);
    }
});


