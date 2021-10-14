// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssBorder$Ress = require("./CssBorder.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "borderLeft";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssBorder$Ress.MakeValue({});

var value = include.value;

function borderLeft(width, color, style) {
  return Curry._2(declaration, property, Curry._3(value, width, color, style));
}

function borderLeftUnion(v) {
  return Curry._2(declaration, property, v);
}

function borderLeftString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  borderLeft: borderLeft,
  borderLeftUnion: borderLeftUnion,
  borderLeftString: borderLeftString
};

function borderLeftFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  borderLeftFn: borderLeftFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
