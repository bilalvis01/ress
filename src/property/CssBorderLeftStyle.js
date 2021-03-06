// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");
var CssBorderSideStyle$Ress = require("./CssBorderSideStyle.js");

var property = "borderLeftStyle";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssBorderSideStyle$Ress.MakeValue({});

var value = include.value;

function borderLeftStyle(v) {
  return Curry._2(declaration, property, Curry._1(value, v));
}

function borderLeftStyleUnion(v) {
  return Curry._2(declaration, property, v);
}

function borderLeftStyleString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  borderLeftStyle: borderLeftStyle,
  borderLeftStyleUnion: borderLeftStyleUnion,
  borderLeftStyleString: borderLeftStyleString
};

function borderLeftStyleFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  borderLeftStyleFn: borderLeftStyleFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
