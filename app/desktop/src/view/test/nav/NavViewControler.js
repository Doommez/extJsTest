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
        console.log(menu);
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
        console.log(menu,'menu', menu.isPainted())
        const activeMenuItemId = menu.getSelection()
        if (activeMenuItemId?.id !== record.id) {
            console.log(record, 'record', menu)
            menu.setSelection(record)
        }
        menu.on('painted', () => {
            console.log('painted')
            menu.setSelection(record);
        });
    },

});
