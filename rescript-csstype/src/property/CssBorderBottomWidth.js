// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssBorderSideWidth$Ress = require("./CssBorderSideWidth.js");

var property = "borderBottomWidth";

function Make(Type) {
  var include = CssBorderSideWidth$Ress.Make({});
  var value = include.value;
  var borderBottomWidth = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              Curry._1(value, v)
            ]
          };
  };
  var borderBottomWidthUnion = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var borderBottomWidthString = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationHelper = {
    borderBottomWidth: borderBottomWidth,
    borderBottomWidthUnion: borderBottomWidthUnion,
    borderBottomWidthString: borderBottomWidthString
  };
  var borderBottomWidthFn = function (v) {
    return {
            NAME: "DeclarationFn",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationFnHelper = {
    borderBottomWidth: borderBottomWidth,
    borderBottomWidthUnion: borderBottomWidthUnion,
    borderBottomWidthString: borderBottomWidthString,
    borderBottomWidthFn: borderBottomWidthFn
  };
  return {
          value: value,
          DeclarationHelper: DeclarationHelper,
          DeclarationFnHelper: DeclarationFnHelper
        };
}

exports.Make = Make;
/* No side effect */
