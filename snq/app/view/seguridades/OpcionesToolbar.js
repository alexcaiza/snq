Ext.define('LoginAppDemo.view.seguridades.OpcionesToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.opcionesToolbar',
    items: [
        {
            xtype: 'tbfill'
        }, {
			xtype: 'button',
            text: 'Nuevo',
            action: 'new',
			iconAlign: 'top',
			icon   : 'public/images/page_white.png',
			//iconCls: 'page_white_find',
			tooltip : 'Nuevo',
			scale   : 'small', //large medium small
        }
    ]

});