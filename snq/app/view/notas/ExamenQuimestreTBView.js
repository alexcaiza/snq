Ext.define('LoginAppDemo.view.notas.ExamenQuimestreTBView', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.examenQuimestreTBView',
    items: [
		{
			xtype: 'tbtext',
			id: 'titleExamenQuimestreTB',
			text: '',
			style : 'color:#505050; font-size: 10px; font-weight: bold;',
		},
        {
            xtype: 'tbfill'
        },
		{
			xtype: 'button',
			id: 'btnNuevoHorarioPlantilla',
            text: 'Nuevo',
            action: 'new',
			iconAlign: 'left',
			icon   : 'public/images/page_white.png',
			//iconCls: 'page_white_find',
			tooltip : 'Nuevo',
			scale   : 'small',
        },
		{
			xtype: 'button',
			id: 'btnNuevoHorarioPlantilla2',
            text: 'Nuevo',
            action: 'new',
			iconAlign: 'left',
			icon   : 'public/images/page_white.png',
			//iconCls: 'page_white_find',
			tooltip : 'Nuevo',
			scale   : 'small',
        },
		/*{
            xtype: 'tbspacer',
            width: 20
        }*/
    ]

});


