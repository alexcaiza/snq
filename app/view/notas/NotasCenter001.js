Ext.define('LoginAppDemo.view.notas.NotasCenter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.notasCenter',
    //title: 'Notas',
    itemId: 'notasCenterID',
    id: 'notasCenterID',
	layout: 'fit',
	//bodyPadding: 2,
	items: [
	{
		xtype: 'grid',
		title: 'Notas estudiantes',
		id: 'gridNotasID',
		store: 'NotasStore',
		//multiSelect: true,
		//stateful: true,
		//forceFit: true,
		loadMask: true,
		stateId: 'stateGridARC',
		//cls: 'custom-grid',
		autoScroll: true,
		columnLines: true,
		dockedItems: [{
			xtype: 'pagingtoolbar',
			displayInfo: true,
			displayMsg: 'Registros {0} - {1} de {2}',
			emptyMsg: 'No existe registros',
			store:'NotasStore',
			dock: 'bottom'
		}],
		viewConfig:{ 
			emptyText: '<div class="center-table">No se encontraron registros al realizar la busqueda.!</div>',
			getRowClass: function(record, index) {
				return ((index % 2) == 0) ? 'later' : 'now'
			},
			stripeRows: true,
		},
		selModel: {
            selType: 'cellmodel'
        },
		columns: [
			{ 
				text: 'No',  
				dataIndex: 'numrow', 
				width: 25, 
				cls: 'gridTitle0',
				locked   : true,
				menuDisabled: true,
			},
			{ 
				text: 'Cedula', 
				dataIndex: 'cedula', 
				width: 75, 
				tdCls: 'custom-column', 
				locked   : true, 
				cls: 'gridTitle0',
				menuDisabled: true,
			},
			{ 
				text: 'Nombre', 
				dataIndex: 'nombrecompleto', 
				width: 175, 
				locked   : true,
				cls: 'gridTitle0',
				menuDisabled: true,
			},
			{ 
				text: 'Quimestre No 1',
				//tdCls: 'gridTitle',
				cls: 'gridTitle1',
				columns: [
					{ 
						text: 'Parcial1',
						cls: 'gridTitle2',
						columns: [
							{ 
								text: 'N1',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2', 
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3', 
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					{ 
						text: 'Parcial2',
						cls: 'gridTitle2',
						columns: [
							{ 
								text: 'N1',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P', 
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					{ 
						text: 'Parcial3',
						cls: 'gridTitle2',
						columns: [
							{ 
								text: 'N1',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P',
								cls: 'gridTitle3',
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					
				],
			},
			
			{ 
				text: 'Quimestre No 1',
				columns: [
					{ 
						text: 'Parcial1',  
						columns: [
							{ 
								text: 'N1',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					{ 
						text: 'Parcial2',  
						columns: [
							{ 
								text: 'N1',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					{ 
						text: 'Parcial3',  
						columns: [
							{ 
								text: 'N1',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N2',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N3',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N4',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'N5',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
							{ 
								text: 'P',  
								width: 50,
								dataIndex: 'nota2',	
								editor: {
									xtype: 'textfield',
								}
							},
						]
					},
					
				],
			},
			
			{ text: 'P', dataIndex: 'promedio', width: 75, },
			{ text: 'Supletorio', dataIndex: 'supletorio', width: 75},
			
		],
		plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit : 1,
				pluginId: 'cellplugin',
				listeners : {
					scope: this,
					// put listeners here
					beforeedit: function(editor,e,eOpts) {
						console.log('method beforeedit');
						console.log(e.value);
					},
					edit: function(editor, e, eOpts) {
						console.log('method edit');
						console.log(e.value);
					},
					validateedit: function(editor, e, eOpts) {
						console.log('method validateedit');
						console.log(e.value);
					},
					specialkey: function(field, e) {
						console.log('method specialkey');
						if (e.getKey() == e.ENTER) {
							var grid = this.up('#gridPanel'); //and access it like this
							console.log(grid);
						}
					}
				},
            })
        ],
		
		/*
		listeners: { 
			itemclick:function( grid, record, item, index, event) {            
				console.log(index);                       
			},
		},
		*/
	}
	]
        
});


