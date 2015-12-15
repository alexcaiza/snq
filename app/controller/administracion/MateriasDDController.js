Ext.define('LoginAppDemo.controller.administracion.MateriasDDController', {
    extend: 'Ext.app.Controller',
    views: [
        'cursos.MateriasDD',
    ],
	stores: [
       'MateriasStore',
    ],
    requires: [
       'LoginAppDemo.user.MateriasDDUtil',
    ],
    refs:[{
        selector:'materiasDD', ref:'viewMateriasDD'
    }],
    init: function() {
        console.log('Initialized MateriasDD Controller! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
			
        });
    },
    
    onLaunch: function() {
    	/*
        console.log(this.getProjectData());
        var dataview = this.getProjectData(),
            store = this.getProjectStore();
         console.log("Stoer = " + store);   
        dataview.bindStore(store);
        dataview.getSelectionModel().select(store.getAt(0));
		*/
    	 console.log('The onLaunch method of MateriasDDController');
    	 
    	 //console.log('getViewMateriasDD(): ' + this.getViewMateriasDD());
    	 
    	 var me = this;
    	 viewMaterias = me.getViewMateriasDD();
     
	     //combobox value calle from button
    	 console.log('viewMaterias: ' + viewMaterias);
    },
	
    onPanelRendered: function() {
        console.log('The onPanelRendered method of MateriasDDController panels was rendered');
        
        var me = this;
   	 	viewMaterias = me.getViewMateriasDD();
    
	    //combobox value calle from button
   	 	console.log('viewMaterias: ' + viewMaterias);
    },
    
    //Retrieves an instance of the top-level view
    //If it has not been created yet than one is instantiated
    //Also, overrides the .close() method on the view to 
    //null out the instance reference on the controller (very necessary)
    getViewInstance: function () {
    	console.log('The getViewInstance method of MateriasDDController');
        var self = this;

        if(!this.viewInstance) {
            if(this.views && this.views.length) {

                var view = this.getView(this.views[0]);

                this.viewInstance = view.create();

                this.viewInstance.close = function () {
                    view.prototype.close.apply(this, arguments);
                    self.viewInstance = null;
                };

            } 
        }

        return this.viewInstance;
    },
	
});


