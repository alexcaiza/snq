Ext.define('LoginAppDemo.view.seguridades.SeguridadesPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.seguridadesPanel',
    title: 'Seguridades',
    itemId: 'seguridadesPanel',
    id: 'seguridadesPanelID',
    collapsible: true,
    layout: 'border',
	//margins: '3 3 3 3',
	activeTab:0,
	
    items:[{
		title: 'Usuarios',
		layout: 'border',
		iconCls: 'tab1-icon',
		items: [{
			region:'west',
			xtype: 'usuariosBusqueda',
		},{
			region:'center',
			xtype: 'usuariosCenter',
		}]
	},{
		title: 'Roles',
		layout: 'border',
		iconCls: 'tab2-icon',
		items: [{
			region:'west',
			xtype: 'rolesBusqueda',
		},{
			region:'center',
			xtype: 'rolesCenter',
		}]
	},{
		title: 'Opciones',
		layout: 'border',
		iconCls: 'tab3-icon',
		items: [{
			region:'west',
			xtype: 'opcionesBusqueda',
		},{
			region:'center',
			xtype: 'opcionesCenter',
		}]
	}
	],
});


