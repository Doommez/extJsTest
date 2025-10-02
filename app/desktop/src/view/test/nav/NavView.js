Ext.define('MyExtGenApp.view.test.nav.NavView', {
    extend: 'Ext.NavigationView',
    xtype: 'navview',
    requires: ['Ext.navigation.Bar'],
    height: '100%',
    defaultBackButtonText: 'Back',
    items: [{
        xtype: 'button',
        text: 'Главная',
        handler: 'onHome'
    },{
        xtype: 'button',
        text: 'Настройки',
        handler: 'onSettings'
    }]
})
