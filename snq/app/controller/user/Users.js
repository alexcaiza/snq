Ext.define('LoginAppDemo.controller.user.Users', {
    extend: 'Ext.app.Controller',
    views: [
        'user.List',
        'user.Edit',
        'user.UserToolbar'
    ],
    stores: ['Users'],
    models: ['User'],
    init: function() {
        console.log('Initialized Users Controller! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userlist': {
                itemdblclick: this.editUser,
                itemclick: this.selectUser
            },
            'useredit button[action=update]': {
                click: this.updateUser
            },
            'useredit button[action=save]': {
                click: this.saveUser
            },
            'usertoolbar button[action=buscar]': {
                click: this.buscarUsers
            },
            'usertoolbar button[action=guardar]': {
                click: this.guardarUsers
            },
            'usertoolbar button[action=limpiar]': {
                click: this.limpiarUsers
            },
            'usertoolbar button[action=nuevo]': {
                click: this.nuevoUser
            }

        });
        
        //this.getUsersStore().loadPage(1);
    },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    limpiarUsers: function(button) {
        var panel = Ext.getCmp('panelListUsersID');
        if (panel) {
            panel.removeAll();
        }
    },
    buscarUsers: function(button) {
        console.log('clicked the buscar button - UsersController ');
        var panel = Ext.getCmp('panelListUsersID');
        if (panel) {
            panel.getStore().load();
        }
        console.log(panel);
    },
    guardarUsers: function(button) {
        console.log('clicked the guardar button - UsersController ');
        var panel = Ext.getCmp('panelListUsersID');
        if (panel) {
            panel.getStore().sync();
            panel.getStore().load();
        }
        console.log(panel);
    },
    editUser: function(grid, record, item, index, e, eOpts) {
        console.log('The grid itemdblclick ' + index);
        console.log('Double clicked on ' + record.get('id') + ' ' + record.get('name') + ' ' + record.get('email'));

        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);

        //Activa y desactiva los botones de guardar y actualizar
        var btnUpdateUser = Ext.getCmp('btnUpdateUserID');
        btnUpdateUser.show();

        var btnCreateUser = Ext.getCmp('btnCreateUserID');
        btnCreateUser.hide();

    },
    nuevoUser: function(button, e, eOpts) {
        console.log('clicked the nuevo button - UsersController ');
        var view = Ext.widget('useredit');
        var record = Ext.create('AM.model.User', {});
        view.down('form').loadRecord(record);

        //Activa y desactiva los botones de guardar y actualizar
        var btnUpdateUser = Ext.getCmp('btnUpdateUserID');
        btnUpdateUser.hide();

        var btnCreateUser = Ext.getCmp('btnCreateUserID');
        btnCreateUser.show();

        console.log(btnUpdateUser);
    },
    selectUser: function(grid, record, item, index, e, eOpts) {
        //console.log('The grid itemclick ' + index);
        //console.log(record);
        //console.log(record.data);
        //console.log(record.data['name']);
    },
    updateUser: function(button) {
        console.log('clicked the Update button');
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        record.set(values);
        this.getUsersStore().sync();
        win.close();


    },
    saveUser: function(button) {
        console.log('clicked the Save button');
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        record.set(values);
        this.getUsersStore().add(record);
        this.getUsersStore().sync();
        this.getUsersStore().load();
        win.close();
    },
	 
	showMsg: function(msg){
		Ext.fly('app-msg').update(msg).removeCls('x-hidden');
	},
});


