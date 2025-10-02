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
            xtype: 'panel',
            height: 60,
            html: '<h2>Заголовок / Header</h2>'
        },
        {
           xtype:'container',
            layout: 'hbox',
            flex: 1,
            items: [
                {
                    xtype: 'navview',
                },
                {
                    xtype: 'panel',
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
