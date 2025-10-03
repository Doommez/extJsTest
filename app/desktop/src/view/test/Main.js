Ext.define('MyExtGenApp.view.test.MainView', {
    extend: 'Ext.Container',
    xtype: 'tmainview',
    fullscreen: true,
    layout: {
        type: 'vbox',
    },

    items: [
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Header',
            items: [{
                html: '<div>head action</div>'
            }]
        },
        {
           xtype:'container',
            layout: 'hbox',
            flex: 1,
            items: [
                {
                    xtype: 'tnavview',
                },
                {
                    xtype: 'panel',
                    floating: true,
                    html: '<div>asdfasdf</div>'
                }
            ]
        },
        {
            docked: 'bottom',
            xtype: 'panel',
            height: 40,
            html: '<div style="text-align:center;">© 2025 Мой проект</div>'
    }]

})
