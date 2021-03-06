// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");
var CssBorderSideStyle$Ress = require("./CssBorderSideStyle.js");

var property = "borderRightStyle";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssBorderSideStyle$Ress.MakeValue({});

var value = include.value;

function borderRightStyle(v) {
  return Curry._2(declaration, property, Curry._1(value, v));
}

function borderRightStyleUnion(v) {
  return Curry._2(declaration, property, v);
}

function borderRightStyleString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  borderRightStyle: borderRightStyle,
  borderRightStyleUnion: borderRightStyleUnion,
  borderRightStyleString: borderRightStyleString
};

function borderRightStyleFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  borderRightStyleFn: borderRightStyleFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
