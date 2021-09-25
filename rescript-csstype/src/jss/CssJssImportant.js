// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

function important(v) {
  return {
          NAME: "Important",
          VAL: v
        };
}

var Helper = {
  important: important
};

function Make(funarg) {
  var makeValueImportant = function (value) {
    return (function (value) {                
          if (Array.isArray(value)) {
            let val = value.map(item => {
              if (Array.isArray(item)) {
                return item;
              }

              return [item];
            });
            
            return [...val, '!important'];
          }

          return [[value], '!important'];
        })(value);
  };
  var map = function (param) {
    return [
            param[0],
            makeValueImportant(param[1])
          ];
  };
  var Declaration = CssDeclaration$Ress.Make({
        map: map
      });
  var makeValueImportant$1 = function (value) {
    return (function (valueFn) {
          return function (data) {
            let value = valueFn(data)
        
            if (Array.isArray(value)) {
              let val = value
                .map(item => {
                  if (Array.isArray(item)) {
                    return item
                  }

                  return [item]
                });
              
              return [...val, '!important'];
            }

            return [[value], '!important'];
          }
        })(value);
  };
  var map$1 = function (param) {
    return [
            param[0],
            makeValueImportant$1(param[1])
          ];
  };
  var DeclarationFn = CssDeclarationFn$Ress.Make({
        map: map$1
      });
  var make = function (v) {
    var v$1 = v.VAL;
    if (v$1.NAME === "DeclarationFn") {
      return Curry._1(DeclarationFn.make, v$1);
    } else {
      return Curry._1(Declaration.make, v$1);
    }
  };
  return {
          make: make
        };
}

exports.Make = Make;
exports.Helper = Helper;
/* No side effect */
