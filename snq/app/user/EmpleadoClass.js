Ext.define("LoginAppDemo.user.EmpleadoClass", {
	
	config: {
		cedula: '',
	},

	constructor: function(config) {
		this.initConfig(config);
		this.callParent(arguments);
	},
  
	buscarEmpleadoPorCedula: function(cedula) {
		console.log('buscarEmpleadoPorCedula() method');
		this.setCedula(cedula);
	  
		values = {};
		values.cedula = this.getCedula();
		values.accion = 'consultar_empleado_cedula';
		
		var response = Ext.Ajax.request({
			url: 'php/empleados/acciones.php',
			method:'POST',
			async: false,			
			params: {
				params: Ext.encode(values),
			},
		});
		empleado = null;
		if (response) {
			obj = Ext.decode(response.responseText);
			if (obj && obj.empleado) {
				empleado = obj.empleado;
			}
		}
		return empleado;
	},
});