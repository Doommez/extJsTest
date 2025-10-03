Ext.define('MyExtGenApp.view.test.nav.NavView', {
    extend: 'Ext.NavigationView',
    xtype: 'tnavview',
    requires: ['Ext.navigation.Bar'],
    defaultBackButtonText: 'Back',
    items: [{
        xtype: 'container',
        reference: 'contentPanel',
        itemId: 'content',
        items: [{
            xtype: 'button',
            html: 'Главная страница'
        },{
            xtype: 'button',
            html: 'Настройки'
        }]
    }]
})
