Ext.define('LoginAppDemo.view.cursos.CursosBusqueda', {
    extend: 'Ext.form.Panel',
    alias: 'widget.cursosBusqueda',
    title: 'Busqueda',
    itemId: 'cursosBusquedaID',
	id: 'cursosBusquedaID',
	bodyPadding: 2,
	autoScroll:true,
	url: 'php/cursos/buscarCursos.php',
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
			title: 'Filtros cursos',
			width: '100%',
			layout: 'anchor',
			items :[
				{
					fieldLabel: 'Curso',
					xtype: 'combobox',
					name: 'curso',
					labelAlign: 'top',
					cls: 'css-combo-curso',
					width: 100,
					editable: false,
					store: [['','Selecione'],['1','Primero'], ['2', 'Segundo']],
					listeners: {
						render: function (field) {
							field.setValue('');
						}
					}
				},
				{
					fieldLabel: 'Paralelo',
					xtype: 'combobox',
					name: 'paralelo',
					labelAlign: 'top',
					cls: 'css-combo-paralelo',
					width: 100,
					editable: false,
					store: [['','Selecione'],['A','A'], ['B', 'B']],
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
				id: 'btnSearchCursos',
				icon: 'public/images/bullet_buscar.png',
				scale   : 'small',
			},
			
		];
		
		this.callParent(arguments);
		
	},
});


