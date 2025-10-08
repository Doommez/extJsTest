Ext.define('MyExtGenApp.view.test.MainView', {
    extend: 'Ext.Container',
    xtype: 'tmainview',
    fullscreen: true,
    layout: 'fit',
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
            xtype: 'panel',
            title: 'tmainview',
        },
        {
            xtype: 'panel',
            title: 'footer',
            docked: 'bottom'
        }
    ]
})
