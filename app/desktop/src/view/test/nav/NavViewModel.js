Ext.define('MyExtGenApp.view.test.nav.NavViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.navviewmodel',

    data: {
        width: 300,
        micro: false
    },

    stores: {
        navmenu: {
            type: 'navmenustore'
        }
    },
});
