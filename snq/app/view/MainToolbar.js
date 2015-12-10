Ext.define("LoginAppDemo.view.MainToolbar", {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.maintoolbar',
	requires: ['Ext.toolbar.TextItem'],
	//height: 100,
	
	initComponent: function() {
	
		console.log('initComponent method for LoginAppDemo.view.MainToolbar2');

		var items = [
			/*{
				xtype: 'image',
				src: 'public/images/utn3.png',
				width: 161,
				height: 45,
			}, */
			{
				xtype: 'tbtext',
				text: 'Sistema Notas Quimestral',
				style : 'color:#FFFFCC; font-size: 12px; font-weight: bold;',
			}, {
				xtype: 'tbfill'
			}
			,{
				xtype: 'label',
				text: 'Usuario',
				id: 'lblUsuarioID',
			},{
				xtype: 'image',
				src: 'public/images/user.png',
				width: 16,
				height: 16,
			}
			,{
				xtype: 'label',
				text: 'Salir',
			},{
				xtype: 'button',
				scale: 'small',
				name: 'salir',
				action: 'salir',
				icon   : 'public/images/exit.png',
			}			
		];
		
		console.log('LoginAppDemo.User: ');
		console.log(LoginAppDemo.User);
		
		console.log('isUserInRole: ');
		console.log(LoginAppDemo.User.isUserInRole(["admin"]));

		/*
		if (LoginAppDemo.User.isUserInRole(["admin"])) {
			items.push({
				xtype: 'button',
				text: 'For Admins'
			});
		}
		
		if (LoginAppDemo.User.isUserInRole(["admin"])) {
			items.push({
				xtype: 'button',
				text: 'Usuarios',
				action: 'usuarios'
			});
		}

		if (LoginAppDemo.User.isUserInRole(["admin","users"])) {
			items.push({
				xtype: 'button',
				text: 'For Admins or Users'
			});
		}

		if (LoginAppDemo.User.isUserInRole(["nobody"])) {
			items.push({
				xtype: 'button',
				text: 'For nobody'
			});
		}
		*/

		Ext.apply(this, {items: items});

		this.callParent(arguments);
	}
})