Ext.define('MyExtGenApp.view.test.nav.NavView', {
    extend: 'Ext.Panel',
    xtype: 'tnavview',
    viewModel: 'navviewmodel',
    controller: 'tnavviewcontroller',
    title: 'Навигация',
    requires: [
        'Ext.panel.Collapser'
    ],
    hidden: false,
    bind: {
        width: '{width}',
    },
    scrollable: true,
    reference: 'tnavview',
    tools: [{
        iconCls: 'x-fa fa-bars',
        handler: 'onChangeSize'
    },],
    items: [
        {
            xtype: 'tnavmenuview',
        }
    ]
})
