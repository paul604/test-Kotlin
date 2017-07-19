if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_js'.");
}
var kotlin_js = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function Main() {
  }
  Main.prototype.main_kand9s$ = function (args) {
    println('test JavaScript!');
  };
  Main.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  _.Main = Main;
  Kotlin.defineModule('kotlin_js', _);
  return _;
}(typeof kotlin_js === 'undefined' ? {} : kotlin_js, kotlin);
