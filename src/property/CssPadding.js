// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "padding";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var p = CssString$Ress.Property.padding;

var p2 = CssString$Ress.Property.padding2;

var p3 = CssString$Ress.Property.padding3;

var p4 = CssString$Ress.Property.padding4;

var value = Curry.__1(p);

var value2 = Curry.__2(p2);

var value3 = Curry.__3(p3);

var value4 = Curry.__4(p4);

function padding(v) {
  return Curry._2(declaration, property, value(v));
}

function padding2(tb, lr) {
  return Curry._2(declaration, property, value2(tb, lr));
}

function padding3(top, lr, bottom) {
  return Curry._2(declaration, property, value3(top, lr, bottom));
}

function padding4(top, right, bottom, left) {
  return Curry._2(declaration, property, value4(top, right, bottom, left));
}

function paddingUnion(v) {
  return Curry._2(declaration, property, v);
}

function paddingString(v) {
  return Curry._2(declaration, property, v);
}

function paddingNumber(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  padding: padding,
  padding2: padding2,
  padding3: padding3,
  padding4: padding4,
  paddingUnion: paddingUnion,
  paddingString: paddingString,
  paddingNumber: paddingNumber
};

function paddingFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  paddingFn: paddingFn
};

exports.value = value;
exports.value2 = value2;
exports.value3 = value3;
exports.value4 = value4;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
