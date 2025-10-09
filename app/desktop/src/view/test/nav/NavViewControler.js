Ext.define('MyExtGenApp.view.test.nav.NavViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tnavviewcontroller',
    router:{
      'home': 'onChangeRoute',
    },
   onChangeSize: function (panel, tools, event) {
        const vm = panel.getViewModel()
        vm.set('micro', !vm.get('micro'));
        vm.set('width', vm.get('width') === 300 ? 50: 300);
        panel.setWidth(panel.width=== 300 ? 50: 300);
   },

    onChangeRoute: function (route) {
        console.log(route);
    },

    measureWidth: function(treelist) {
        return treelist.toolsElement.getWidth();
    }
});
