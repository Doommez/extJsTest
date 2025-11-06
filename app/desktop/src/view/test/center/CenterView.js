Ext.define('MyExtGenApp.view.test.center.CenterView', {
    extend: 'Ext.Panel',
    title: 'ExtJS',
    xtype: 'tcenterview',
    reference: 'centerview',
    layout: 'card',
    tools: [{
        xtype: 'button',
        ui: 'action',
        text: 'Выйти',
        handler: function() {
          MyExtGenApp.service.AuthService.logout()
        }
    }, ],
    items: [
        {
          xtype: 'panel',
          title: 'header',
            html: 'firsty'
        },
        {
            xtype: 'messageview'
        },
        {
            xtype: 'panel',
            reference: 'fff',
            title: 'ffffff',
            html: 'asdfasdf'
        }
    ]
})
