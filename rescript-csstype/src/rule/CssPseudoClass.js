// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function Make(Type) {
  var make = function (v) {
    var match = v.VAL;
    return Curry._1(Type.map, [
                match[0],
                match[1]
              ]);
  };
  return {
          make: make
        };
}

function MakeHelper(Type) {
  var pseudoClass = function (selector, declarations) {
    return {
            NAME: "PseudoClass",
            VAL: [
              selector,
              Curry._1(Type.declarationBlock, declarations)
            ]
          };
  };
  var hover = function (declarations) {
    return pseudoClass(":hover", declarations);
  };
  return {
          pseudoClass: pseudoClass,
          hover: hover
        };
}

exports.Make = Make;
exports.MakeHelper = MakeHelper;
/* No side effect */
