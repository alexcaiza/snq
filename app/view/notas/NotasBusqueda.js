Ext.define('LoginAppDemo.view.notas.NotasBusqueda', {
    extend: 'Ext.form.Panel',
    alias: 'widget.notasBusqueda',
    title: 'Busqueda',
    itemId: 'notasBusquedaID',
	id: 'notasBusquedaID',
	bodyPadding: 2,
	autoScroll:true,
	url: 'php/seguridades/buscarRoles.php',
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
	
		var me = this;
		
		this.items = [
		{
			xtype:'fieldset',
			title: 'Filtros busqueda',
			width: '100%',
			layout: 'anchor',
			items :[
				{
					fieldLabel: 'Curso',
					xtype: 'combobox',
					name: 'codigotipocurso',
					labelAlign: 'top',
					cls: 'css-combo-curso',
					emptyText: 'Select...',
					width: 100,
					editable: false,
					store: 'ComboTipoCurso',
					displayField: 'nombre',  
					valueField: 'codigotipocurso',
					listeners: {
						render: function (field) {
							field.setValue('');
						}
					}
				},
				{
					fieldLabel: 'Materia',
					xtype: 'combobox',
					name: 'codigomateria',
					labelAlign: 'top',
					cls: 'css-combo-materia',
					emptyText: 'Select...',
					width: 150,
					editable: false,
					store: [['1','Matematicas'], ['0', 'Geometria']],
					listeners: {
						render: function (field) {
							//field.setValue(null);
						}
					}
				},
				{
					fieldLabel: 'Paralelo',
					xtype: 'combobox',
					name: 'codigoparalelo',
					labelAlign: 'top',
					cls: 'css-combo-paralelo',
					emptyText: 'Select...',
					width: 150,
					editable: false,
					store: [['1','A'], ['2', 'B'], ['3', 'C']],
					listeners: {
						render: function (field) {
							//field.setValue('');
						}
					}
				},
				
				{
					fieldLabel: 'Nota',
					xtype: 'combobox',
					id: 'nivel1',
					name: 'nivel1',
					labelAlign: 'top',
					cls: 'css-combo-nivel1',
					width: 150,
					emptyText: 'Select...',
					editable: false,
					//mode: 'remote', // local remote
					//queryMode:'remote',
					//triggerAction:'all',
					store: 'ComboPeriodoConfiguracionStoreN1',
					displayField: 'descripcion',  
					valueField: 'codigotiponota',
				},
				
				{
					fieldLabel: 'Parcial',
					xtype: 'combobox',
					id: 'nivel2',
					name: 'nivel2',
					labelAlign: 'top',
					cls: 'css-combo-nivel1',
					width: 150,
					emptyText: 'Select...',
					editable: false,
					//mode: 'remote', // local remote
					//queryMode:'remote',
					//triggerAction:'all',
					store: 'ComboPeriodoConfiguracionStoreN2',
					displayField: 'descripcion',  
					valueField: 'codigotiponota',
				},
			]
		}
		];
		
		this.buttons = [
			{
				xtype: 'button',
				text: 'Buscar 3',
				action: 'search3',
				formBind: true,
				id: 'btnBuscar3',
				icon: 'public/images/bullet_buscar.png',
				scale   : 'small',
			},
		];
		
		this.callParent(arguments);
		
	},
});


