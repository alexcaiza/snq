Ext.define('LoginAppDemo.view.cursos.CursosCenter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cursosCenter',
    //title: 'Usuarios',
    itemId: 'cursosCenter',
    id: 'cursosCenterID',
    //collapsible: true,
	layout: 'fit',
	//margins: '5 5 0 0',
	bodyPadding: 2,
	items: [
	{
		xtype: 'grid',
		title: 'Cursos',
		itemId: 'gridCursosID',
		id: 'gridCursosID',
		store: 'CursosStore',
		layout: 'fit',
		/*
		dockedItems: [{
			xtype: 'pagingtoolbar',
			displayInfo: true,
			displayMsg: 'Registros {0} - {1} de {2}',
			emptyMsg: 'No existe registros',
			store:'AsistenciaStore',
			dock: 'bottom'
		}],
		*/
		viewConfig:{ 
			emptyText: '<div class="center-table">No se encontraron registros al realizar la busqueda.!</div>',
			
			getRowClass: function(record, index) {
				return ((index % 2) == 0) ? 'later' : 'now'
			},
		},
		header: {
			titlePosition: 0,
			items: [
			{
				xtype: 'button',
				//text: 'Export excel',
				iconCls: 'excel_exports',
				icon   : 'images/excel_exports.png',
				scale   : 'small',
				handler: function(b, e) {
					b.up('grid').downloadExcelXml();
				}
			}, {
				xtype: 'button',
				//text: 'Export excel',
				iconCls: 'pdf_exports',
				icon   : 'images/pdf_exports.png',
				scale   : 'small',
				itemId : 'btnLogasistenciaPDF',
				/*
				handler: function(b, e) {
					console.log();
					//b.up('grid').downloadExcelXml();
				}
				*/
			}
			]
		},
		
		//selModel: Ext.create('Ext.selection.CheckboxModel'),
		columns: [
			{ text: 'No',  dataIndex: 'numrow', width: 50 },
			{ text: 'Codigo',  dataIndex: 'codigocurso', width: 50, tdCls: 'custom-column', },
			{ text: 'Curso', dataIndex: 'nombrecurso', flex: 2  },
			{ text: 'Paralelo', dataIndex: 'nombreparalelo', flex: 2 },
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
			{
				xtype:'actioncolumn',
				text: 'Acciones',
				width:75,
				align:'center',
				id: 'accionesCursosID',
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
		],
	}
	],
        
});


