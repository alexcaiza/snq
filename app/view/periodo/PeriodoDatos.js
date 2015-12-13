Ext.define('LoginAppDemo.view.periodo.PeriodoDatos', {
	extend: 'Ext.form.FieldSet',	
    alias: 'widget.periodoDatos',
	fieldDefaults: {
		msgTarget: 'side',
		labelWidth: 100,
		labelAlign : 'right',
		anchor: '100%',
		labelStyle: 'font-weight:bold; width:100px; font-size: 9px;',
		fieldStyle: 'font-size: 10px;',
	},								
	layout: {
		tableAttrs: { style: { width: '100%' } },
		type: 'table',
		columns: 2,
	},
	items: [
		{
			fieldLabel: 'Fecha inicio:',
			xtype: 'datefield',
			name: 'fechainicio',
			id: 'fechainicioID',
			format: 'Y-m-d',
			submitFormat: 'Y-m-d',
			allowBlank: false,
			editable: false,
		},{
			fieldLabel: 'Fecha fin:',
			xtype: 'datefield',
			name: 'fechafin',
			id: 'fechafinID',
			itemId: 'fechafinID',
			format: 'Y-m-d',
			submitFormat: 'Y-m-d',
			allowBlank: false,
			editable: false,
		},
		
	],
			
});
