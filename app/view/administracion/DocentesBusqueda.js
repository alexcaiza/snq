Ext.define('LoginAppDemo.view.administracion.DocentesBusqueda', {
    extend: 'Ext.form.Panel',
    alias: 'widget.docentesBusqueda',
    title: 'Busqueda',
    itemId: 'docentesBusquedaID',
	id: 'docentesBusquedaID',
	bodyPadding: 2,
	autoScroll:true,
	url: 'php/docentes/buscarDocentes.php',
	width: 225,
	
	layout: {
		type: 'vbox',
	},
	fieldDefaults: {
		msgTarget: 'side',
		labelStyle: 'font-weight:bold; width:50px; font-size: 9px; color:#2A0A0A',
		fieldStyle: 'font-size: 10px;',
	},
	
	initComponent: function() {
		this.items = [
		{
			xtype:'fieldset',
			title: 'Filtros docentes',
			width: '100%',
			layout: 'anchor',
			items :[
				{
					fieldLabel: 'Cedula',
					xtype: 'textfield',
					name: 'cedula',
					emptyText: 'Ingrese la cedula',
					labelAlign: 'top',
					width: '100%',
					cls: 'field-margin',
					maxLength: 10,
					enforceMaxLength: 10,
					vtype: 'validacionNumero',
				},{
					fieldLabel: 'Nombre',
					xtype: 'textfield',
					name: 'nombres',
					emptyText: 'Ingrese el nombre',
					labelAlign: 'top',
					width: '100%',
					cls: 'field-margin',
				},{
					fieldLabel: 'Apellido',
					xtype: 'textfield',
					name: 'apellidos',
					emptyText: 'Ingrese el apellido',
					labelAlign: 'top',
					width: '100%',
					cls: 'field-margin',
				},{
					fieldLabel: 'Estado',
					xtype: 'combobox',
					name: 'estado',
					labelAlign: 'top',
					cls: 'css-combo-estado',
					width: 100,
					editable: false,
					store: [['','Selecione'],['1','Activo'], ['0', 'Inactivo']],
					listeners: {
						render: function (field) {
							field.setValue('');
						}
					}
				}
			]
		}
		];
		
		this.buttons = [
			{
				xtype: 'button',
				text: 'Buscar',
				action: 'search',
				formBind: true,
				id: 'btnSearchDocentes',
				icon: 'public/images/bullet_buscar.png',
				scale   : 'small',
			},
			
		];
		
		this.callParent(arguments);
		
	},
});


