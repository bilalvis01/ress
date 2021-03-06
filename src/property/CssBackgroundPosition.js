// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "backgroundPosition";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var bgPosition = CssString$Ress.Property.backgroundPosition;

var bgPosition2 = CssString$Ress.Property.backgroundPosition2;

var bgPosition3 = CssString$Ress.Property.backgroundPosition3;

var bgPosition4 = CssString$Ress.Property.backgroundPosition4;

var value = Curry.__1(bgPosition);

var value2 = Curry.__2(bgPosition2);

var value3 = Curry.__3(bgPosition3);

var value4 = Curry.__4(bgPosition4);

function backgroundPosition(v) {
  return Curry._2(declaration, property, value(v));
}

function backgroundPosition2(v1, v2) {
  return Curry._2(declaration, property, value2(v1, v2));
}

function backgroundPosition3(v1, v2, v3) {
  return Curry._2(declaration, property, value3(v1, v2, v3));
}

function backgroundPosition4(v1, v2, v3, v4) {
  return Curry._2(declaration, property, value4(v1, v2, v3, v4));
}

function backgroundPositionUnion(v) {
  return Curry._2(declaration, property, v);
}

function backgroundPositionString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  backgroundPosition: backgroundPosition,
  backgroundPosition2: backgroundPosition2,
  backgroundPosition3: backgroundPosition3,
  backgroundPosition4: backgroundPosition4,
  backgroundPositionUnion: backgroundPositionUnion,
  backgroundPositionString: backgroundPositionString
};

function backgroundPositionFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  backgroundPositionFn: backgroundPositionFn
};

exports.value = value;
exports.value2 = value2;
exports.value3 = value3;
exports.value4 = value4;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
