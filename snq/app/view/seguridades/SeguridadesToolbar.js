Ext.define('LoginAppDemo.view.seguridades.SeguridadesToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.seguridadesToolbar',
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
        }, {
            xtype: 'tbspacer',
            width: 20
        }, {
			xtype: 'button',
            text: 'Eliminar',
			id     : 'btnDeleteEmpleado',
            action: 'delete',
			iconAlign: 'top',
			iconCls: 'page_white_find',
			tooltip : 'Nuevo2',
			scale   : 'small',
        }
    ]

});