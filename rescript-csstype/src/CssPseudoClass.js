// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function Make(Type) {
  var make = function (v) {
    return Curry._1(Type.map, [
                ":hover",
                v.VAL
              ]);
  };
  return {
          make: make
        };
}

exports.Make = Make;
/* No side effect */
