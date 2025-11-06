Ext.define('MyExtGenApp.Application', {
	extend: 'Ext.app.Application',
	name: 'MyExtGenApp',
	requires: ['MyExtGenApp.*'],
	defaultToken: 'message',
	controllers: [
		'NavigationController'
	],

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		//settings ajax
		Ext.Ajax.setWithCredentials(true);
		MyExtGenApp.service.AuthService.setupInterceptors()

		this.removeSplash()
		var whichView = 'tmainview'
		Ext.Viewport.add([{xtype: whichView}])

	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
