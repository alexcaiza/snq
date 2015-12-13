Ext.define("LoginAppDemo.user.Message", {
	
	config: {
		mensaje: '',
		iconCls: '',
		iconClsError: 'ux-notification-icon-error',
		iconClsInfo: 'ux-notification-icon-information',
		iconClsWarn: 'ux-notification-icon-warning',
	},

	constructor: function(config) {
		this.initConfig(config);
		this.callParent(arguments);
	},
  
	//validarCedula: function(cedula) {
	addMessage: function(mensaje, iconCls) {
  
		this.setMensaje(mensaje);
		this.setIconCls(iconCls);
	  
		uxNotificationID = Ext.getCmp('uxNotificationID');
		var band = false;
		if (Ext.getCmp('uxNotificationID')) {
			Ext.getCmp('uxNotificationID').doAutoClose();
			band = true;			
		}
		
		var uxNotification = Ext.create('widget.uxNotification', {
			position: 'b', //br
			manager: 'demo1',
			//cls: 'ux-notification-light',
			id: 'uxNotificationID',
			//closable: false,
			//autoClose: false,
			width: (window.innerWidth - 50),
			height: 75,			
			autoCloseDelay: 2000,
			hideDuration: 0,
			slideInDuration: 0,
			stickOnClick: true,
			draggable: true,
			title: 'Mensaje',
			iconCls:  this.getIconCls(),
			html: this.getMensaje(),
		});
		if (band) {
			var timeoutId;
			timeoutId =setTimeout(function(msg){
			  console.log(msg);
			  uxNotification.show();
			  clearTimeout(timeoutId);
			},200,'Pasaron 0.3 segundos desde el click');
			
		} else {
			uxNotification.show();
		}
	},
});