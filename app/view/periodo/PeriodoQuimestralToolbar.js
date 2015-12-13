Ext.define('LoginAppDemo.view.periodo.PeriodoQuimestralToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.periodoQuimestralToolbar',
	border: '1 1 1 1',
	items: [
        {
            xtype: 'tbfill'
        },{
			xtype: 'button',
            text: 'Guardar',
            action: 'new',
			iconAlign: 'top',
			icon   : 'public/images/bullet_save.png',
			//iconCls: 'page_white_find',
			tooltip : 'Guardar',
			scale   : 'small', //large medium small
        },
		{
            xtype: 'tbspacer',
            width: 2,
        },{
			xtype: 'button',
            text: 'Cancelar',
            action: 'cancel',
			iconAlign: 'top',
			icon   : 'public/images/bullet_cancel.png',
			//iconCls: 'page_white_find',
			tooltip : 'Cancelar',
			scale   : 'small', //large medium small
        }
    ]

});