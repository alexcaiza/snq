Ext.define("LoginAppDemo.view.LoginForm", {
	extend: 'Ext.window.Window',
	alias: 'widget.loginform',
	requires: ['Ext.form.Panel'],
	title: 'Autenticación',
    autoShow: true,
	height: 150,
	width: 350,
    closable: false,
    resizable: false,
	layout: 'fit',
	//margin: '3,3,3,3',
	bodyStyle:{"background-color":"#dfe8f6"},
	items: [
    {
        xtype: 'fieldcontainer',
		margin: '3,3,3,3',
        layout: 'hbox',
		
        items: [
			{
				xtype: 'image',
				id: 'imageEmpleadoID',
				fieldLabel: 'Preview',
				width: 75,
				height: 75,
				src: 'public/images/login.png',
				bodyStyle:{"background-color":"#FFFFFF"},
				margin: '3,3,3,3',
				style: {
					'display': 'block',
					'margin': 'auto',
					'padding': '5px'
				},
			},
			{
				xtype: 'form',//form fieldcontainer
				height: 110,
				width: '78%',
				border :0,
				bodyPadding: 10,
				buttonAlign:'center',
				bodyStyle:{"background-color":"#dfe8f6"},
				defaults: {
				  xtype: 'textfield',
				  anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 50,
					anchor: '90%',
					labelStyle: 'font-weight:bold; width:50px; font-size: 9px;',
					fieldStyle: 'font-size: 11px; color: #424242;',
				},
				items: [
				  {
					fieldLabel: 'Usuario:',
					name: 'username',
					id: 'usernameLoginID',
					value: 'admin',
					allowBlank: false
				  },
				  {
					fieldLabel: 'Password:',
					name: 'password',
					id: 'passwordID',
					inputType: 'password',
					value: 'admin',
					allowBlank: false,
					listeners:{  
						scope:this,  
						specialkey: function(f,e){  
							if(e.getKey()==e.ENTER){  
								console.log('You pressed the Enter key');  
								var formDialog = f.up('loginform');				
								var form = f.up('form');
								
								formDialog.fireEvent('login',formDialog,form,form.getValues());
							}  
						},
						afterrender: function(fld) {
							fld.focus(false, 500);
						}
					}, 
				  },
				  {
					xtype:'label',
					text: "",
					name: 'lblMensajeLogin',
					id: 'lblMensajeLoginID',
					style: 'font-weight:normal; font-size:10px; color=red; font-style: italic;',
				  },
				],
				buttons: [
				   {
					 text: 'Login',
					 formBind: true,
					 disabled: true,
					 id: 'btnLoginID',
					 bodyPadding: 15,
					 handler: function(b,e) {
						var formDialog = b.up('loginform');				
						var form = b.up('form');
						
						formDialog.fireEvent('login',formDialog,form,form.getValues());
					 }
				   }
				]
			}
        ],
        
    }
	]
})