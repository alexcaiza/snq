Ext.define('LoginAppDemo.view.seguridades.OpcionesBusqueda', {
    extend: 'Ext.form.Panel',
    alias: 'widget.opcionesBusqueda',
    title: 'Busqueda',
    id: 'opcionesBusquedaID',
    //collapsible: true,
    //layout: 'border',
	bodyPadding: 2,
	url: 'php/seguridades/buscarOpciones.php',
	width: 225,
	
	layout: {
		type: 'vbox',       
		//align: 'stretch',    
		//padding: 5
	},
	fieldDefaults: {
		msgTarget: 'side',
		//labelWidth: 50,
		//anchor: '100%',
		labelStyle: 'font-weight:bold; width:50px; font-size: 9px; color:#2A0A0A',
		fieldStyle: 'font-size: 10px;',
	},
	
	initComponent: function() {
		this.items = [
		{
			xtype:'fieldset',
			title: 'Filtros opciones',
			width: '100%',
			layout: 'anchor',
			items :[
				{
					fieldLabel: 'Opcion',
					xtype: 'textfield',
					name: 'nombre',
					emptyText: 'Ingrese la opcion',
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
					//anchor: '50%',
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
				id: 'btnSearchOpcionesID',
				icon: 'public/images/bullet_buscar.png',
				scale   : 'small',
			},
			
		];
		
		this.callParent(arguments);
		
	},
});


