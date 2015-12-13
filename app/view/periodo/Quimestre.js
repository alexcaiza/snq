Ext.define('LoginAppDemo.view.periodo.Quimestre', {
	extend: 'Ext.form.FieldSet',	
    alias: 'widget.quimestre',
	//plain: true,
	//border: 0,
	bodyPadding: 1,
	anchor: '100%',
	//cls: 'my-fieldset2',
	//autoScroll:true,
	fieldDefaults: {
		msgTarget: 'side',
		labelAlign : 'right',
		anchor: '100%',
		labelStyle: 'font-weight:bold; width:100px; font-size: 9px;',
		fieldStyle: 'font-size: 10px;',
	},
	defaults: {
		margin: '0 0 0 0',
	},
	layout: {
		tableAttrs: { 
			style: { width: '100%' } 
		},
		tdAttrs: { style: {padding: '1px;'} },
		type: 'table',
		//padding: '2',
		columns: 4,
	},
	items: [
		{
			xtype: 'parcial',
			title: 'Parcial 1',
			cls: 'my-fieldset',
			name: 'notasP1',
		},{
			xtype: 'parcial',
			title: 'Parcial 2',
			cls: 'my-fieldset',
			name: 'notasP2',
		},{
			xtype: 'parcial',
			title: 'Parcial 3',
			cls: 'my-fieldset',
			name: 'notasP3',
		},{
			xtype: 'parcial',
			title: 'Examen',
			cls: 'my-fieldset',
			name: 'examenQ',
		},
	],
			
});
