if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_js'.");
}
var kotlin_js = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  function main(args) {
    println('test JavaScript!');
    println('sum : ' + Kotlin.toString(sum(2, 2)));
    print('printSum : ');
    printSum(2, 2);
  }
  function sum(a, b) {
    return a + b | 0;
  }
  function printSum(a, b) {
    println('sum of ' + a + ' and ' + b + ' is ' + (a + b | 0));
  }
  _.main_kand9s$ = main;
  _.sum_vux9f0$ = sum;
  _.printSum_vux9f0$ = printSum;
  main([]);
  Kotlin.defineModule('kotlin_js', _);
  return _;
}(typeof kotlin_js === 'undefined' ? {} : kotlin_js, kotlin);
