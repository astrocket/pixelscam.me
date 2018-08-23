mergeInto(LibraryManager.library, {

  Say: function(message) {
    ReactUnityWebGL.Say(Pointer_stringify(message));
  },
  
  Hodl: function(message) {
    window.alert(Pointer_stringify(message));
  },

});