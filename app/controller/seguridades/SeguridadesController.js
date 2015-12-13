Ext.define('LoginAppDemo.controller.seguridades.SeguridadesController', {
    extend: 'Ext.app.Controller',
    views: [
        'seguridades.UsuariosBusqueda',
		'seguridades.UsuariosCenter', 
		
    ],
    init: function() {
        console.log('Initialized Contratos Controller! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },			
			'usuariosBusqueda button[action=search]' : {
				click: this.buscarUsuarios
			},
			'usuariosBusqueda textfield' : {
				specialkey: this.buscarUsuariosKeyPress,
            },
			'#gridUsuariosID' : {
                itemdblclick: this.seleccionarUsuario,
            },
			'#gridUsuariosID actioncolumn#accionesUsuariosID' : {
                click: this.onActionGridUsuarios
            },
			'#gridRolesID' : {
                itemdblclick: this.seleccionarRol,
            },
			'#gridRolesID actioncolumn#accionesRolesID' : {
                click: this.onActionGridRoles
            },
			'#gridOpcionesID' : {
                itemdblclick: this.seleccionarOpcion,
            },
			'#gridOpcionesID actioncolumn#accionesOpcionesID' : {
                click: this.onActionGridOpciones
            },
			'usuariosEdit button[action=save]' : {
				click: this.guardarUsuarioRoles
			},
			'rolesBusqueda button[action=search]' : {
				click: this.buscarRoles
			},
			'rolesEdit button[action=save]' : {
				click: this.guardarRolOpciones
			},
			'rolesEdit button[action=update]' : {
				click: this.actualizarRolOpciones
			},
			'rolesToolbar button[action=new]' : {
				click: this.nuevoRol
			},
			'opcionesBusqueda button[action=search]' : {
				click: this.buscarOpciones
			},
			'opcionesEdit button[action=update]' : {
				click: this.actualizarOpcion
			},
			'opcionesEdit button[action=save]' : {
				click: this.guardarOpcion
			},
			'opcionesToolbar button[action=new]' : {
				click: this.nuevaOpcion
			},
			
			
        });
    },
	
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
	
	buscarUsuariosKeyPress: function(textfield, event, options) {
		console.log('Keys textfield - buscarUsuariosKeyPress() method');
		if(event.getKey() == event.ENTER) {
			button = Ext.ComponentQuery.query('usuariosBusqueda #btnSearchUsuarios')[0];
			button.fireEvent('click', button);
		}
	}, 
	
	buscarUsuarios: function(button, e, eOpts) {
		console.log('The method buscarUsuarios()');
		var form = button.up('form').getForm();
		var valuesForm = form.getValues();
		console.log('valuesForm: '); console.log(valuesForm);
		if (form.isValid()) {
			form.submit({
				waitTitle: 'Procesando.',
				waitMsg: 'Procesando.',
				params: {
					params: Ext.encode(valuesForm)
				},
				success: function(form, action) {
					var grid = Ext.getCmp('gridUsuariosID');
					if (grid) {
						if (grid.getStore()) {
							var store = Ext.create("LoginAppDemo.store.UsuariosStore");
							store.loadData(action.result.usuarios);
							//grid.getView().bindStore(store);
							grid.reconfigure(store);
						}
					}								   
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.result.mensaje);
				}
			});
		}
	},
	
	onActionGridUsuarios: function(grid,cell,row,col,e){
		console.log('The grid onActionGridUsuarios() method');
		
		var record = grid.getStore().getAt(row);
		
		var action = e.target.getAttribute('class');
		
		me = this;
		
		if (action.indexOf("x-action-col-0") != -1) {
			
			me.editarUsuario(grid, record, row);
		   
	   } else if (action.indexOf("x-action-col-1") != -1) {
			console.log('You chose to do Eliminar to ' + record.get('codigousuario') + ' ' + record.get('nombrecompleto'));
			
			me.eliminarUsuario(grid, record, row);	   
	   }
	},
	
    seleccionarUsuario: function(grid, record, item, index, e, eOpts) {
        me = this;
		me.editarUsuario(grid, record, index);
    },
	
	eliminarUsuario: function(grid, record, index) {
		msg = 'Desea eliminar el registro: ' + record.get('username');
        Ext.Msg.confirm('Confirmacion', msg, function(btn) {
			if (btn == 'yes') {
				values = {
					codigousuario: record.get('codigousuario'),
					accion: 'eliminar_usuario',
					estado : '0',
				};
			
				Ext.Ajax.request({
					url: 'php/seguridades/crudUsuario.php',
					params: {
						params: Ext.encode(values)
					},
					success: function(response) {								
						var button = Ext.getCmp('btnSearchUsuarios');
						button.fireEvent('click', button);
						Ext.Msg.alert("Informacion", "Los datos se eliminaron correctamente.");
					},
					failure : function(response) {
						Ext.Msg.alert("Error", "Error al eliminar los datos.");
					}
				});						
			} else  if (btn == 'no') {
				console.log('Se cancelo la eliminacion.');
			}
		});
    },
	
	editarUsuario: function(grid, record, index) {
		console.log('The grid itemdblclick ' + index);
        console.log('Double clicked on ' + record.get('codigousuario') + ' ' + record.get('nombrecompleto') + ' ' + record.get('codigoempleado')  + ' ' + record.get('cedula'));
		
		var view = Ext.widget('usuariosEdit');
		
		var formUsuariosEdit = Ext.getCmp('formUsuariosEdit');
		var valuesUsuariosEdit = formUsuariosEdit.getValues();
		console.log(valuesUsuariosEdit);
		
		if (formUsuariosEdit) {
			formUsuariosEdit.loadRecord(record);
		}
		
		txt = Ext.ComponentQuery.query('usuariosEdit textfield[name=cedula]')[0];
		txt.setDisabled(true);
		txt = Ext.ComponentQuery.query('usuariosEdit textfield[name=nombres]')[0];
		txt.setDisabled(true);
		txt = Ext.ComponentQuery.query('usuariosEdit textfield[name=apellidos]')[0];
		txt.setDisabled(true);
		
		
		//busca los roles y los roles del usuario
		values = {};
		values.accion = 'buscar';
		values.codigoempleado = record.get('codigoempleado');
		values.codigousuario = record.get('codigousuario');
		values.tipoBusqueda = 'roles';
		
		Ext.Ajax.request({
			url: 'php/seguridades/buscarUsuarioRoles.php',
			method:'POST',
			params: {
				params: Ext.encode(values)
			},
			success: function(response) {
				var json = Ext.decode(response.responseText);
				console.log(json);
				if (json.roles != null) {
					var grid = Ext.getCmp('gridUsuarioRolesID');
					if (grid) {
						var store = Ext.create("LoginAppDemo.store.RolesStore");
						if (grid.getStore()) {												
							store.loadData(json.roles);
							grid.reconfigure(store);							
						}
						//Selecciona solo los roles que tiene asignado el usuario
						if (json.usuarioRoles.length){
							for (var i = 0; i < json.usuarioRoles.length; i++){
								for (var j = 0; j < json.roles.length; j++){
									var rec = store.getById(json.roles[j].codigorol);
									if (rec) {
										if (rec.data.codigorol == json.usuarioRoles[i].codigorol){
											grid.getSelectionModel().select(j, true);
										}
									}
								}
							}
						}						
					}
				} else {
					Ext.Msg.alert("Error", "No existe roles actualmente configurados.");
				}
			},		
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al realizar la busqueda de roles.");
			}
		});
	},
	
	guardarUsuarioRoles: function(button, e, eOpts) {
		console.log('The method guardarUsuarioRoles()');
		
		var formUsuariosEdit = Ext.getCmp('formUsuariosEdit');
		valuesUsuario = formUsuariosEdit.getValues();
		console.log(valuesUsuario);
		
		//valida los campos de la clave sean iguales
		if (valuesUsuario.clave != '' || valuesUsuario.clave2 != '') {
			if (valuesUsuario.clave != valuesUsuario.clave2) {
				message.addMessage('Ingrese los datos de la clave correctamente.', message.getIconClsWarn());
				return;
			}
		}
		
		var grid = Ext.getCmp('gridUsuarioRolesID');
		var selection= grid.getSelectionModel(); 
		items=[];
		for(i=0;i < grid.store.getCount();i++){  
			if(selection.isSelected(i)){
				items.push({ 
				   "codigorol" : grid.store.getAt(i).data.codigorol,
				   "codigousuario" : valuesUsuario.codigousuario,
				});
				console.log('codigorol: ' + grid.store.getAt(i).data.codigorol);
			}
		}
		console.log(items);
		
		Ext.Ajax.request({
			url: 'php/seguridades/guardarUsuarioRoles.php',
			method:'POST',			
			params: {
				usuarioRoles: Ext.encode(items),
				usuario: Ext.encode(valuesUsuario),
			},
			
			success: function(response) {
				//Ext.Msg.alert("Informacion", "Los datos se actualizaron correctamente.");
				var obj = Ext.decode(response.responseText);
				console.log(obj);
				winUsuariosEdit = Ext.getCmp('usuariosEditID');
				winUsuariosEdit.close();
				Ext.Msg.alert("Mensaje", "Los datos del usuario se registraron correctamente.");
				
				
			},
			
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al guardar los datos.");
			}
    	});	
	},
	
	buscarRoles: function(button, e, eOpts) {
		console.log('The method buscarRoles()');
		var form = button.up('form').getForm();
		var valuesForm = form.getValues();
		console.log('valuesForm: '); console.log(valuesForm);
		if (form.isValid()) {
			form.submit({
				waitTitle: 'Procesando.',
				waitMsg: 'Procesando.',
				params: {
					params: Ext.encode(valuesForm)
				},
				success: function(form, action) {
					var grid = Ext.getCmp('gridRolesID');
					if (grid) {
						if (grid.getStore()) {
							var store = Ext.create("LoginAppDemo.store.RolesStore");
							store.loadData(action.result.roles);
							grid.reconfigure(store);
						}
					}								   
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.result.mensaje);
				}
			});
		}
	},
	
	nuevoRol: function(button, e, eOpts) {
		console.log('The nuevoRol() method');
		
		var record = Ext.create("LoginAppDemo.model.Rol");
		
        view = Ext.widget('rolesEdit');
        view.down('form').loadRecord(record);

        //Activa y desactiva los botones de guardar y actualizar
        btnRolSaveID = Ext.getCmp('btnRolSaveID');
		btnRolUpdateID = Ext.getCmp('btnRolUpdateID');
        btnRolSaveID.show();
		btnRolUpdateID.hide();
		
		values = {};
		values.accion = 'buscar';
		values.codigorol = null;
		
		Ext.Ajax.request({
			url: 'php/seguridades/buscarRolOpciones.php',
			method:'POST',
			params: {
				params: Ext.encode(values)
			},
			success: function(response) {
				var json = Ext.decode(response.responseText);
				if (json.opciones != null) {
					var grid = Ext.getCmp('gridPermisosID');
					if (grid) {
						store = Ext.create("LoginAppDemo.store.OpcionesStore");
						store.loadData(json.opciones);
						grid.reconfigure(store);							
					}
				} else {
					Ext.Msg.alert("Error", "No existe opciones.");
				}
			},		
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al realizar la busqueda de las opciones.");
			}
		});		
	},
    
	seleccionarRol: function(grid, record, item, index, e, eOpts) {
		console.log('The grid itemdblclick ' + index);
        console.log('Double clicked on ' + record.get('codigorol') + ' ' + record.get('nombre') + ' ' + record.get('descripcion')  + ' ' + record.get('estado'));
		
		view = Ext.widget('rolesEdit');
		
		formRolesEditID = Ext.getCmp('formRolesEditID');
		formRolesEditID.loadRecord(record);
		
		//Activa y desactiva los botones de guardar y actualizar
        btnRolSaveID = Ext.getCmp('btnRolSaveID');
		btnRolUpdateID = Ext.getCmp('btnRolUpdateID');
        btnRolSaveID.hide();
		btnRolUpdateID.show();
		
		values = formRolesEditID.getValues();
		values.accion = 'buscarOpciones';
		
		Ext.Ajax.request({
			url: 'php/seguridades/buscarRolOpciones.php',
			method:'POST',
			params: {
				params: Ext.encode(values)
			},
			success: function(response) {
				var json = Ext.decode(response.responseText);
				if (json.opciones != null) {
					var grid = Ext.getCmp('gridPermisosID');
					if (grid) {
						store = Ext.create("LoginAppDemo.store.OpcionesStore");
						store.loadData(json.opciones);
						grid.reconfigure(store);							
						
						//Selecciona solo las opciones que tiene asignado el rol
						if (json.rolOpciones.length){
							for (var i = 0; i < json.rolOpciones.length; i++){
								for (var j = 0; j < json.opciones.length; j++){
									var rec = store.getById(json.opciones[j].codigoopcion);
									if (rec) {
										if (rec.data.codigoopcion == json.rolOpciones[i].codigoopcion){
											grid.getSelectionModel().select(j, true);
										}
									}
								}
							}
						}						
					}
				} else {
					Ext.Msg.alert("Error", "No existe opciones.");
				}
			},		
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al realizar la busqueda del menu.");
			}
		});
	},
	
	guardarRolOpciones: function(button, e, eOpts) {
		console.log('The method guardarRolOpciones()');
		
		formRolesEditID = Ext.getCmp('formRolesEditID');
		valuesRol = formRolesEditID.getValues();
		
		var grid = Ext.getCmp('gridPermisosID');
		var selection= grid.getSelectionModel(); 
		items=[];
		for(i=0;i < grid.store.getCount();i++){  
			if(selection.isSelected(i)){
				items.push({ 
				   "codigoopcion" : grid.store.getAt(i).data.codigoopcion,
				   "codigorol" : null,
				});
			}
		}
		
		Ext.Ajax.request({
			url: 'php/seguridades/guardarRolOpciones.php',
			method:'POST',			
			params: {
				rol: Ext.encode(valuesRol),
				rolOpciones: Ext.encode(items),
				params : Ext.encode({"accion" : 'save'}),
			},
			
			success: function(response) {
				var obj = Ext.decode(response.responseText);
				console.log(obj);
				winRolesEditID = Ext.getCmp('rolesEditID');
				winRolesEditID.close();
				Ext.Msg.alert("Mensaje", "Los datos se registraron correctamente.");
			},
			
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al guardar los datos.");
			}
    	});
	},
	
	actualizarRolOpciones: function(button, e, eOpts) {
		console.log('The method actualizarRolOpciones()');
		
		formRolesEditID = Ext.getCmp('formRolesEditID');
		valuesRol = formRolesEditID.getValues();
		
		var grid = Ext.getCmp('gridPermisosID');
		var selection= grid.getSelectionModel(); 
		items=[];
		for(i=0;i < grid.store.getCount();i++){  
			if(selection.isSelected(i)){
				items.push({ 
				   "codigoopcion" : grid.store.getAt(i).data.codigoopcion,
				   "codigorol" : valuesRol.codigorol,
				});
			}
		}
		
		Ext.Ajax.request({
			url: 'php/seguridades/guardarRolOpciones.php',
			method:'POST',			
			params: {
				rol: Ext.encode(valuesRol),
				rolOpciones: Ext.encode(items),
				params : Ext.encode({"accion" : 'update'}),
			},
			
			success: function(response) {
				var obj = Ext.decode(response.responseText);
				console.log(obj);
				winRolesEditID = Ext.getCmp('rolesEditID');
				winRolesEditID.close();
				Ext.Msg.alert("Mensaje", "Los datos se actualizaron correctamente.");
				
				button = Ext.ComponentQuery.query('rolesBusqueda #btnSearchRolesID')[0];
				button.fireEvent('click', button);
			},
			
			failure : function(response) {
				Ext.Msg.alert("Error", "Error al actualizar los datos.");
			}
    	});	
	},
	
	buscarOpciones: function(button, e, eOpts) {
		console.log('The method buscarOpciones()');
		var form = button.up('form').getForm();
		var valuesForm = form.getValues();
		console.log('valuesForm: '); console.log(valuesForm);
		if (form.isValid()) {
			form.submit({
				waitTitle: 'Procesando.',
				waitMsg: 'Procesando.',
				params: {
					params: Ext.encode(valuesForm)
				},
				success: function(form, action) {
					var grid = Ext.getCmp('gridOpcionesID');
					if (grid) {
						if (grid.getStore()) {
							var store = Ext.create("LoginAppDemo.store.OpcionesStore");
							store.loadData(action.result.opciones);
							grid.reconfigure(store);
						}
					}								   
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.result.mensaje);
				}
			});
		}
	},
	
	nuevaOpcion: function(button, e, eOpts) {
        console.log('The method nuevaOpcion()');
		
		var record = Ext.create("LoginAppDemo.model.Opcion");
		
        view = Ext.widget('opcionesEdit');
        view.down('form').loadRecord(record);

        //Activa y desactiva los botones de guardar y actualizar
        var btnOpcionSaveID = Ext.getCmp('btnOpcionSaveID');
        btnOpcionSaveID.show();
		
		var btnOpcionUpdateID = Ext.getCmp('btnOpcionUpdateID');
        btnOpcionUpdateID.hide();
		
		//var codigoempleadoField = Ext.getCmp('codigoempleadoID');
        //codigoempleadoField.hide();

    },
	
	seleccionarOpcion: function(grid, record, item, index, e, eOpts) {
		console.log('The grid itemdblclick ' + index);
        console.log('Double clicked on ' + record.get('codigoopcion') + ' ' + record.get('nombre') + ' ' + record.get('descripcion')  + ' ' + record.get('estado'));
		
		var view = Ext.widget('opcionesEdit');
		
		formOpcionesEdit = Ext.getCmp('formOpcionesEditID');
		formOpcionesEdit.loadRecord(record);

		//Activa y desactiva los botones de guardar y actualizar
        var btnOpcionSave = Ext.getCmp('btnOpcionSaveID');
        btnOpcionSave.hide();
		
		var btnOpcionUpdate = Ext.getCmp('btnOpcionUpdateID');
        btnOpcionUpdate.show();   
	},
	
	guardarOpcion: function(button, e, eOpts) {
		console.log('The method guardarOpcion()');
		
		var form = Ext.getCmp('formOpcionesEditID'); 
		var valuesForm = form.getValues();
		
		valuesForm.accion = 'save';
		
		if (form.isValid()) {
			Ext.Ajax.request({
				url: 'php/seguridades/crudOpcion.php',
				method:'POST',			
				params: {
					params: Ext.encode(valuesForm)
				},
				
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					console.log(obj);
					winOpcionesEdit = Ext.getCmp('opcionesEditID');
					winOpcionesEdit.close();
					Ext.Msg.alert("Mensaje", "Los datos se registraron correctamente.");
				},
				
				failure : function(response) {
					Ext.Msg.alert("Error", "Error al registrar los datos.");
				}
			});	
		}
	},
	
	actualizarOpcion: function(button, e, eOpts) {
		console.log('The method actualizarOpcion()');
		
		var form = Ext.getCmp('formOpcionesEditID'); 
		var valuesForm = form.getValues();
		
		valuesForm.accion = 'update';
		console.log('valuesForm: '); console.log(valuesForm);
		
		if (form.isValid()) {
			Ext.Ajax.request({
				url: 'php/seguridades/crudOpcion.php',
				method:'POST',			
				params: {
					params: Ext.encode(valuesForm)
				},
				
				success: function(response) {
					var obj = Ext.decode(response.responseText);
					console.log(obj);
					winOpcionesEdit = Ext.getCmp('opcionesEditID');
					winOpcionesEdit.close();
					Ext.Msg.alert("Mensaje", "Los datos se actualizaron correctamente.");
				},
				
				failure : function(response) {
					Ext.Msg.alert("Error", "Error al actualizar los datos.");
				}
			});	
		}
	},
	
	onActionGridOpciones: function(grid,cell,row,col,e){
		console.log('The grid onActionGridOpciones() method');
		
		var record = grid.getStore().getAt(row);
		var action = e.target.getAttribute('class');
		
		if (action.indexOf("x-action-col-0") != -1) {
		
			console.log('You chose to do Editar to ' + record.get('codigoopcion') + ' ' +  record.get('nombre')); //where id is the name of a dataIndex
		   
			var view = Ext.widget('opcionesEdit');
	
			formOpcionesEdit = Ext.getCmp('formOpcionesEditID');
			formOpcionesEdit.loadRecord(record);

			//Activa y desactiva los botones de guardar y actualizar
			var btnOpcionSave = Ext.getCmp('btnOpcionSaveID');
			btnOpcionSave.hide();
			
			var btnOpcionUpdate = Ext.getCmp('btnOpcionUpdateID');
			btnOpcionUpdate.show();
		   
	   } else if (action.indexOf("x-action-col-1") != -1) {
			console.log('You chose to do Eliminar to ' + record.get('codigoopcion') + ' ' +  record.get('nombre'));
			
			msg = 'Desea eliminar el registro: ' + record.get('nombre');
			
			Ext.Msg.confirm('Confirmacion', msg, function(btn) {
				if (btn == 'yes') {
					values = {
						codigoopcion: record.get('codigoopcion'),
						accion: 'disabled',
						estado : '0',
					};
				
					Ext.Ajax.request({
						url: 'php/seguridades/crudOpcion.php',
						params: {
							params: Ext.encode(values)
						},
						success: function(response) {								
							var button = Ext.getCmp('btnSearchOpcionesID');
							button.fireEvent('click', button);
							Ext.Msg.alert("Informacion", "Los datos se eliminaron correctamente.");
						},
						failure : function(response) {
							Ext.Msg.alert("Error", "Error al eliminar los datos.");
						}
					});						
				} else  if (btn == 'no') {
					console.log('Se cancelo la eliminacion.');
				}
			});		   
	   }
	},
	
	onActionGridRoles: function(grid,cell,row,col,e){
		console.log('The grid onActionGridRoles() method');
		
		var record = grid.getStore().getAt(row);
		var action = e.target.getAttribute('class');
		
		if (action.indexOf("x-action-col-0") != -1) {
		
			console.log('You chose to do Editar to ' + record.get('codigorol') + ' ' +  record.get('nombre') + ' ' +  record.get('descripcion')); //where id is the name of a dataIndex
		   
			view = Ext.widget('rolesEdit');
		
			formRolesEditID = Ext.getCmp('formRolesEditID');
			formRolesEditID.loadRecord(record);
			
			//Activa y desactiva los botones de guardar y actualizar
			btnRolSaveID = Ext.getCmp('btnRolSaveID');
			btnRolUpdateID = Ext.getCmp('btnRolUpdateID');
			btnRolSaveID.hide();
			btnRolUpdateID.show();
			
			values = formRolesEditID.getValues();
			values.accion = 'buscarRoles';
			
			Ext.Ajax.request({
				url: 'php/seguridades/buscarRolOpciones.php',
				method:'POST',
				params: {
					params: Ext.encode(values)
				},
				success: function(response) {
					var json = Ext.decode(response.responseText);
					if (json.opciones != null) {
						var grid = Ext.getCmp('gridPermisosID');
						if (grid) {
							store = Ext.create("LoginAppDemo.store.OpcionesStore");
							store.loadData(json.opciones);
							grid.reconfigure(store);							
							
							//Selecciona solo las opciones que tiene asignado el rol
							if (json.rolOpciones.length){
								for (var i = 0; i < json.rolOpciones.length; i++){
									for (var j = 0; j < json.opciones.length; j++){
										var rec = store.getById(json.opciones[j].codigoopcion);
										if (rec) {
											if (rec.data.codigoopcion == json.rolOpciones[i].codigoopcion){
												grid.getSelectionModel().select(j, true);
											}
										}
									}
								}
							}						
						}
					} else {
						Ext.Msg.alert("Error", "No existe opciones.");
					}
				},		
				failure : function(response) {
					Ext.Msg.alert("Error", "Error al realizar la busqueda del menu.");
				}
			});
		   
	   } else if (action.indexOf("x-action-col-1") != -1) {
			console.log('You chose to do Eliminar to ' + record.get('codigorol') + ' ' +  record.get('nombre'));
			
			msg = 'Desea eliminar el registro: ' + record.get('nombre');
			
			Ext.Msg.confirm('Confirmacion', msg, function(btn) {
				if (btn == 'yes') {
					values = {
						codigorol: record.get('codigorol'),
						accion: 'disabled',
						estado : '0',
					};
				
					Ext.Ajax.request({
						url: 'php/seguridades/guardarRolOpciones.php',
						params: {
							params: Ext.encode(values)
						},
						success: function(response) {								
							var button = Ext.getCmp('btnSearchRolesID');
							button.fireEvent('click', button);
							Ext.Msg.alert("Informacion", "Los datos se eliminaron correctamente.");
						},
						failure : function(response) {
							Ext.Msg.alert("Error", "Error al eliminar los datos.");
						}
					});						
				} else  if (btn == 'no') {
					console.log('Se cancelo la eliminacion.');
				}
			});
		   
	   }
	},
	
	
	
	
});


