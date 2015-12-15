Ext.define('LoginAppDemo.view.cursos.MateriasDD', {
	extend: 'Ext.panel.Panel',
    alias: 'widget.materiasDD',
	id: 'materiasDD_ID',
	width        : 650,
    height       : 300,
    layout       : {
        type: 'hbox',
        align: 'stretch',
        padding: 5
    },
    defaults     : { flex : 1 }, //auto stretch
	margins: '5 5 0 0',
    autoShow: true,
    initComponent: function() {
    	console.log("the initComponent method of MateriasDD");
        this.callParent(arguments);
    },
    items: [
       {
    	   xtype: 'grid',
    	   viewConfig: {
	            plugins: {
	                ptype: 'gridviewdragdrop',
	                dragGroup: 'firstGridDDGroup',
	                dropGroup: 'secondGridDDGroup'
	            },
	            listeners: {
	                drop: function(node, data, dropRec, dropPosition) {
	                    var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
	                    //Ext.example.msg("Drag from right to left", 'Dropped ' + data.records[0].get('name') + dropOn);
	                    console.log("Drag from right to left", 'Dropped ' + data.records[0].get('name') + dropOn);
	                }
	            }
	        },
	        //store            : firstGridStore,
	        store            : 'MateriasStore',	        
	        //columns          : columns,
	        columns          : LoginAppDemo.user.MateriasDDUtil.columns, 
	        stripeRows       : true,
	        title            : 'First Grid',
	        margins          : '0 2 0 0'
       },
       {
    	   xtype: 'grid',
    	   viewConfig: {
	            plugins: {
	                ptype: 'gridviewdragdrop',
	                dragGroup: 'secondGridDDGroup',
	                dropGroup: 'firstGridDDGroup'
	            },
	            listeners: {
	                drop: function(node, data, dropRec, dropPosition) {
	                    var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
	                    //Ext.example.msg("Drag from left to right", 'Dropped ' + data.records[0].get('name') + dropOn);
	                    console.log("Drag from left to right", 'Dropped ' + data.records[0].get('name') + dropOn);
	                }
	            }
	        },
	        //store            : secondGridStore,
	        //columns          : columns,
	        columns          : LoginAppDemo.user.MateriasDDUtil.columns, 
	        stripeRows       : true,
	        title            : 'Second Grid',
	        margins          : '0 0 0 3'
       },
    ],
    dockedItems: {
        xtype: 'toolbar',
        dock: 'bottom',
        items: ['->', // Fill
        {
            text: 'Reset both grids',
            handler: function(){
                //refresh source grid
                //firstGridStore.loadData(myData);

                //purge destination grid
                //secondGridStore.removeAll();
            }
        }]
    }
});


