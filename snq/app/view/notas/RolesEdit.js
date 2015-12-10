Ext.define('LoginAppDemo.view.seguridades.RolesEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.rolesEdit',
	id: 'rolesEditID',
    title: 'Administrar rol',
	width: 350,
    buttonAlign:'center',
	layout: {
				type: 'vbox', 
				align: 'stretch',
				padding: 5
			},
	margins: '5 5 0 0',
    autoShow: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
				id: 'formRolesEditID',
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
						title: 'Permisos',
						id: 'gridPermisosID',
						selModel: Ext.create('Ext.selection.CheckboxModel'),
						columns: [
							Ext.create('Ext.grid.RowNumberer'),
							{ text: 'Id', dataIndex: 'codigopermiso', flex: 0.5 },							
							{ text: 'Permiso', dataIndex: 'nombre', flex: 3 },
							{ text: 'Estado', dataIndex: 'estado' },							
						]
					}, {
						xtype: 'hiddenfield',
						name: 'codigorol'
					}
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Aceptar',
                id: 'btnRolSaveID',
                action: 'save',
				icon: ' public/images/bullet_save.png',
            },{
                text: 'Aceptar',
                id: 'btnRolUpdateID',
                action: 'update',
				icon: ' public/images/bullet_save.png',
            },{
                text: 'Cancel',
                scope: this,
                handler: this.close,
				icon: ' public/images/bullet_cancel.png',
            }
        ];

        this.callParent(arguments);
    }
});


