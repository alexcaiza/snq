Ext.define('LoginAppDemo.view.periodo.Nota', {
	extend: 'Ext.container.Container',	
    alias: 'widget.nota',
	fieldDefaults: {
		msgTarget: 'side',
		labelWidth: 100,
		//anchor: '100%',
		labelStyle: 'font-weight:bold; width:100px; font-size: 9px;',
		fieldStyle: 'font-size: 10px;',
		labelAlign: 'top',
	},								
	layout: {
		//tableAttrs: { style: { width: '100%' } },
		tdAttrs: { style: {padding: '1px;'} },
		type: 'table',
		columns: 2,
	},
	items: [
		{
			fieldLabel: 'Fecha inicio:',
			xtype: 'datefield',
			name: 'fechaInicio',
			format: 'Y-m-d',
			submitFormat: 'Y-m-d',
			allowBlank: false,
			editable: false,
			labelAlign: 'top',
		},{
			fieldLabel: 'Fecha fin:',
			xtype: 'datefield',
			name: 'fechaFin',
			format: 'Y-m-d',
			submitFormat: 'Y-m-d',
			allowBlank: false,
			editable: false,
			labelAlign: 'top',
		},
	],
			
});
