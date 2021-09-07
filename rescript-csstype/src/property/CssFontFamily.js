// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssValueString$Ress = require("../value/CssValueString.js");

var property = "fontFamily";

function Make(Type) {
  var value = CssValueString$Ress.fontFamily_global;
  var value2 = function (v1, v2) {
    return CssValueString$Ress.fontFamily(v1) + ", " + CssValueString$Ress.fontFamily(v2);
  };
  var value3 = function (v1, v2, v3) {
    return CssValueString$Ress.fontFamily(v1) + ", " + CssValueString$Ress.fontFamily(v2) + ", " + CssValueString$Ress.fontFamily(v3);
  };
  var value4 = function (v1, v2, v3, v4) {
    return CssValueString$Ress.fontFamily(v1) + ", " + CssValueString$Ress.fontFamily(v2) + ", " + CssValueString$Ress.fontFamily(v3) + ", " + CssValueString$Ress.fontFamily(v4);
  };
  var fontFamily = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              CssValueString$Ress.fontFamily_global(v)
            ]
          };
  };
  var fontFamily2 = function (v1, v2) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value2(v1, v2)
            ]
          };
  };
  var fontFamily3 = function (v1, v2, v3) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value3(v1, v2, v3)
            ]
          };
  };
  var fontFamily4 = function (v1, v2, v3, v4) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value4(v1, v2, v3, v4)
            ]
          };
  };
  var fontFamilyUnion = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var fontFamilyString = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationHelper = {
    fontFamily: fontFamily,
    fontFamily2: fontFamily2,
    fontFamily3: fontFamily3,
    fontFamily4: fontFamily4,
    fontFamilyUnion: fontFamilyUnion,
    fontFamilyString: fontFamilyString
  };
  var fontFamilyFn = function (v) {
    return {
            NAME: "DeclarationFn",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationFnHelper = {
    fontFamily: fontFamily,
    fontFamily2: fontFamily2,
    fontFamily3: fontFamily3,
    fontFamily4: fontFamily4,
    fontFamilyUnion: fontFamilyUnion,
    fontFamilyString: fontFamilyString,
    fontFamilyFn: fontFamilyFn
  };
  return {
          value: value,
          value2: value2,
          value3: value3,
          value4: value4,
          DeclarationHelper: DeclarationHelper,
          DeclarationFnHelper: DeclarationFnHelper
        };
}

exports.Make = Make;
/* No side effect */
