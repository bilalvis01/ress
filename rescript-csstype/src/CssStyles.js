// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Js_dict = require("rescript/lib/js/js_dict.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var CssAtRule$Ress = require("./CssAtRule.js");
var CssSelector$Ress = require("./CssSelector.js");

function Make(funarg) {
  var Selector = CssSelector$Ress.Make({});
  var AtRule = CssAtRule$Ress.Make({});
  var make = function (rules) {
    return Js_dict.fromArray(Belt_Array.map(rules, (function (rule) {
                      if (rule.NAME === "FontFace") {
                        return Curry._1(AtRule.make, rule);
                      } else {
                        return Curry._1(Selector.make, rule);
                      }
                    })));
  };
  return {
          make: make
        };
}

exports.Make = Make;
/* No side effect */
