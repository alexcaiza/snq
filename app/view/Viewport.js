Ext.define('LoginAppDemo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
		'Ext.Viewport',
        'Ext.layout.container.Border',
		'LoginAppDemo.view.MainToolbar',
		'LoginAppDemo.user.Profile',
		'LoginAppDemo.user.ValidationCedula',
		'LoginAppDemo.user.Message',
		'LoginAppDemo.user.EmpleadoClass',
		
		'LoginAppDemo.view.seguridades.SeguridadesPanel',
		'LoginAppDemo.view.seguridades.SeguridadesToolbar',
		'LoginAppDemo.view.seguridades.UsuariosBusqueda',
		'LoginAppDemo.view.seguridades.UsuariosCenter',
		'LoginAppDemo.view.seguridades.UsuariosEdit',
		'LoginAppDemo.view.seguridades.RolesBusqueda',
		'LoginAppDemo.view.seguridades.RolesCenter',
		'LoginAppDemo.view.seguridades.RolesEdit',
		'LoginAppDemo.view.seguridades.RolesToolbar',
		'LoginAppDemo.view.seguridades.OpcionesBusqueda',
		'LoginAppDemo.view.seguridades.OpcionesCenter',
		'LoginAppDemo.view.seguridades.OpcionesEdit',
		'LoginAppDemo.view.seguridades.OpcionesToolbar',
		
		'LoginAppDemo.view.notas.NotasPanel',
		'LoginAppDemo.view.notas.NotasBusqueda',
		'LoginAppDemo.view.notas.NotasCenter',
		
		'LoginAppDemo.view.periodo.PeriodoPanel',
		'LoginAppDemo.view.periodo.PeriodoQuimestral',
		'LoginAppDemo.view.periodo.PeriodoQuimestralToolbar',
		'LoginAppDemo.view.periodo.PeriodoDatos',
		'LoginAppDemo.view.periodo.Quimestre',
		'LoginAppDemo.view.periodo.Nota',
		'LoginAppDemo.view.periodo.Parcial',
		
		'LoginAppDemo.view.administracion.AdministracionPanel',
		'LoginAppDemo.view.administracion.DocentesPanel',
		'LoginAppDemo.view.administracion.DocentesBusqueda',
		'LoginAppDemo.view.administracion.DocentesCenter',
		
		'LoginAppDemo.view.cursos.CursosPanel',
		'LoginAppDemo.view.cursos.CursosBusqueda',
		'LoginAppDemo.view.cursos.CursosCenter',
		'LoginAppDemo.view.cursos.CursosEdicion',
		'LoginAppDemo.view.cursos.MateriasDD',
		
		
    ],

    layout: {
        type: 'border'
    },

	initComponent : function(){
		console.log('Viewport initComponent()');
		
		this.items = [
		{
			region: 'north',
			xtype: 'maintoolbar',
			height: 30,
			style : 'margin: 1px;',
		},{
			region: 'center',
			//plain: true,
			xtype: 'tabpanel',
			id: 'tabpanelID',
			bodyPadding: 1,
			activeTab:4,
			items: [
				{
					title: 'Vacio',
					xtype: 'panel',
					itemId: 'panelVacioID',
					id: 'panelVacioID',
					layout: 'fit',
				},				
				{
					title: 'Seguridades',
					xtype: 'seguridadesPanel',
					iconCls: 'seguridades-icon',
					itemId: 'seguridadesPanelID',
					id: 'seguridadesPanelID',
					layout: 'fit',
				},
				{
					title: 'Configuracion Quimestral',
					xtype: 'periodoPanel',
					iconCls: 'periodo-icon',
					itemId: 'periodoID',
					id: 'periodoID',
					//layout: 'fit',
					//layout: 'border',
				},
				{
					title: 'Registros Notas',
					xtype: 'notasPanel',
					iconCls: 'seguridades-icon',
					itemId: 'notasPanelID',
					id: 'notasPanelID',
					//layout: 'fit',
					//layout: 'border',
				},
				{
					title: 'Administracion',
					xtype: 'administracionPanel',
					iconCls: 'administracion-icon',
					itemId: 'administracionPanelID',
					id: 'administracionPanelID',
					layout: 'fit',
					//layout: 'border',
				},
				
			], 
			
		}];
		
		Ext.onReady(function(){
			console.log('Viewport Ext.onReady()');
		});
		
		
		this.callParent(arguments);
	},
	
	showMsg: function(msg){
		console.log('function showMsg()');
		//Ext.fly('app-msg').update(msg).removeCls('x-hidden');
	},
	
	
});