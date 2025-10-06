Ext.define('MyExtGenApp.view.test.nav.NavView', {
    extend: 'Ext.Panel',
    xtype: 'tnavview',
    collapsed: false,
    collapsible: true,
    ui: 'light',
    width: 200,

    headerPosition: 'left',

    items: [
        {
            xtype: 'button',
            text: 'Главная страница' },
        {   xtype: 'button',
            text: 'Настройки' }
    ]
})
