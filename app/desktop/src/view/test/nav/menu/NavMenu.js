Ext.define('MyExtGenApp.view.test.nav.menu.NavMenu',{
    extend: 'Ext.list.Tree',
    xtype: 'tnavmenuview',
    requires: ['Ext.data.TreeStore'],
    reference: 'tnavmenuview',
    ui: 'nav',
    expanded: false,
    store: {
        type: 'tree',
        root: {
            expanded: true,
            children: [
                {
                    text: 'detention',
                    leaf: true,
                    iconCls: 'x-fa fa-frown-o'
                },
                {
                    text: 'homework',
                    expanded: true,
                    iconCls: 'x-fa fa-folder',
                    children: [
                        {
                            text: 'book report',
                            leaf: true,
                            iconCls: 'x-fa fa-book'
                        },
                        {
                            text: 'algebra',
                            leaf: true,
                            iconCls: 'x-fa fa-graduation-cap'
                        }
                    ]
                },
                {
                    text: 'buy lottery tickets',
                    leaf: true,
                    iconCls: 'x-fa fa-usd'
                }
            ]
        }
    }

})
