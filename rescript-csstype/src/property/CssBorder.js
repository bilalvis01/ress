// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");
var CssPropertyValueString$Ress = require("../value/CssPropertyValueString.js");

var property = "border";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

function MakeValue(Type) {
  var value = CssPropertyValueString$Ress.border;
  return {
          value: value
        };
}

var value = CssPropertyValueString$Ress.border;

function border(width, color, style) {
  return Curry._2(declaration, property, value(width, color, style));
}

function borderUnion(v) {
  return Curry._2(declaration, property, v);
}

function borderString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  border: border,
  borderUnion: borderUnion,
  borderString: borderString
};

function borderFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  borderFn: borderFn
};

exports.MakeValue = MakeValue;
exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
