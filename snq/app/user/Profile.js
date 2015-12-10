Ext.define("LoginAppDemo.user.Profile", {
	
  config: {
    firstName: '',
    lastName: '',
    roles: [],
	opciones: [],
  },

  isUserInRole: function(roles) {
  
	console.log('this.getRoles().length: ' + this.getRoles().length);
	console.log('this.getRoles(): ');
	console.log(this.getRoles());
	console.log('roles: ');
	console.log(roles);
	console.log('roles.length: ');
	console.log(roles.length);

  	for (var i=0; i<roles.length; i++) {
		console.log('roles['+i+']:');
		console.log(roles[i]);
    	if (Ext.Array.contains(this.getRoles(), roles[i])) {
    		return true
    	}
   	}

   	return false;

  },

  isUserInOpciones: function(roles) {
  
	console.log('this.getRoles().length: ' + this.getRoles().length);
	console.log('this.getRoles(): ');
	console.log(this.getRoles());
	console.log('roles: ');
	console.log(roles);
	console.log('roles.length: ');
	console.log(roles.length);

  	for (var i=0; i<roles.length; i++) {
		console.log('roles['+i+']:');
		console.log(roles[i]);
    	if (Ext.Array.contains(this.getOpciones(), roles[i])) {
    		return true
    	}
   	}

   	return false;

  },  
  
  constructor: function(config) {
    this.initConfig(config);
    this.callParent(arguments);
  }

});