Ext.define('LoginAppDemo.view.cursos.CursosPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cursosPanel',
    //title: 'Cursos',
    itemId: 'cursosPanelID',
    id: 'cursosPanelID',
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
		xtype: 'cursosBusqueda',
	    region: 'west',
	    width: 250,
	    collapseDirection: 'left',
	    collapsible: true,
	    split: true,
		frame: true,
		border: true,
		bodyStyle:{"background-color":"#FFFFFF"}, 
	},{
		xtype: 'cursosCenter',
		//xtype: 'panel',
		region:'center',
		border: true,
		frame: true,
		layout: 'fit',
		bodyStyle:{"background-color":"#FFFFFF"},
	}],

});


