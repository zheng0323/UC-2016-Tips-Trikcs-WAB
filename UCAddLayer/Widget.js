define(['dojo/_base/declare','esri/layers/FeatureLayer', 'jimu/BaseWidget'],
function(declare,FeatureLayer, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // DemoWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-ucaddlayer',

    postCreate: function() {
      this.inherited(arguments);
      console.log('postCreate');
    },

    startup: function() {
      this.inherited(arguments);
      this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      console.log('startup');
    },

    onOpen: function(){
      console.log('onOpen');
    },

    onClose: function(){
      console.log('onClose');
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      /* jshint unused:false*/
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    },

    _onBtnAddClicked:function(){
      this.map.addLayer(new FeatureLayer(this.firstname.value));
    }
  });
});