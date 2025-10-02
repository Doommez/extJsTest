Ext.define('MyExtGenApp.view.test.header.HeaderView', {
    extends: 'Ext.panel.Header',
    xtype: 'headerview',
    title: 'header',
    icon: 'fa-solid fa-house',
    items: [{
        xtype:'button',
        text: 'Back'
    }]
})
