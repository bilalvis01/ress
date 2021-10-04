// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../value/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "clear";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var value = CssString$Ress.clear;

function clear(v) {
  return Curry._2(declaration, property, value(v));
}

function clearUnion(v) {
  return Curry._2(declaration, property, v);
}

function clearString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  clear: clear,
  clearUnion: clearUnion,
  clearString: clearString
};

function clearFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  clearFn: clearFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
