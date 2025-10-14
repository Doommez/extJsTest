Ext.define('MyExtGenApp.view.test.center.CenterView', {
    extend: 'Ext.Container',
    title: 'MyExtGenApp.view.test.center.CenterView',
    xtype: 'tcenterview',
    reference: 'centerview',
    layout: 'card',
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
