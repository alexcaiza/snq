Ext.define('LoginAppDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['LoginAppDemo.user.Profile'],
    views: [
		//'Usuarios',
		'LoginForm',
		'Viewport'
	],
    
    init: function(application) {
		console.log('Initialized Main1 Controller! This happens before the Application launch function is called');
        this.control({
            "loginform": {
                login: this.onLogin2,
				render: this.renderLoginform,
            },
			"usuarios": {
                login: this.onLogin
            },
			'viewport > panel': {
                render: this.onPanelRendered
            },
			'viewport': {
                render: this.onPanelRenderedViewport
            },
            'maintoolbar2 button[action=usuarios]': {
                click: this.buscarUsers
            },
			'maintoolbar2 button[action=salir]': {
                click: this.logoutHandler
            },
			'viewport #tabpanelID' : {
				tabchange: this.tabchangeTabPanel
			},
        });
    },
	
	tabchangeTabPanel: function(tabPanel, tab) {
		console.log("tabchangeTabPanel tabchange event");
		console.log(tabPanel.id + ' ' + tab.id);
		
		console.log("activeTab: " + tabPanel.getActiveTab());
		console.log(tabPanel.getActiveTab());
		
		tabID = tab.id;
		console.log('tabID: ' + tabID);
		
		if (tabID == 'asistencia2ID') {
						
		} else if (tabID == 'empleadosPanelID') {
			console.log("busqueda de empleados desde el tab.");
			Ext.onReady(function() {
				button = Ext.getCmp('btnBuscarEmpleadosID');
				button.fireEvent('click', button);
			});
		}
		
	},
	
	logoutHandler: function() {
        console.log('app.js: logoutHandler');
        //var viewport = this.getViewport();
		//console.log(viewport);
        //viewport.destroy();
        //this.getController('Login').showLogin();
		window.location.reload( true );
    },
	
	 onPanelRenderedViewport: function() {
        console.log('The viewport was rendered');
		//Ext.getCmp('passwordID').focus(true);
		Ext.onReady(function(){
			console.log('viewport onPanelRenderedViewport()');
		});
    },
	
    onPanelRendered: function() {
        console.log("The panel's viewport was rendered");
		//Ext.getCmp('passwordID').focus(true);
		Ext.onReady(function(){
			console.log('viewport onPanelRendered()');
			tabpanelID = Ext.getCmp('tabpanelID');
			console.log('tabpanelID:'); console.log(tabpanelID);
			
			console.log('LoginAppDemo.User: '); console.log(LoginAppDemo.User);
			
			Ext.getCmp('tabpanelID').doLayout();
			
		});
    },
	
	renderLoginform: function(field) {
        console.log('The renderLoginform was rendered');
		//console.log(Ext.getCmp('passwordID'));
		//Ext.getCmp('passwordID').focus(false, 500);
		//textfield.focus();
		Ext.onReady(function(){
			/*
			if (Ext.getCmp('passwordID')) {
				Ext.getCmp('passwordID').focus(false, 100);
			}
			*/
			if (Ext.getCmp('usernameLoginID')) {
				Ext.getCmp('usernameLoginID').focus(false, 100);
			}
		});
    },
	
    buscarUsers: function(button) {
        console.log('clicked the button usuarios');
		
		var v1 = Ext.create('LoginAppDemo.view.Usuarios');
		v1.show();
    },
	
	
	showMsg: function(msg){
		console.log('function showMsg()');
		//Ext.fly('app-msg').update(msg).removeCls('x-hidden');
	},

    onLogin: function(loginDialog,loginForm,loginCredentials) {
	
		console.log('onLogin()');
		
    	console.log('loginCredentials: ' + loginCredentials);
		console.log(loginCredentials);

    	var me = this;

    	// authenticate
    	Ext.Ajax.request({
    		url: 'resources/sampledata/cred.json',
    		params: {
    			username: loginCredentials.username,
    			password: loginCredentials.password,
				accion: 'login'
    		},
    		success: function(response) {
    			
    			var data = Ext.decode(response.responseText);
    			
    			if (data.firstName) {
				
					data.username = loginCredentials.username;
					data.password = loginCredentials.password;
				
					console.log('data login: ');
					console.log(data);
					
					var ops = [];
					for (i=0; i<data.roles.length; i++) {
						ops[i] = data.roles[i].referencia
					}
					console.log('ops.length: ' + ops.length);

    				// instantiate user info in global scope for easy referencing
    				LoginAppDemo.User = Ext.create("LoginAppDemo.user.Profile", {
    					firstName: data.firstName,
    					lastName: data.lastName,
    					roles: data.roles,
						opciones: ops,
    				});
					
					Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
					
					//Ext.state.Manager.set("user", loginCredentials);
					Ext.state.Manager.set("user", data);
					
					values = {};
					values.accion = 'consultarValorParametro';
					values.codigoReferencia = LoginAppDemo.user.Constantes.MINUTOS_HORA_ACADEMICA;
					Ext.Ajax.request({
						url: 'php/commons/commons.php',
						method:'POST',			
						params: {
							params: Ext.encode(values),
						},						
						success: function(response) {
							obj = Ext.decode(response.responseText);
							if (obj.valorParametro) {
								Ext.state.Manager.set("MINUTOS_HORA_ACADEMICA", obj.valorParametro);
							}
						},
						failure : function(response) {
							console.log("Error al calcular el valor del parametro.");
						}
					});
					
					// destroy login dialog
    				loginDialog.destroy();

    				// load main UI
    				Ext.create("LoginAppDemo.view.Viewport");


    			} else {
    				Ext.Msg.alert("Invalid credentials","You entered invalid credentials.", function() {
    					loginForm.getForm().reset();
    				})
    			}
    		}
    	});
	},
	
	consultarParametrosIniciales : function(var1) {
		console.log('consultarParametrosIniciales()');
		
		values = {};
		values.accion = 'obtenerAnioActual';
		Ext.Ajax.request({
			url: 'php/commons/commons.php',
			method:'POST',			
			params: {
				params: Ext.encode(values),
			},						
			success: function(response) {
				obj = Ext.decode(response.responseText);
				console.log(obj);
				if (obj.anio) {
					Ext.state.Manager.set("ANIO_ACTUAL", obj.anio);
					console.log(Ext.state.Manager.get("ANIO_ACTUAL"));
					
				}
				if (obj.mes) {
					Ext.state.Manager.set("MES_ACTUAL", obj.mes);
					console.log(Ext.state.Manager.get("MES_ACTUAL"));
				}
			},
			failure : function(response) {
			}
		});
	},
	
	onLogin2: function(loginDialog,loginForm,loginCredentials) {
	
		console.log('onLogin2()');
		
    	console.log('loginCredentials: ' + loginCredentials);
		console.log(loginCredentials);

    	var me = this;
		
		values = {};
		values.accion = 'login';
		values.username = loginCredentials.username;
		values.password = loginCredentials.password;

    	// authenticate
    	Ext.Ajax.request({
    		url: 'php/login/login.php',
    		params: {
    			username: loginCredentials.username,
    			password: loginCredentials.password,
				params: Ext.encode(values)
    		},
    		success: function(response) {
    			
    			var data = Ext.decode(response.responseText);
    			
    			if (data.user) {
				
					data.username = loginCredentials.username;
					data.password = loginCredentials.password;
				
					console.log('data login: ');
					console.log(data);
					
					var ops = [];
					for (i=0; i<data.user.opciones.length; i++) {
						ops[i] = data.user.opciones[i].referencia
					}
					console.log('ops.length: ' + ops.length);

    				// instantiate user info in global scope for easy referencing
    				LoginAppDemo.User = Ext.create("LoginAppDemo.user.Profile", {
    					firstName: data.firstName,
    					lastName: data.lastName,
    					roles: data.user.opciones,
						opciones: ops
    				});
					
					var cp = new Ext.state.CookieProvider();
					Ext.state.Manager.setProvider(cp);
					for (var item in cp.state) {
						Ext.state.Manager.clear(item);
					}
					
					//Ext.state.Manager.set("user", loginCredentials);
					Ext.state.Manager.set("user", data.user);
					
    				// destroy login dialog
    				loginDialog.destroy();

					//Consulta los valores de los parametros
    				values = {};
					values.accion = 'consultarValorParametro';
					values.codigoReferencia = LoginAppDemo.user.Constantes.MINUTOS_HORA_ACADEMICA;
					Ext.Ajax.request({
						url: 'php/commons/commons.php',
						method:'POST',			
						params: {
							params: Ext.encode(values),
						},
						
						success: function(response) {
							obj = Ext.decode(response.responseText);
							if (obj.parametro) {
								Ext.state.Manager.set("MINUTOS_HORA_ACADEMICA", obj.parametro.valor);
							}
							
							me.consultarParametrosIniciales('1');
						},
						failure : function(response) {
							console.log("Error al calcular el valor del parametro.");
						}
					});
					
    				// load main UI
    				Ext.create("LoginAppDemo.view.Viewport");
					
					Ext.getCmp('lblUsuarioID').setText(data.user.nombrecompleto);

    			} else {
					console.log('Los datos del usuario son incorrectos.');
					
					Ext.getCmp('lblMensajeLoginID').setText('Los datos del usuario son incorrectos.');
					
					loginForm.getForm().reset();
					/*
    				Ext.Msg.alert("Invalid credentials","You entered invalid credentials.", function() {
    					loginForm.getForm().reset();
    				})
					*/
    			}
    		},
			failure : function(response) {
				Ext.getCmp('lblMensajeLoginID').setText('Los datos del usuario son incorrectos.');
			}
    	});
	},
});


