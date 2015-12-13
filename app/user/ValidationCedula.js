Ext.define("LoginAppDemo.user.ValidationCedula", {
	
	config: {
		cedula: '',
	},

	constructor: function(config) {
		this.initConfig(config);
		this.callParent(arguments);
	},
  
	validarCedula: function(cedula) {
		console.log('validarCedula() method');
		this.setCedula(cedula);
	  
		values = {};
		values.cedula = this.getCedula();
		values.accion = 'validar_cedula';
		
		var validacion_cedula = false;
		
		var response = Ext.Ajax.request({
			url: 'php/empleados/acciones.php',
			method:'POST',
			//async: false,
			//waitMsg: 'Processing your request',			
			params: {
				params: Ext.encode(values),
			},
			/*
			success: function(response) {
				obj = Ext.decode(response.responseText);
				console.log(obj);
				if (obj.validacion_cedula) {
					validacion_cedula = true;
				} else {
					validacion_cedula = false;
				}
			},
			failure : function(response) {
				validacion_cedula = false;
			}
			*/
		});
		if (response) {
			obj = Ext.decode(response.responseText);
			console.log(obj);
			if (obj.validacion_cedula) {
				validacion_cedula = true;
			} else {
				validacion_cedula = false;
			}
		}
		return validacion_cedula;
	},
});