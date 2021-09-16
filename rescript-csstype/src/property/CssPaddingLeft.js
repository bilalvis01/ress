// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssPaddingSide$Ress = require("./CssPaddingSide.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "paddingLeft";

var include = CssPaddingSide$Ress.MakeValue({});

var value = include.value;

function paddingLeft(v) {
  return CssDeclaration$Ress.Helper.declaration(property, Curry._1(value, v));
}

function paddingLeftUnion(v) {
  return CssDeclaration$Ress.Helper.declaration(property, v);
}

function paddingLeftString(v) {
  return CssDeclaration$Ress.Helper.declaration(property, v);
}

function paddingLeftNumber(v) {
  return CssDeclaration$Ress.Helper.declaration(property, v);
}

var DeclarationHelper = {
  paddingLeft: paddingLeft,
  paddingLeftUnion: paddingLeftUnion,
  paddingLeftString: paddingLeftString,
  paddingLeftNumber: paddingLeftNumber
};

function paddingLeftFn(v) {
  return CssDeclarationFn$Ress.Helper.declarationFn(property, v);
}

var DeclarationFnHelper = {
  paddingLeft: paddingLeft,
  paddingLeftUnion: paddingLeftUnion,
  paddingLeftString: paddingLeftString,
  paddingLeftNumber: paddingLeftNumber,
  paddingLeftFn: paddingLeftFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
