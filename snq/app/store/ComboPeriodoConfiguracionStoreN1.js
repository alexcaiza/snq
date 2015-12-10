Ext.define('LoginAppDemo.store.ComboPeriodoConfiguracionStoreN1', {
	extend:'Ext.data.Store',
    storeId: 'comboPeriodoConfiguracionStoreN1',
	requires : [
        'LoginAppDemo.model.TipoNota'
    ],
	model: "LoginAppDemo.model.TipoNota",
	autoLoad: false,
	proxy: {
        type: 'ajax',
        url : 'php/notas/consultarTipoNota.php',
        reader: {
            type: 'json',
			root: 'datos',
        }
    },
	
});