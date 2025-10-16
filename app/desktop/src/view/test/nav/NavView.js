Ext.define('MyExtGenApp.view.test.nav.NavView', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.panel.Collapser'
    ],
    xtype: 'tnavview',
    viewModel: 'navviewmodel',
    controller: 'tnavviewcontroller',
    title: 'Навигация',
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
    cls: 'classs',
    items: [
        {
            xtype: 'tnavmenuview',
            listeners: {
                selectionchange: 'onChangeMenu',
                afterRender: 'onRerenderMenu',
                // painted: 'onRerenderMenu',
                render: 'onRerenderMenu',
            }
        }
    ]
})
