// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssString$Ress = require("../basic/CssString.js");
var CssDeclaration$Ress = require("../declaration/CssDeclaration.js");
var CssDeclarationFn$Ress = require("../declaration/CssDeclarationFn.js");

var property = "backgroundAttachment";

var declaration = CssDeclaration$Ress.Helper.declaration;

var declarationFn = CssDeclarationFn$Ress.Helper.declarationFn;

var bgAtt = CssString$Ress.Property.backgroundAttachment;

var bgAtt2 = CssString$Ress.Property.backgroundAttachment2;

var bgAtt3 = CssString$Ress.Property.backgroundAttachment3;

var bgAtt4 = CssString$Ress.Property.backgroundAttachment4;

var value = Curry.__1(bgAtt);

var value2 = Curry.__2(bgAtt2);

var value3 = Curry.__3(bgAtt3);

var value4 = Curry.__4(bgAtt4);

function backgroundAttachment(v) {
  return Curry._2(declaration, property, value(v));
}

function backgroundAttachment2(v1, v2) {
  return Curry._2(declaration, property, value2(v1, v2));
}

function backgroundAttachment3(v1, v2, v3) {
  return Curry._2(declaration, property, value3(v1, v2, v3));
}

function backgroundAttachment4(v1, v2, v3, v4) {
  return Curry._2(declaration, property, value4(v1, v2, v3, v4));
}

function backgroundAttachmentUnion(v) {
  return Curry._2(declaration, property, v);
}

function backgroundAttachmentString(v) {
  return Curry._2(declaration, property, v);
}

var DeclarationHelper = {
  backgroundAttachment: backgroundAttachment,
  backgroundAttachment2: backgroundAttachment2,
  backgroundAttachment3: backgroundAttachment3,
  backgroundAttachment4: backgroundAttachment4,
  backgroundAttachmentUnion: backgroundAttachmentUnion,
  backgroundAttachmentString: backgroundAttachmentString
};

function backgroundAttachmentFn(v) {
  return Curry._2(declarationFn, property, v);
}

var DeclarationFnHelper = {
  backgroundAttachmentFn: backgroundAttachmentFn
};

exports.value = value;
exports.value2 = value2;
exports.value3 = value3;
exports.value4 = value4;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* No side effect */
