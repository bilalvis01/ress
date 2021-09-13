// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssBorderSideStyle$Ress = require("./CssBorderSideStyle.js");

var property = "borderBottomStyle";

var include = CssBorderSideStyle$Ress.MakeValue({});

var value = include.value;

function borderBottomStyle(v) {
  return {
          NAME: "Declaration",
          VAL: [
            property,
            Curry._1(value, v)
          ]
        };
}

function borderBottomStyleUnion(v) {
  return {
          NAME: "Declaration",
          VAL: [
            property,
            v
          ]
        };
}

function borderBottomStyleString(v) {
  return {
          NAME: "Declaration",
          VAL: [
            property,
            v
          ]
        };
}

var DeclarationHelper = {
  borderBottomStyle: borderBottomStyle,
  borderBottomStyleUnion: borderBottomStyleUnion,
  borderBottomStyleString: borderBottomStyleString
};

function borderBottomStyleFn(v) {
  return {
          NAME: "DeclarationFn",
          VAL: [
            property,
            v
          ]
        };
}

var DeclarationFnHelper = {
  borderBottomStyle: borderBottomStyle,
  borderBottomStyleUnion: borderBottomStyleUnion,
  borderBottomStyleString: borderBottomStyleString,
  borderBottomStyleFn: borderBottomStyleFn
};

exports.value = value;
exports.DeclarationHelper = DeclarationHelper;
exports.DeclarationFnHelper = DeclarationFnHelper;
/* include Not a pure module */
