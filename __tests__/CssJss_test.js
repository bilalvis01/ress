// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jss = require("jss").default;
var Curry = require("rescript/lib/js/curry.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var CssJss$Ress = require("../src/jss/CssJss.js");
var CssColor$Ress = require("../src/property/CssColor.js");
var JssPresetDefault = require("jss-preset-default").default;

Jss.setup(JssPresetDefault());

var data = {
  space: 24,
  color: /* Blue */0
};

test("jss", (function () {
        var s = Curry._1(CssJss$Ress.styles, [
              Curry._2(CssJss$Ress.rule, "app", [
                    Curry._2(CssJss$Ress.rule, "& .wrapper", [
                          Curry._8(CssJss$Ress.background, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Curry._1(CssJss$Ress.url, "image.png")),
                          Curry._1(CssJss$Ress.color, Curry._3(CssJss$Ress.rgb, 255, 255, 255)),
                          Curry._1(CssJss$Ress.paddingTop, Curry._1(CssJss$Ress.px, 24)),
                          Curry._1(CssJss$Ress.paddingBottom, Curry._1(CssJss$Ress.px, 24)),
                          Curry._1(CssJss$Ress.paddingLeft, Curry._1(CssJss$Ress.px, 40)),
                          Curry._1(CssJss$Ress.paddingRight, Curry._1(CssJss$Ress.px, 40)),
                          Curry._1(CssJss$Ress.marginNumber, 24)
                        ]),
                    Curry._2(CssJss$Ress.rule, "& .button", [
                          Curry._1(CssJss$Ress.color, Curry._4(CssJss$Ress.hsla, 360, Curry._1(CssJss$Ress.pct, 100), Curry._1(CssJss$Ress.pct, 50), 0.5)),
                          Curry._1(CssJss$Ress.hover, [Curry._8(CssJss$Ress.background, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "blue")])
                        ]),
                    Curry._1(CssJss$Ress.hover, [Curry._1(CssJss$Ress.color, "blue")])
                  ]),
              Curry._2(CssJss$Ress.rule, "header", [
                    CssJss$Ress.important(Curry._1(CssJss$Ress.colorFn, (function (data) {
                                return Belt_Option.map(data.color, (function (color) {
                                              if (color) {
                                                return CssColor$Ress.value("red");
                                              } else {
                                                return CssColor$Ress.value("blue");
                                              }
                                            }));
                              }))),
                    Curry._1(CssJss$Ress.marginFn, (function (data) {
                            return Belt_Option.map(data.space, (function (space) {
                                          return space;
                                        }));
                          }))
                  ])
            ]);
        expect(Jss.createStyleSheet(s).update(data).toString()).toMatchSnapshot();
        
      }));

exports.data = data;
/*  Not a pure module */