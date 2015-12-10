Ext.define('LoginAppDemo.view.periodo.PeriodoPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.periodoPanel',
    //title: 'Configuracion periodo quimestral',
    itemId: 'periodoPanelID',
    id: 'periodoPanelID',
	//border: true,
	bodyStyle:{"background-color":"#FFFFFF"}, 
	bodyPadding: 1,
	//autoScroll:true,
	layout: {   
		type: 'border',
		align: 'stretch',
	},
	items: [{
		xtype: 'periodoQuimestral',
		//xtype: 'panel',
		region:'center',
		//border: true,
		frame: true,
		bodyStyle:{"background-color":"#FFFFFF"},
	}],

});


