Ext.define('LoginAppDemo.view.notas.ExamenQuimestreView', {
		extend: 'Ext.grid.Panel',
		alias: 'widget.examenQuimestreView',
		id: 'gridExamenQuimestreID',
		store: 'ExamenQuimestreStore',
		loadMask: true,
		stateId: 'stateGridExamenQuimestre',
		autoScroll: true,
		columnLines: true,
		forceFit: true,
		layout: 'fit',
		config : {
			make  : '111',
			model : '222',
			data: {},
		},
		dockedItems: [
			{
				xtype: 'pagingtoolbar',
				displayInfo: true,
				displayMsg: 'Registros {0} - {1} de {2}',
				emptyMsg: 'No existe registros',
				store:'ExamenQuimestreStore',
				dock: 'bottom'
			},
			{
				dock: 'top',
				xtype: 'examenQuimestreTBView',
			},
		],
		viewConfig:{ 
			emptyText: '<div class="center-table">No se encontraron registros al realizar la busqueda.!</div>',
			getRowClass: function(record, index) {
				return ((index % 2) == 0) ? 'later' : 'now'
			},
			//stripeRows: true,
			enableTextSelection: true
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
				width: 100, 
				tdCls: 'custom-column', 
				locked   : true, 
				cls: 'gridTitle0',
				menuDisabled: true,
				field: { xtype:'textfield', allowBlank:false }
			},
			{ 
				text: 'Nombre', 
				dataIndex: 'nombrecompleto', 
				width: 275, 
				//flex: 1,
				locked   : true,
				cls: 'gridTitle0',
				menuDisabled: true,
			},
			{ 
				text: 'Parcial 1',
				cls: 'gridTitle3',
				width: 100,
				dataIndex: 'p1',	
				menuDisabled: true,
			},
			{ 
				text: 'Parcial 2', 
				cls: 'gridTitle3',
				width: 100,
				dataIndex: 'p2',	
				menuDisabled: true,
			},
			{ 
				text: 'Parcial 3', 
				cls: 'gridTitle3',
				width: 100,
				dataIndex: 'p3',
				menuDisabled: true,
			},
			{ 
				text: 'Examen', 
				cls: 'gridTitle3',
				width: 100,
				dataIndex: 'exa',
				menuDisabled: true,
				editor: {
					xtype: 'textfield',
					selectOnFocus: true,
				}
			},
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
				/*
				onSpecialKey: function(ed, field, e) {
					var grid = this.grid, sm;
					if (e.getKey() === e.TAB) {
						e.stopEvent();
						sm = grid.getSelectionModel();
						if (sm.onEditorTab) {
							sm.onEditorTab(this, e); 
						}
					}else if(e.getKey() === e.ENTER){
						e.stopEvent();
						sm = grid.getSelectionModel();
						if (sm.onEditorEnter) {
							sm.onEditorEnter(this, e); 
							//sm.onEditorTab(this, e); 
						}
					}
				}
				*/
				
				onSpecialKey: function (ed, field, e) {
					var grid = this.grid,
						nbCols = grid.columns.length - 1, //start from 0
						nbRows = grid.getStore().getTotalCount() - 1, //start from 0
						currentCol = this.context.colIdx,
						currentRow = this.context.rowIdx;

					//forward
					if (!e.shiftKey && (e.getKey() === e.ENTER || e.getKey() === e.TAB)) {
						e.stopEvent();

						//Detect next editable cell
						do {
							if (this.startEdit(currentRow, currentCol + 1))
								break;
							else {
								currentCol++;
								if (currentCol >= nbCols) {
									currentRow++;
									currentCol = -1;
								}
							}
						} while (currentRow <= nbRows);
					}
					//backward
					if (e.shiftKey && (e.getKey() === e.ENTER || e.getKey() === e.TAB)) {
						e.stopEvent();

						//Detect previous editable cell
						do {
							if (this.startEdit(currentRow, currentCol - 1))
								break;
							else {
								currentCol--;
								if (currentCol < 0) {
									currentRow--;
									currentCol = nbCols+1;
								}
							}
						} while (currentRow >=0);
					}
				}
				
            })
        ],	
		/*
		listeners: { 
			itemclick:function( grid, record, item, index, event) {            
				console.log(index);                       
			},
		},
		*/
		listeners : {
			cellclick : function(view, cell, cellIndex, record, row, rowIndex, e) {
				console.log('The method cellclick listeners grid');
				console.log(cell);
			},
			itemclick:function( grid, record, item, index, event) {
				console.log('The method itemclick listeners grid');
				console.log(index);                       
			},
		},
	
		// Define drive method
		drive: function () {
			console.log('Driving ' + this.getMake() + ' ' + this.getModel());
		},
		
		onCellModelSelect: function(cellmodel, record, row, column, eOpts) {
				console.log('The method onCellModelSelect()');
				/*an if statement is required to parse the column chosen as
				record.get() only accepts string values of the column name so
				if the columns are named "first", "second", "third", the
				following if statement applies*/

				var columnName;

				if(column === 0){
					columnName= 'first';
				}else if(column === 1){
					columnName= 'Second';
				}else if(column === 2){
					columnName= 'Third';
				}
				Ext.Msg.alert('Cell Value',record.get(columnName));
		},
});


