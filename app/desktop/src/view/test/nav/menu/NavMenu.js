Ext.define('MyExtGenApp.view.test.nav.menu.NavMenu',{
    extend: 'Ext.list.Tree',
    xtype: 'tnavmenuview',
    requires: ['Ext.data.TreeStore'],
    reference: 'tnavmenuview',
    viewModel: {},
    ui: 'nav',
    height: '100%',
    padding: 3,
    cls: 'rrrrrrrrrrr',
    expanderFirst: false,
    bind: {
        store: '{navmenu}',
        micro: '{micro}'
    }
})
