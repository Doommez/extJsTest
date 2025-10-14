Ext.define('MyExtGenApp.view.test.nav.NavViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tnavviewcontroller',


   onChangeSize: function (panel, tools, event) {
        const vm = panel.getViewModel()
        vm.set('micro', !vm.get('micro'));
        vm.set('width', vm.get('width') === 300 ? 50: 300);
        panel.setWidth(panel.width=== 300 ? 50: 300);
   },

    onChangeMenu: function (menu, record) {
        const isLeaf = record.data.leaf;
        if(!isLeaf){
            const firstItem = record.childNodes[0]
            this.goTo(menu, firstItem);
        }else{
            this.goTo(menu,record)
        }
    },

    goTo: function (menu,record) {
        const url = record.data.url;
        const isLeaf = record.data.leaf;

        if(url&& isLeaf){
            this.redirectTo(url)
            this.setActiveMenuItem(menu,record)
        }
    },

    setActiveMenuItem: function (menu, record) {
        menu.setSelection(record.data.id)
    },

});
