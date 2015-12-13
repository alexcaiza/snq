Ext.define('LoginAppDemo.view.periodo.PeriodoQuimestral', {
	extend: 'Ext.form.Panel',	
    alias: 'widget.periodoQuimestral',
	cls: 'your-css0',
	autoScroll:true,
	bodyPadding: 1,
	layout: {
		type: 'border',
		align: 'stretch',
	},
	dockedItems: [{
		xtype: 'periodoQuimestralToolbar', 
		dock: 'top'
	}],
	items: [
	{
		xtype:'panel',
		bodyPadding: 2,
		//autoScroll:true,
		layout: {
			type: 'vbox',
			align: 'stretch',
		},
		items: [
			{
				title: 'Periodo quimestral',
				xtype:'parcial',
				name: 'periodoDatos',
				id: 'periodoDatosID',
				itemId: 'periodoDatosID',
				cls: 'your-css4',
			},
			{
				title: 'Quimestre 1',
				xtype: 'quimestre',
				name: 'periodoQuimestre1',
				id: 'periodoQuimestre1ID',
				itemId: 'periodoQuimestre1ID',
				cls: 'your-css5',
				code: 'Q1',
			},
			{
				title: 'Quimestre 2',
				xtype: 'quimestre',
				name: 'periodoQuimestre2',
				id: 'periodoQuimestre2ID',
				itemId: 'periodoQuimestre2ID',
				cls: 'your-css6',
				code: 'Q2',
			},
			{
				xtype: 'container',
				//cls: 'your-css1',
				layout: {
					type: 'table',
					columns: 1,
					tableAttrs: { style: { width: '100%' } },
					tdAttrs: { style: {padding: '1px;'} },
				},
				items: [
				{
					title: 'Recuperaciones',
					xtype: 'parcial',
					name: 'recuperaciones',
					id: 'recuperacionesID',
					itemId: 'recuperacionesID',
					cls: 'your-css1',
				},
				{
					title: 'Supletorios',
					xtype: 'parcial',
					name: 'recuperacion2',
					id: 'recuperacionID2',
					itemId: 'recuperacionID2',
					cls: 'your-css1',
				},
				{
					title: 'Remedial',
					xtype: 'parcial',
					name: 'recuperacion3',
					id: 'recuperacionID3',
					itemId: 'recuperacionID3',
					cls: 'your-css1',
				},
				
				]
			},
		]
	}
	]
});
