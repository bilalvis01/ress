// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function make(v) {
  var match = v.VAL;
  return [
          match[0],
          match[1]
        ];
}

function map(declaration, callback) {
  return Curry._1(callback, declaration);
}

function MakeHelper(D) {
  var pseudoClass = function (selector, declarations) {
    return {
            NAME: "PseudoClass",
            VAL: [
              selector,
              Curry._1(D.declarationBlock, declarations)
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

exports.make = make;
exports.map = map;
exports.MakeHelper = MakeHelper;
/* No side effect */
