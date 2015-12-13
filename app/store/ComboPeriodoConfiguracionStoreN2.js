Ext.define('LoginAppDemo.store.ComboPeriodoConfiguracionStoreN2', {
	extend:'Ext.data.Store',
    storeId: 'comboPeriodoConfiguracionStoreN2',
	requires : [
        'LoginAppDemo.model.TipoNota'
    ],
	model: "LoginAppDemo.model.TipoNota",
	autoLoad: true,
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarTipoNota.php',
        reader: {
            type: 'json',
			root: 'datos',
        }
    },

});