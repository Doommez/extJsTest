Ext.define('MyExtGenApp.view.test.nav.NavViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tnavviewcontroller',

   onChangeSize: function (panel, tools, event) {
       console.log(panel);
        panel.setWidth(panel.width=== 300 ? 50: 300);
        panel.setMicro(!panel.micro);
   },

    measureWidth: function(treelist) {
        return treelist.toolsElement.getWidth();
    }
});
