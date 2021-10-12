// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "backgroundStyle";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var bgStyle = CssString$Ress.Property.backgroundStyle;

var bgStyle2 = CssString$Ress.Property.backgroundStyle2;

var bgStyle3 = CssString$Ress.Property.backgroundStyle3;

var bgStyle4 = CssString$Ress.Property.backgroundStyle4;

var value = Curry.__1(bgStyle);

var value2 = Curry.__2(bgStyle2);

var value3 = Curry.__3(bgStyle3);

var value4 = Curry.__4(bgStyle4);

function backgroundStyle(v) {
  return Curry._2(declaration, property, value(v));
}

function backgroundStyle2(v1, v2) {
  return Curry._2(declaration, property, value2(v1, v2));
}

function backgroundStyle3(v1, v2, v3) {
  return Curry._2(declaration, property, value3(v1, v2, v3));
}

function backgroundStyle4(v1, v2, v3, v4) {
  return Curry._2(declaration, property, value4(v1, v2, v3, v4));
}

function backgroundStyleUnion(v) {
  return Curry._2(declaration, property, v);
}

function backgroundStyleString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  backgroundStyle: backgroundStyle,
  backgroundStyle2: backgroundStyle2,
  backgroundStyle3: backgroundStyle3,
  backgroundStyle4: backgroundStyle4,
  backgroundStyleUnion: backgroundStyleUnion,
  backgroundStyleString: backgroundStyleString
};

function backgroundStyleFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  backgroundStyleFn: backgroundStyleFn
};

exports.value = value;
exports.value2 = value2;
exports.value3 = value3;
exports.value4 = value4;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
