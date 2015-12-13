Ext.Loader.setConfig({
	enabled	: true,
	paths	: {
		//"Extensible": "public/js/extensible/src",
		//'Ext.ux': 'public/js/extjs/ux',
		'Ext.ux.window': 'public/js',
		'LoginAppDemo.user': 'app/user',
	}
});

Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    time: function(val, field) {
        return timeTest.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    timeText: 'Not a valid time.  Must be in the format "12:34 PM".',
    // vtype Mask property: The keystroke filter mask
    timeMask: /[\d\s:amp]/i,
	
	
	validacionNumero : function(value, field) {
		return /[0-9]/.test(value);
    },
    validacionNumeroText : 'Los datos ingresado no son válidos. Solo números',
    validacionNumeroMask : /[0-9]/i,
	
	
	validacionNumeroCedula : function(value, field) {
		return /^\d{0,10}$/.test(value);
    },
    validacionNumeroCedulaText : 'Los datos ingresado no son válidos. Solo números',
    validacionNumeroCedulaMask : /^\d{0,10}$/,
	
	
	validacionLetrasConEspacios : function(value, field) {
		return /[A-Za-z ]/.test(value);
	},
	validacionLetrasConEspaciosText : 'Datos ingresados no válidos. Solo letras',
	validacionLetrasConEspaciosMask : /[A-Za-z ]/,
	
	
	validacionSoloLetras : function(value, field) {
		return /[a-z]/.test(value);
	},
	validacionSoloLetrasText : 'Datos ingresados no válidos. Solo letras',
	validacionSoloLetrasMask : /[a-z]/
	
});

Ext.require([
	//'Ext.*',
    'Ext.data.*',
    'Ext.grid.*',
	'Ext.ux.window.Notification',
	'LoginAppDemo.user.Message',
	'LoginAppDemo.user.Constantes',
]);

var message = Ext.create("LoginAppDemo.user.Message");
/*
var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Procesando..."});
Ext.Ajax.on('beforerequest', function(){
	myMask.show();
});

Ext.Ajax.on('requestcomplete', function(){
	myMask.hide();
});
*/
Ext.application({
    
    name: 'LoginAppDemo',
	appFolder : 'app',
	controllers: [
		"Main",
		"seguridades.SeguridadesController",
		"notas.NotasController",
		"administracion.DocentesController",
		"administracion.CursosController",
	],
	models: [
		"LoginAppDemo.model.Rol",
		"LoginAppDemo.model.Opcion",
		"LoginAppDemo.model.Nota",
		"LoginAppDemo.model.Docente",
		"LoginAppDemo.model.Curso",
	],
	stores: [
		"LoginAppDemo.store.UsuariosStore",
		"LoginAppDemo.store.RolesStore",
		"LoginAppDemo.store.OpcionesStore",
		"LoginAppDemo.store.NotasStore",
		"LoginAppDemo.store.DocentesStore",
		"LoginAppDemo.store.CursosStore",
	],

	//views: ["Main"],
	//views: ["LoginAppDemo.view.override.Grid"],
	//views: ["LoginAppDemo.view.empleados.SearchView"],
	
    autoCreateViewport: false,
	
    launch: function() {
    	Ext.create("LoginAppDemo.view.LoginForm");
    }
});
