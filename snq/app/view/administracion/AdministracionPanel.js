Ext.define('LoginAppDemo.view.administracion.AdministracionPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.administracionPanel',
    title: 'Administracion',
    itemId: 'administracionPanel',
    id: 'administracionPanelID',
    collapsible: true,
    //layout: 'border',
	layout: 'fit',
	//margins: '3 3 3 3',
	//activeTab:0,
	
    items:
    [
	    {
			title: 'Docentes',
			layout: 'border',
			iconCls: 'tab1-icon',
			items: [{
				//title: 'center',
				region:'center',
				xtype: 'docentesPanel',
			}]
		},
		{
			title: 'Cursos',
			layout: 'border',
			iconCls: 'tab1-icon',
			items: [{
				//title: 'center',
				region:'center',
				xtype: 'cursosPanel',
			}]
		},
	
	],
});


