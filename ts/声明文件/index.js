///<reference path="jQuery.d.ts"/>
console.log(jQuery.ajax("#foo"));
jQuery.ajax = function (selector) {
    return selector;
};
// ///<reference path="Animate.d.ts"/>
// ///<reference path="Direction.d.ts"/>
// let animate=new Animate("pick");
// let direction=[Direction.DOWN,Direction.LEFT,Direction.RIGHT,Direction.UP];
