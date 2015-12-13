Ext.define('LoginAppDemo.view.notas.NotasPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.notasPanel',
    title: 'Notas quimestre',
    itemId: 'notasPanelID',
    id: 'notasPanelID',
    //collapsible: true,
    //layout: 'border',
	//margins: '1 1 1 1',
	//bodyPadding: 1,
	border: true,
	bodyStyle:{"background-color":"#FFFFFF"}, 
	layout: {
		//type: 'border',       
		type: 'border', //fit border
		align: 'stretch',    
		//padding: 10
	},
	
	items: [{
		xtype: 'notasBusqueda',
	    region: 'west',
	    width: 250,
	    collapseDirection: 'left',
	    collapsible: true,
	    split: true,
		frame: true,
		border: true,
		bodyStyle:{"background-color":"#FFFFFF"}, 
	},{
		xtype: 'notasCenter',
		region:'center',
		//title: 'Notas',
		border: true,
		frame: true,
		bodyStyle:{"background-color":"#FFFFFF"},
	}],

});


