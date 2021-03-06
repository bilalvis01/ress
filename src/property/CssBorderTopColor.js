// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");
var CssBorderSideColor$Ress = require("./CssBorderSideColor.js");

var property = "borderTopColor";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssBorderSideColor$Ress.MakeValue({});

var value = include.value;

function borderTopColor(v) {
  return Curry._2(declaration, property, Curry._1(value, v));
}

function borderTopColorUnion(v) {
  return Curry._2(declaration, property, v);
}

function borderTopColorString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  borderTopColor: borderTopColor,
  borderTopColorUnion: borderTopColorUnion,
  borderTopColorString: borderTopColorString
};

function borderTopColorFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  borderTopColorFn: borderTopColorFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
