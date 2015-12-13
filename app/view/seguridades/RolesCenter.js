Ext.define('LoginAppDemo.view.seguridades.RolesCenter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rolesCenter',
    title: 'Roles',
    itemId: 'rolesCenter',
    id: 'rolesCenterID',
    //collapsible: true,
	layout: 'fit',
	//margins: '5 5 0 0',
	bodyPadding: 2,
	items: [
	{
		xtype: 'grid',
		id: 'gridRolesID',
		dockedItems: [{
			xtype: 'rolesToolbar', 
			dock: 'top',
		}],
		//selModel: Ext.create('Ext.selection.CheckboxModel'),
		columns: [
			Ext.create('Ext.grid.RowNumberer'),
			{
				text: 'Rol', 
				dataIndex: 'nombre',
				flex: 1.5,
				renderer: function(value) {
					if (value != null) {
						return "<b>" + value + "</b>";
					}
				}
			},
			{ text: 'Descripcion', dataIndex: 'descripcion', flex: 2 },
			{
				xtype:'actioncolumn',
				text: 'Acciones', 
				width:75,
				align:'center',
				id: 'accionesRolesID',
				getClass: function(value,metadata,record){
					var estado = record.get('estado');
					  if (estado == 1 ) {
						return 'x-hide-display';
						} else {
						return 'x-grid-center-icon';
						}
					
				},
				items: [
				{
					icon: 'public/images/edit.png', 
					tooltip:'Editar',
					action: 'edit',
					style:'margin-left:5px',
					
				},{
					icon: 'public/images/delete.png',
					tooltip: 'Eliminar',
					action: 'delete',
					style:'margin-left:5px',							
				}
				]
			},
			{ 
				text: 'Estado', 
				dataIndex: 'estado', 
				align:'center',
				width: 50,
				renderer: function(value) {
					if (value == '1') {
						return '<img src="public/images/accept.png" />';
					} else if (value == '0') {
						return '<img src="public/images/stop.png" />';
					} else {
						return value;
					}
				}
			},
		]
	}
	]
        
});


