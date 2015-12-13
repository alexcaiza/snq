Ext.define('LoginAppDemo.view.administracion.DocentesPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.docentesPanel',
    //title: 'Docentes',
    itemId: 'docentesPanelID',
    id: 'docentesPanelID',
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
		xtype: 'docentesBusqueda',
	    region: 'west',
	    width: 250,
	    collapseDirection: 'left',
	    collapsible: true,
	    split: true,
		frame: true,
		border: true,
		bodyStyle:{"background-color":"#FFFFFF"}, 
	},{
		xtype: 'docentesCenter',
		region:'center',
		border: true,
		frame: true,
		layout: 'fit',
		bodyStyle:{"background-color":"#FFFFFF"},
	}],

});


