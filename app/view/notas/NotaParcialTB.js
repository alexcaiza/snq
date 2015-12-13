Ext.define('LoginAppDemo.view.notas.NotaParcialTB', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.notaParcialTB',
    items: [
		{
			xtype: 'tbtext',
			id: 'titleNotaParcialTB',
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


