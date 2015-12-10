Ext.define('LoginAppDemo.view.cursos.CursosEdicion', {
    extend: 'Ext.window.Window',
    alias: 'widget.cursosEdicion',
	id: 'cursosEdicionID',
    title: 'Curso',
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
				id: 'formCursosEdit',
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
                        name: 'nombrecurso',
                        fieldLabel: 'Curso',
						maxLength: 20,
						enforceMaxLength :20,
                    },{
                        xtype: 'textfield',
                        name: 'nombreparalelo',
                        fieldLabel: 'Paralelo',
						maxLength: 20,
						enforceMaxLength :20,
                    },{
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
						title: 'Materias',
						itemId: 'gridCursoMateriasID',
						id: 'gridCursoMateriasID',
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
						name: 'codigomateria'
					}, {
						xtype: 'hiddenfield',
						name: 'codigocurso'
					}
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Aceptar',
                id: 'btnCursoMateriasID',
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


