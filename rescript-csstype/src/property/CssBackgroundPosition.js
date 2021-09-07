// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssValueString$Ress = require("../value/CssValueString.js");

var property = "backgroundPosition";

function Make(Type) {
  var value = CssValueString$Ress.position;
  var value2 = function (v1, v2) {
    return CssValueString$Ress.position(v1) + ", " + CssValueString$Ress.position(v2);
  };
  var value3 = function (v1, v2, v3) {
    return CssValueString$Ress.position(v1) + ", " + CssValueString$Ress.position(v2) + ", " + CssValueString$Ress.position(v3);
  };
  var value4 = function (v1, v2, v3, v4) {
    return CssValueString$Ress.position(v1) + ", " + CssValueString$Ress.position(v2) + ", " + CssValueString$Ress.position(v3) + ", " + CssValueString$Ress.position(v4);
  };
  var backgroundPosition = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              CssValueString$Ress.position(v)
            ]
          };
  };
  var backgroundPosition2 = function (v1, v2) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value2(v1, v2)
            ]
          };
  };
  var backgroundPosition3 = function (v1, v2, v3) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value3(v1, v2, v3)
            ]
          };
  };
  var backgroundPosition4 = function (v1, v2, v3, v4) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              value4(v1, v2, v3, v4)
            ]
          };
  };
  var backgroundPositionUnion = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var backgroundPositionString = function (v) {
    return {
            NAME: "Declaration",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationHelper = {
    backgroundPosition: backgroundPosition,
    backgroundPosition2: backgroundPosition2,
    backgroundPosition3: backgroundPosition3,
    backgroundPosition4: backgroundPosition4,
    backgroundPositionUnion: backgroundPositionUnion,
    backgroundPositionString: backgroundPositionString
  };
  var backgroundPositionFn = function (v) {
    return {
            NAME: "DeclarationFn",
            VAL: [
              property,
              v
            ]
          };
  };
  var DeclarationFnHelper = {
    backgroundPosition: backgroundPosition,
    backgroundPosition2: backgroundPosition2,
    backgroundPosition3: backgroundPosition3,
    backgroundPosition4: backgroundPosition4,
    backgroundPositionUnion: backgroundPositionUnion,
    backgroundPositionString: backgroundPositionString,
    backgroundPositionFn: backgroundPositionFn
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
