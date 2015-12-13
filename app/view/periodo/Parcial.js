Ext.define('LoginAppDemo.view.periodo.Parcial', {
	extend: 'Ext.form.FieldSet',	
    alias: 'widget.parcial',
	//title: 'Parcial 1',
	//cls: 'my-fieldset',
	//border: false,
	layout: {
		//tableAttrs: { style: { width: '100%' } },
		type: 'table',
		columns: 1,
	},
	defaults: {
		//margin: '0 0 0 0',
	},
	fieldDefaults: {
		labelStyle: 'font-weight:bold; width:100px; font-size: 9px;',
		fieldStyle: 'font-size: 10px;',
	},
	items :[
		{
			xtype: 'nota',
			name: 'notasP1',
		}
	]			
});
