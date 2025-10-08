Ext.define('MyExtGenApp.view.test.nav.menu.NavMenu',{
    extend: 'Ext.list.Tree',
    xtype: 'tnavmenuview',
    requires: ['Ext.data.TreeStore'],
    reference: 'tnavmenuview',
    viewModel: {},
    ui: 'nav',
    cls: 'rrrrrrrrrrr',
    height: '100%',
    expanderFirst: false,
    bind: {
        store: '{navmenu}',
        micro: '{micro}'
    }
})
