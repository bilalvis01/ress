// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "fontWeight";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var fontWeight = CssString$Ress.Property.fontWeight;

var value = Curry.__1(fontWeight);

function fontWeight$1(v) {
  return Curry._2(declaration, property, value(v));
}

function fontWeightUnion(v) {
  return Curry._2(declaration, property, v);
}

function fontWeightString(v) {
  return Curry._2(declaration, property, v);
}

function fontWeightInteger(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  fontWeight: fontWeight$1,
  fontWeightUnion: fontWeightUnion,
  fontWeightString: fontWeightString,
  fontWeightInteger: fontWeightInteger
};

function fontWeightFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  fontWeightFn: fontWeightFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
