// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "fontFamily";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var fontFamily = CssString$Ress.Property.fontFamily;

var fontFamily2 = CssString$Ress.Property.fontFamily2;

var fontFamily3 = CssString$Ress.Property.fontFamily3;

var fontFamily4 = CssString$Ress.Property.fontFamily4;

var value = Curry.__1(fontFamily);

var value2 = Curry.__2(fontFamily2);

var value3 = Curry.__3(fontFamily3);

var value4 = Curry.__4(fontFamily4);

function fontFamily$1(v) {
  return Curry._2(declaration, property, value(v));
}

function fontFamily2$1(v1, v2) {
  return Curry._2(declaration, property, value2(v1, v2));
}

function fontFamily3$1(v1, v2, v3) {
  return Curry._2(declaration, property, value3(v1, v2, v3));
}

function fontFamily4$1(v1, v2, v3, v4) {
  return Curry._2(declaration, property, value4(v1, v2, v3, v4));
}

function fontFamilyUnion(v) {
  return Curry._2(declaration, property, v);
}

function fontFamilyString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  fontFamily: fontFamily$1,
  fontFamily2: fontFamily2$1,
  fontFamily3: fontFamily3$1,
  fontFamily4: fontFamily4$1,
  fontFamilyUnion: fontFamilyUnion,
  fontFamilyString: fontFamilyString
};

function fontFamilyFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  fontFamilyFn: fontFamilyFn
};

exports.value = value;
exports.value2 = value2;
exports.value3 = value3;
exports.value4 = value4;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
