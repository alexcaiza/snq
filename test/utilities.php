<html>
<head>
    <meta charset="UTF-8">
    <title>Test grid</title>
    <link rel="stylesheet" href="../resources/theme/app.css">
	<link rel="stylesheet" href="example.css">
	
	<script src="../public/js/extjs/ext-all.js"></script>
	<script src="examples.js"></script>
	
	<script>

	//Example 1:
	// Define new global class used in all views   
	Ext.define('MyApp.util.Utilities', {
	     singleton: true,
	     SomeValue: 1,
	     SomeText: 'First'
	});
	 //override global instance with new values
	 MyApp.util.Utilities.SomeValue = 5;
	 MyApp.util.Utilities.SomeText = 'Hello World!';

	//Example2 :
	Ext.define('MyApp.config.Runtime',{
	    singleton : true,
	    config : {
	        myLastCustomer : 0   // initialize to 0
	    },
	    statics		: {
			user		: 'Raja',
			count: 0,
	        getCount:function () {
	            return this.count;
	        },
	        increment:function () {
	            this.count++;
	        }

		},
	    constructor : function(config){
	        this.initConfig(config);
	        var statics = this.statics();
	        console.log('USER:'+statics.user);
	    }
	});


	  //App defined here
	 Ext.application({
	    name : 'MyFiddle',
	    requires : ['MyApp.config.Runtime',
	                'MyApp.util.Utilities'], // Don't forget to require your class
	     
	   // we can also define global variables which are used throughout the app
	    globals:{
	        myURL:'http://example.com',
	        myName: 'Global Var'
	    },
	    
	    launch : function() {
	        console.log('global var old value:'+ MyApp.util.Utilities.SomeValue);
	                
	        
	       // Setting count value
	    MyApp.config.Runtime.count = 10;
	    console.log("Count after increment is " + MyApp.config.Runtime.count);

	        
	        MyApp.util.Utilities.SomeValue = 2; //variables in singleton are auto static.
	        console.log('MyFiddle', 'Global Var new value:'+ MyApp.util.Utilities.SomeValue);
	       
	        // access global var's        
	        var somevalue = MyApp.util.Utilities.SomeValue;
	        var sometext = MyApp.util.Utilities.SomeText;
	        var someurl = MyFiddle.app.globals.myURL;
	        var somename = MyFiddle.app.globals.myName;
	        
	        var str = 'SomeValue: '+somevalue+' <br/> SomeText: '+sometext+'<br/> myURL: '+
	            someurl+'<br/> myName: '+somename;
	        
	        
	        MyApp.config.Runtime.setMyLastCustomer(12345);  
	        str += '<br/> Runtime Var:'+MyApp.config.Runtime.getMyLastCustomer(); 
	        
	        //panel def
	        Ext.create('Ext.panel.Panel', {
	            title: 'Statics Example',
	            width: 600,
	            height: 200,
	            defaults: {
	                // applied to each contained panel
	                bodyStyle: 'padding:10px'
	            },
	            layout: {                
	                type: 'fit'
	            },
	            html: str,            
	            renderTo: Ext.getBody()
	        });
	    }
	        
	    });
	
	</script>

</head>
<body>

</body>
</html>