Ext.define('MyExtGenApp.view.test.MainView', {
    extend: 'Ext.Container',
    xtype: 'tmainview',
    fullscreen: true,
    controller: 'tmaincontroller',
    layout: 'fit',
    routeId: 'main',
    initialize: function (...args) {
        console.log('asdf', args)
        let app =  MyExtGenApp
        console.log(app)
    },
    items: [
        {
            xtype: 'tnavview',
            docked: 'left',
        },
        {
            xtype: 'tcenterview',
        },
        {
            xtype: 'panel',
            title: 'footer',
            docked: 'bottom'
        }
    ]
})
