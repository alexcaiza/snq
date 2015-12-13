Ext.define('LoginAppDemo.controller.notas.NotasController', {
    extend: 'Ext.app.Controller',
    views: [
        'notas.NotasBusqueda',
		'notas.NotasCenter', 
		'notas.NotaParcial', 
		'notas.NotaParcialTB',
		'LoginAppDemo.view.notas.ExamenQuimestreView',
		'LoginAppDemo.view.notas.ExamenQuimestreTBView',
    ],
	stores: [
        'NotasStore',
		'TipoNotaStore',
		'ComboParcialStore',
		'ComboCursosStore',
		'ComboTipoCurso',
		'ComboTipoNota',
		'ExamenQuimestreStore',
		'ComboPeriodoConfiguracionStore',
		'ComboPeriodoConfiguracionStoreN1',
		'ComboPeriodoConfiguracionStoreN2',
    ],
    init: function() {
        console.log('Initialized NotasController! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
			'notasBusqueda combo[name=nivel1]': {
				render: this.renderTiposNotaNivel1,
				select: this.selectTiposNotaNivel1,
				change: this.changeTiposNotaNivel1,
				beforequery: this.beforequeryTiposNotaNivel1,
			},
			'notasBusqueda combo[name=nivel2]': {
				beforequery: this.beforequeryTiposNotaNivel2,
			},
			'notasBusqueda button[action=search]' : {
				click: this.searchNotas
			},
			'notasBusqueda button[action=searchTN]' : {
				click: this.searchNotas2
			},
			'notasBusqueda button[action=search3]' : {
				click: this.searchNotas3
			},
        });
    },
	
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
	
	beforequeryTiposNotaNivel1: function(queryEvent, eOpts) {
		console.log('combo beforequery in beforequeryTiposNotaNivel1');
		
		var values = {};
		values.nivel = '1';
		values.codigotiponotapadre = null;
		
		queryEvent.combo.store.proxy.extraParams = {
			params: Ext.encode(values),
		}
	},
	
	beforequeryTiposNotaNivel2: function(queryEvent, eOpts) {
		console.log('combo beforequery in beforequeryTiposNotaNivel2');
		
		var comboN1 = Ext.getCmp('nivel1');
		
		var values = {};
		//values.nivel = '1';
		values.codigotiponotapadre = comboN1.getValue();
		
		queryEvent.combo.store.proxy.extraParams = {
			params: Ext.encode(values),
		}
	},
	
	renderTiposNotaNivel1: function(combo, record, index) {
      console.log('The renderTiposNotaNivel1 method');
	  console.log(combo);
	  console.log(record);
	  console.log(index);
    },
	
	selectTiposNotaNivel1: function(combo, record, index) {
      console.log('The selectTiposNotaNivel1 method');
	  console.log(combo);
	  console.log(record);
	  console.log(index);
    },
	
	changeTiposNotaNivel1: function (field, newValue, oldValue) {
		console.log('The changeTiposNotaNivel1 method');
		console.log(newValue);
	  
		var comboNivel2 = Ext.getCmp('nivel2');
		console.log(comboNivel2);
		comboNivel2.setValue('');
		
		var values = {};
		//values.nivel = '2';
		values.codigotiponotapadre = newValue;
		
		comboNivel2.getStore().loadPage(1 ,{
			params: {
				page: '1',
				start: '0',
				params: Ext.encode(values),
			}
		});
	},
	
	searchNotas2: function(button, e, eOpts) {
		console.log('The searchNotas2() method.');
		
		var me = this;
		
		panel = Ext.getCmp('panelCenterID');
		panel.removeAll();
		panel.doLayout();
		
		form = Ext.getCmp('notasBusquedaID');
		var values = form.getValues();
		
		values.codigotiponota = values.nivel2;
		values.codigotiponotapadre = values.nivel2;
		
		console.log('values:');
		console.log(values);
		
		var tiponota = me.buscarTipoNota(values);
		
		console.log('tiponota');
		console.log(tiponota);
	
		var grid = Ext.create(tiponota.componente,{ 
			make: "AlexCaiza",
			data: values,
		});
		
		dstore = grid.getStore();
		dstore.loadPage(1, {
			params: {
				page: '1',
				start: '0',
				params: Ext.encode(values),
			},
			callback: function(records, operation, success) {
				console.log('The method callback(...)');
				if (success == true) {
					console.log('success search');
				}
			}
		});
		
		console.log('grid:');
		console.log(grid);
		
		grid.drive();
		console.log("grid.make: " + grid.getMake());
		console.log("grid.data: " + grid.getData());
		console.log(grid.getData());
		
		panel.add(grid);
		
		//Ext.getCmp(periodoconfiguracion.componenteid).setText('NOTA: ' + tiponota.descripcion + ' >> PARCIAL: ' +  parcial.descripcion);
		
	},
	
	searchNotas3: function(button, e, eOpts) {
		console.log('The searchNotas3() method.');
		
		console.log('INI');
		
		var me = this;
		
		var comboN2 = Ext.getCmp('nivel2');
		
		var form = Ext.getCmp('notasBusquedaID');
		var values = form.getValues();
		values.codigotiponota = values.nivel1;
		values.codigotiponotapadre = values.nivel2;
		
		//Busca los tipos de nota para armar las columnas de la tabla
		var tiposNota = new Array();
		tiposNota.push({'columna': 'numrow', 'descripcion': 'No'});
		tiposNota.push({'columna': 'cedula', 'descripcion': 'Cedula'});
		tiposNota.push({'columna': 'nombrecompleto', 'descripcion': 'Nombre'});
		
		var tiposNotaBD = me.buscarTiposNota(values);
		
		for (i = 0; i < tiposNotaBD.length; i++) { 
			tiposNota.push(tiposNotaBD[i]);
		}
		
		var columnas = me.armarColumnas(tiposNota);
		
		var notas = me.consultarNotas();
		
		var grid = me.crearGridNotas();
		
		grid.reconfigure(me.createStore(columnas, notas), me.createColumns(columnas, tiposNota));
		
		dstore = grid.getStore();
		dstore.loadPage(1, {
			params: {
				page: '1',
				start: '0',
				params: Ext.encode(values),
			},
			callback: function(records, operation, success) {
				console.log('The method callback(...)');
				if (success == true) {
					console.log('success search');
				}
			}
		});
		
		var panel = Ext.getCmp('panelCenterID');
		panel.removeAll();
		panel.doLayout();
		panel.add(grid);
		
		console.log('FIN');
		
	},
	
	crearGridNotas: function() {
	
		var grid = Ext.create('Ext.grid.Panel', {
			columns: [],
			plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit: 1,
				pluginId: 'cellplugin',
				listeners: {
					'beforeedit': function(editor, ctx, eOpts) {
						console.log('beforeedit cell');
						console.log(editor);
						console.log(ctx);
						console.log(eOpts);
						
						//ctx.Grid.getStore().sync();  // Force a post with the updated data.
						/*
						var me = this;
						var allowed = !!me.isEditAllowed;
						if (!me.isEditAllowed)
							Ext.Msg.confirm('confirm', 'Are you sure you want edit?', function(btn){
								if (btn !== 'yes')
									return;
								me.isEditAllowed = true;
								me.startEditByPosition({row: e.rowIdx, column: e.colIdx});
							});
						return allowed;
						*/
						return true;
					},
					'edit': function(editor, ctx, eOpts) {
						console.log('edit cell');
						//this.isEditAllowed = false;
						
						var values = ctx.record.data;
						
						var cedula = values.cedula;
						
						ctx.grid.getStore().proxy.extraParams.notasestudiante = Ext.encode(values);
						
						var form = Ext.getCmp('notasBusquedaID');
						values = form.getValues();
						values.cedula = cedula;
						ctx.grid.getStore().proxy.extraParams.params = Ext.encode(values);
												
						ctx.grid.getStore().proxy.extraParams.columna = ctx.field;
						ctx.grid.getStore().proxy.extraParams.valornota = ctx.value;
						
						ctx.grid.getStore().sync();
					}
            }
			})],
			loadMask: true,
			stateId: 'stateGridNotasID',
			autoScroll: true,
			columnLines: true,
			forceFit: true,
			layout: 'fit',
			
		});
		
		return grid;
	},
	
	armarColumnas: function(tiposNota) {
		console.log('The method buscarDatosBusqueda()');
		
		var me = this;
		
		var columnas = me.getKeysFromJson(tiposNota);
		
		return columnas;
	},
	
	getKeysFromJson: function (columnas) {
        var keys = [];
		
        for (i = 0; i < columnas.length; i++) { 
			key = columnas[i];
			console.log('key.columna: ' + key.columna);
            keys.push(key.columna);
        }
		
        return keys;
    },
	
	createColumns: function (columnas, tiposNota) {
        //var keys = getKeysFromJson(columnas);
		var keys = columnas;
        return keys.map(function (field) {
			var tiponota = '';
			for (i = 0; i < tiposNota.length; i++) { 
				if (field == tiposNota[i].columna) {
					tiponota = tiposNota[i];
					break;
				}
			}
			
			console.log(field);
            return {
                //text: Ext.String.capitalize(tiponota.descripcion),
				text: tiponota.descripcion,
                width: 150,
                dataIndex: field,
				editor: {
					xtype: 'textfield',
					selectOnFocus: true,
				},
				menuDisabled: true,
            };
        });
    },
	
	createStore: function (columnas, datos) {
		var me = this;
        //var keys = me.getKeysFromJson(columnas);
		var keys = columnas;
        return Ext.create('Ext.data.Store', {
            fields: keys,
            //data: datos,
			//autoLoad: true,
			//autoSync: true,
			proxy: {
				type: 'ajax',
				pageParam: 'p',
				//url : 'php/notas/busqueda.php',
				api: {
					 create      : 'php/notas/actualizar-nota.php',
					 read        : 'php/notas/busqueda3.php',
					 update      : 'php/notas/actualizar-nota.php',
					 destroy     : 'php/notas/busquedaDestroy.php'
				},
				reader: {
					type: 'json',
					root: 'notas',
					totalProperty: 'totalCount',
				},
				writer: {
					 type            : 'json',
					 writeAllFields  : false,
					 rootProperty    : 'data'
				},
			},
			listeners: {
				'beforeload': function(store, options) {
					console.log('the beforeload method store');
					//form = Ext.getCmp('notasBusquedaID');
					//values = form.getValues();
					//values = Ext.encode(values)
					//store.proxy.extraParams.params = values;
				},
				'load': function(store, records, success) {
					console.log('the load method store');
					/*
					currentPage = dstore.currentPage;
					var i=1;
					dstore.each(function(record) {
						var taskID = record.data.id;
						numrow = i + ( 20 * (currentPage -1))
						record.set('numrow', numrow);
						i++;
					});
					*/
				}
			},
        });
    },
	
	buscarTipoNota: function(values) {
		console.log('The method buscarTipoNota()');
		
		values.accion = 'consultarTipoNota';
		
		var tiponota = null;
		
		Ext.Ajax.request({
			url: 'php/commons/commons.php',
			async: false,
			method:'POST',
			params: {
				params: Ext.encode(values),
			},
			success: function(response) {
				resp = Ext.decode(response.responseText);
				if (resp.tiponota != null) {
					tiponota = resp.tiponota;
				}
			},
			failure : function(response) {
				console.log("Error al realizar la busqueda.");
			}
		});
		return tiponota;
	},
	
	buscarTiposNota: function(values) {
		console.log('The method buscarTiposNota()');
		
		values.accion = 'consultarTiposNota';
		
		var tiposnota = null;
		
		Ext.Ajax.request({
			url: 'php/commons/commons.php',
			async: false,
			method:'POST',
			params: {
				params: Ext.encode(values),
			},
			success: function(response) {
				resp = Ext.decode(response.responseText);
				if (resp.tiposnota != null) {
					tiposnota = resp.tiposnota;
				}
			},
			failure : function(response) {
				console.log("Error al realizar la busqueda.");
			}
		});
		return tiposnota;
	},
	
	consultarNotas: function() {
		console.log('The method consultarNotas()');
		
		var comboN2 = Ext.getCmp('nivel2');
		
		var values = {};
		values.codigotiponotapadre = comboN2.getValue();
		values.accion = 'consultarNotas';
		
		var notas = null;
		
		Ext.Ajax.request({
			url: 'php/commons/commons.php',
			async: false,
			method:'POST',
			params: {
				params: Ext.encode(values),
			},
			success: function(response) {
				resp = Ext.decode(response.responseText);
				if (resp.notas != null) {
					notas = resp.notas;
				}
			},
			failure : function(response) {
				console.log("Error al realizar la busqueda.");
			}
		});
		return notas;
	},
	
});


