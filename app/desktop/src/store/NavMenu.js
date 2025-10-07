Ext.define('MyApp.store.NavMenu', {
    extend: 'Ext.data.Store',
    alias: 'store.navmenu',
    model: 'MyApp.model.NavMenu',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/api/users',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
