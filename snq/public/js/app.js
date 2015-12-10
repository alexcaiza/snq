Ext.application({
    name: 'AM',
    appFolder: 'app',
    controllers: [
        'user.Users'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
        console.log('Cargando launch de: Ext.application');
    }});
