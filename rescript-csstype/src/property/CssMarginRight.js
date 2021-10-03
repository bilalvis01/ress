// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssMarginSide$Ress = require("./CssMarginSide.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "marginRight";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var include = CssMarginSide$Ress.MakeValue({});

var value = include.value;

function marginRight(v) {
  return Curry._2(declaration, property, Curry._1(value, v));
}

function marginRightUnion(v) {
  return Curry._2(declaration, property, v);
}

function marginRightString(v) {
  return Curry._2(declaration, property, v);
}

function marginRightNumber(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  marginRight: marginRight,
  marginRightUnion: marginRightUnion,
  marginRightString: marginRightString,
  marginRightNumber: marginRightNumber
};

function marginRightFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  marginRightFn: marginRightFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
