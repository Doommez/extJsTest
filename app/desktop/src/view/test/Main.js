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
            xtype: 'panel',
            docked: 'top',
            iconCls: 'x-fa fa-rocket',
            title: 'Мое первое приложение на Ext Js',
        },
        {
            xtype: 'tnavview',
            docked: 'left',
        },
        {
            xtype: 'panel',
            title: 'mainview',
        },
        {
            xtype: 'panel',
            title: 'footer',
            docked: 'bottom'
        }
    ]
})
