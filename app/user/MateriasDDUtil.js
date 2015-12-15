Ext.define("LoginAppDemo.user.MateriasDDUtil", {
	//extend: 'Ext.util.Observable',
	singleton: true,
	//config: {
	//},
	//alias:'widget.materiasDDUtil',
	//statics     : {
	//},
	
	columns: [
        {text: "Codigo", flex: 1, sortable: true, dataIndex: 'codigomateria'},
        {text: "Nombre", width: 70, sortable: true, dataIndex: 'nombre'},
        {text: "Descripcion", width: 70, sortable: true, dataIndex: 'descripcion'},
        {text: "Referencia", width: 70, sortable: true, dataIndex: 'codigoreferencia'}
    ],
    
    NOMBRE: 'Alex Caiza',
    
    /*
    getColumns:function () {
        return this.columns;
    },
	
	constructor: function() {
		console.log('constructor()');
	},
	
	constructor: function(config) {
		console.log('constructor(.)');
		this.initConfig(config);
		this.callParent(arguments);
	},
	*/
});