// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_dict = require("rescript/lib/js/js_dict.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var CssStyleRule$Ress = require("./CssStyleRule.js");

function make(rules) {
  return Js_dict.fromArray(Belt_Array.map(rules, CssStyleRule$Ress.make));
}

exports.make = make;
/* No side effect */
