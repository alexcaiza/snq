Ext.define('LoginAppDemo.view.seguridades.UsuariosCenter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuariosCenter',
    //title: 'Usuarios',
    itemId: 'usuariosCenter',
    id: 'usuariosCenterID',
    //collapsible: true,
	layout: 'fit',
	//margins: '5 5 0 0',
	bodyPadding: 2,
	items: [
	{
		xtype: 'grid',
		title: 'Usuarios',
		itemId: 'gridUsuariosID',
		id: 'gridUsuariosID',
		//selModel: Ext.create('Ext.selection.CheckboxModel'),
		columns: [
			Ext.create('Ext.grid.RowNumberer'),
			{ text: 'Cedula', dataIndex: 'cedula', tdCls: 'custom-column', },
			{ text: 'Nombres', dataIndex: 'nombrecompleto', flex: 2 },
			{
				text: 'Usuario', 
				dataIndex: 'username',
				renderer: function(value) {
					if (value != null) {
						//return "<b>" + value + "</b>";
						return "" + value + "";
					}
				}
			},
			{
				xtype:'actioncolumn',
				text: 'Acciones',
				width:75,
				align:'center',
				id: 'accionesUsuariosID',
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
					action: 'edit',
					style:'margin-left:5px',
					tooltip:'Editar',
				}
				,{
					icon: 'public/images/delete.png',
					action: 'delete',
					style:'margin-left:5px',
					tooltip: 'Eliminar',
					getClass: function(value,metadata,record){
						var estado = record.get('estado');
						  if (estado == 0 ) {
							return 'x-hide-display';
							} else {
							return '';
							}
						
					},
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


