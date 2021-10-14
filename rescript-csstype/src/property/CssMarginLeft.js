// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssMarginSide$Ress = require("./CssMarginSide.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "marginLeft";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssMarginSide$Ress.MakeValue({});

var value = include.value;

function marginLeft(v) {
  return Curry._2(declaration, property, Curry._1(value, v));
}

function marginLeftUnion(v) {
  return Curry._2(declaration, property, v);
}

function marginLeftString(v) {
  return Curry._2(declaration, property, v);
}

function marginLeftNumber(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  marginLeft: marginLeft,
  marginLeftUnion: marginLeftUnion,
  marginLeftString: marginLeftString,
  marginLeftNumber: marginLeftNumber
};

function marginLeftFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  marginLeftFn: marginLeftFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
