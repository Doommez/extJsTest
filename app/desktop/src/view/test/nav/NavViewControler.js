Ext.define('MyExtGenApp.view.test.nav.NavViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tnavviewcontroller',


    onChangeSize: function (panel, tools, event) {
        const vm = panel.getViewModel()
        vm.set('micro', !vm.get('micro'));
        vm.set('width', vm.get('width') === 300 ? 50 : 300);
        panel.setWidth(panel.width === 300 ? 50 : 300);
    },

    onChangeMenu: function (menu, record) {
        const isLeaf = record.data.leaf;
        if (!isLeaf) {
            const firstItem = record.childNodes[0]
            this._goTo(menu, firstItem);
        } else {
            this._goTo(menu, record)
        }
    },

    _goTo: function (menu, record) {
        const url = record.data.url;
        const isLeaf = record.data.leaf;

        if (url && isLeaf) {
            this.redirectTo(url)
            this.setActiveMenuItem(record)
        }
    },

    setActiveMenuItem: function (record) {
        const menu = this.getView().down('tnavmenuview')
        const activeMenuItemId = menu.getSelection()
        const store = menu.getStore('navmenu')
        if (store) {
            if (activeMenuItemId && activeMenuItemId.id !== record.id) {
                menu.setSelection(record)
            }
        } else {
            menu.on('painted', () => {
                menu.setSelection(record)
            }, {
                single: true,
            })
        }

    },


    onRerenderMenu: function (...args) {
        console.log('nav rerenderMenu', args)
    }

});
