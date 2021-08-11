// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Css$Ress = require("../src/Css.js");
var CssValueString$Ress = require("../src/CssValueString.js");

describe("Numeric data types", (function () {
        test("number", (function () {
                expect(CssValueString$Ress.num(1)).toBe("1");
                expect(CssValueString$Ress.number(Css$Ress.num(1))).toBe("1");
                
              }));
        test("integer", (function () {
                expect(CssValueString$Ress.$$int(1)).toBe("1");
                expect(CssValueString$Ress.integer(Css$Ress.$$int(1))).toBe("1");
                
              }));
        test("percentage", (function () {
                expect(CssValueString$Ress.pct(1)).toBe("1%");
                expect(CssValueString$Ress.percentage(Css$Ress.pct(1))).toBe("1%");
                
              }));
        test("ratio", (function () {
                expect(CssValueString$Ress.ratio(Css$Ress.ratio(10, 10))).toBe("10/10");
                
              }));
        test("flex", (function () {
                expect(CssValueString$Ress.fr(1)).toBe("1fr");
                expect(CssValueString$Ress.flexUnit(Css$Ress.fr(1))).toBe("1fr");
                
              }));
        
      }));

describe("Quantities data types", (function () {
        test("length", (function () {
                expect(CssValueString$Ress.ch(1)).toBe("1ch");
                expect(CssValueString$Ress.em(1)).toBe("1em");
                expect(CssValueString$Ress.ex(1)).toBe("1ex");
                expect(CssValueString$Ress.rem(1)).toBe("1rem");
                expect(CssValueString$Ress.vh(1)).toBe("1vh");
                expect(CssValueString$Ress.vw(1)).toBe("1vw");
                expect(CssValueString$Ress.vmin(1)).toBe("1vmin");
                expect(CssValueString$Ress.vmax(1)).toBe("1vmax");
                expect(CssValueString$Ress.px(1)).toBe("1px");
                expect(CssValueString$Ress.cm(1)).toBe("1cm");
                expect(CssValueString$Ress.mm(1)).toBe("1mm");
                expect(CssValueString$Ress.inch(1)).toBe("1in");
                expect(CssValueString$Ress.pc(1)).toBe("1pc");
                expect(CssValueString$Ress.pt(1)).toBe("1pt");
                expect(CssValueString$Ress.length(Css$Ress.mm(1))).toBe("1mm");
                expect(CssValueString$Ress.length(Css$Ress.cm(1))).toBe("1cm");
                
              }));
        test("angle", (function () {
                expect(CssValueString$Ress.deg(1)).toBe("1deg");
                expect(CssValueString$Ress.grad(1)).toBe("1grad");
                expect(CssValueString$Ress.rad(1)).toBe("1rad");
                expect(CssValueString$Ress.turn(1)).toBe("1turn");
                expect(CssValueString$Ress.angle(Css$Ress.deg(1))).toBe("1deg");
                expect(CssValueString$Ress.angle(Css$Ress.grad(1))).toBe("1grad");
                
              }));
        test("time", (function () {
                expect(CssValueString$Ress.s(10)).toBe("10s");
                expect(CssValueString$Ress.ms(10)).toBe("10ms");
                expect(CssValueString$Ress.time(Css$Ress.s(10))).toBe("10s");
                expect(CssValueString$Ress.time(Css$Ress.ms(10))).toBe("10ms");
                
              }));
        test("frequency", (function () {
                expect(CssValueString$Ress.hz(50)).toBe("50Hz");
                expect(CssValueString$Ress.kHz(100)).toBe("100kHz");
                expect(CssValueString$Ress.kHz(-100)).toBe("-100kHz");
                expect(CssValueString$Ress.frequency(Css$Ress.hz(50))).toBe("50Hz");
                expect(CssValueString$Ress.frequency(Css$Ress.kHz(100))).toBe("100kHz");
                
              }));
        test("resolution", (function () {
                expect(CssValueString$Ress.dpi(1)).toBe("1dpi");
                expect(CssValueString$Ress.dpcm(1)).toBe("1dpcm");
                expect(CssValueString$Ress.dppx(1)).toBe("1dppx");
                expect(CssValueString$Ress.x(1)).toBe("1x");
                expect(CssValueString$Ress.resolution(Css$Ress.dpi(1))).toBe("1dpi");
                
              }));
        
      }));

describe("Combination data types", (function () {
        test("length_percentage", (function () {
                expect(CssValueString$Ress.length_percentage(Css$Ress.mm(1))).toBe("1mm");
                expect(CssValueString$Ress.length_percentage(Css$Ress.pct(1))).toBe("1%");
                
              }));
        test("frequency_percentage", (function () {
                expect(CssValueString$Ress.frequency_percentage(Css$Ress.hz(1))).toBe("1Hz");
                expect(CssValueString$Ress.frequency_percentage(Css$Ress.pct(1))).toBe("1%");
                
              }));
        test("angle_percentage", (function () {
                expect(CssValueString$Ress.angle_percentage(Css$Ress.deg(1))).toBe("1deg");
                expect(CssValueString$Ress.angle_percentage(Css$Ress.pct(1))).toBe("1%");
                
              }));
        test("time_percentage", (function () {
                expect(CssValueString$Ress.time_percentage(Css$Ress.s(1))).toBe("1s");
                expect(CssValueString$Ress.time_percentage(Css$Ress.pct(1))).toBe("1%");
                
              }));
        
      }));

describe("Color data types", (function () {
        test("color", (function () {
                expect(CssValueString$Ress.hue(Css$Ress.deg(1))).toBe("1deg");
                expect(CssValueString$Ress.alpha(Css$Ress.pct(1))).toBe("1%");
                expect(CssValueString$Ress.alpha(Css$Ress.num(1))).toBe("1");
                expect(CssValueString$Ress.rgbParam(Css$Ress.pct(1))).toBe("1%");
                expect(CssValueString$Ress.rgbParam(Css$Ress.num(1))).toBe("1");
                expect(CssValueString$Ress.rgb(Css$Ress.num(1), Css$Ress.num(1), Css$Ress.pct(10))).toBe("rgb(1, 1, 10%)");
                expect(CssValueString$Ress.rgba(Css$Ress.num(1), Css$Ress.num(1), Css$Ress.pct(10), Css$Ress.num(1))).toBe("rgba(1, 1, 10%, 1)");
                expect(CssValueString$Ress.rgba(Css$Ress.num(0), Css$Ress.num(0), Css$Ress.num(0), Css$Ress.num(1))).toBe("rgba(0, 0, 0, 1)");
                expect(CssValueString$Ress.hexColor("000000")).toBe("#000000");
                expect(CssValueString$Ress.color(Css$Ress.hexColor("000000"))).toBe("#000000");
                expect(CssValueString$Ress.color(Css$Ress.rgb(10, 10, 10))).toBe("rgb(10, 10, 10)");
                
              }));
        test("color_global", (function () {
                expect(CssValueString$Ress.color_global(Css$Ress.rgb(244, 244, 244))).toBe("rgb(244, 244, 244)");
                expect(CssValueString$Ress.color_global("initial")).toBe("initial");
                
              }));
        
      }));

describe("Line", (function () {
        test("lineWidth", (function () {
                expect(CssValueString$Ress.lineWidth("thick")).toBe("thick");
                expect(CssValueString$Ress.lineWidth(Css$Ress.mm(10))).toBe("10mm");
                
              }));
        test("lineWidth", (function () {
                expect(CssValueString$Ress.lineWidth_global("thick")).toBe("thick");
                expect(CssValueString$Ress.lineWidth_global("initial")).toBe("initial");
                
              }));
        
      }));

describe("transformOrigin", (function () {
        test("transformOrigin", (function () {
                expect(CssValueString$Ress.transformOrigin("left")).toBe("left");
                expect(CssValueString$Ress.transformOrigin(Css$Ress.px(20))).toBe("20px");
                expect(CssValueString$Ress.transformOrigin({
                            NAME: "TransformOrigin2",
                            VAL: [
                              "left",
                              "top"
                            ]
                          })).toBe("left top");
                expect(CssValueString$Ress.transformOrigin({
                            NAME: "TransformOrigin3",
                            VAL: [
                              "left",
                              "top",
                              Css$Ress.px(10)
                            ]
                          })).toBe("left top 10px");
                
              }));
        
      }));

describe("Image data types", (function () {
        test("gradientLineDirection", (function () {
                expect(CssValueString$Ress.gradientLineAngle("toTop")).toBe("to top");
                expect(CssValueString$Ress.gradientLineAngle("toTopLeft")).toBe("to top left");
                expect(CssValueString$Ress.gradientLineAngle(Css$Ress.turn(0.25))).toBe("0.25turn");
                
              }));
        test("linearColorStop", (function () {
                expect(CssValueString$Ress.linearColorStop("red")).toBe("red");
                expect(CssValueString$Ress.linearColorStop(Css$Ress.rgb(255, 255, 255))).toBe("rgb(255, 255, 255)");
                expect(CssValueString$Ress.linearColorStop(Css$Ress.pct(10))).toBe("10%");
                expect(CssValueString$Ress.linearColorStop(Css$Ress.px(25))).toBe("25px");
                expect(CssValueString$Ress.linearColorStop(Css$Ress.linearColorStop2("red", Css$Ress.pct(10)))).toBe("red 10%");
                expect(CssValueString$Ress.linearColorStop(Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10), Css$Ress.pct(50)))).toBe("rgb(255, 255, 255) 10% 50%");
                
              }));
        test("linearGradient", (function () {
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient(undefined, Css$Ress.rgb(0, 0, 0)))).toBe("linear-gradient(rgb(0, 0, 0))");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient(Css$Ress.turn(0.25), Css$Ress.rgb(0, 0, 0)))).toBe("linear-gradient(0.25turn, rgb(0, 0, 0))");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%)");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient2(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%)");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient3(undefined, Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("linear-gradient(rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient3(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient3(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.pct(30), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, 30%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.linearGradient(Css$Ress.linearGradient4(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60)), Css$Ress.linearColorStop3("red", Css$Ress.pct(70), Css$Ress.pct(100))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%, red 70% 100%)");
                
              }));
        test("repeatingLinearGradient", (function () {
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient(undefined, Css$Ress.rgb(0, 0, 0)))).toBe("repeating-linear-gradient(rgb(0, 0, 0))");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient(Css$Ress.turn(0.25), Css$Ress.rgb(0, 0, 0)))).toBe("repeating-linear-gradient(0.25turn, rgb(0, 0, 0))");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10))))).toBe("repeating-linear-gradient(0.25turn, rgb(255, 255, 255) 10%)");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient2(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40))))).toBe("repeating-linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%)");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient3(undefined, Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("repeating-linear-gradient(rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient3(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("repeating-linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient3(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.pct(30), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("repeating-linear-gradient(0.25turn, rgb(255, 255, 255) 10%, 30%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.repeatingLinearGradient(Css$Ress.repeatingLinearGradient4(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60)), Css$Ress.linearColorStop3("red", Css$Ress.pct(70), Css$Ress.pct(100))))).toBe("repeating-linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%, red 70% 100%)");
                
              }));
        test("radialGradient", (function () {
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient(undefined, undefined, undefined, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(#9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient(undefined, "circle", undefined, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(circle, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", "circle", undefined, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(circle at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", "circle", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(circle 10px at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", "ellipse", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(ellipse at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", undefined, {
                                NAME: "Ellipse",
                                VAL: [
                                  Css$Ress.px(10),
                                  Css$Ress.px(10)
                                ]
                              }, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(10px 10px at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", "ellipse", {
                                NAME: "Ellipse",
                                VAL: [
                                  Css$Ress.px(10),
                                  Css$Ress.px(10)
                                ]
                              }, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(ellipse 10px 10px at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient("center", "ellipse", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(ellipse at center, #9198e5)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient2(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red"))).toBe("radial-gradient(circle, #9198e5, red)");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient3(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red", Css$Ress.rgb(255, 255, 255)))).toBe("radial-gradient(circle, #9198e5, red, rgb(255, 255, 255))");
                expect(CssValueString$Ress.radialGradient(Css$Ress.radialGradient4(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red", Css$Ress.rgb(255, 255, 255), Css$Ress.linearColorStop2("blue", Css$Ress.pct(10))))).toBe("radial-gradient(circle, #9198e5, red, rgb(255, 255, 255), blue 10%)");
                
              }));
        test("repeatingRadialGradient", (function () {
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient(undefined, undefined, undefined, Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(#9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient(undefined, "circle", undefined, Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(circle, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", "circle", undefined, Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(circle at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", "circle", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(circle 10px at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", "ellipse", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(ellipse at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", undefined, {
                                NAME: "Ellipse",
                                VAL: [
                                  Css$Ress.px(10),
                                  Css$Ress.px(10)
                                ]
                              }, Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(10px 10px at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", "ellipse", {
                                NAME: "Ellipse",
                                VAL: [
                                  Css$Ress.px(10),
                                  Css$Ress.px(10)
                                ]
                              }, Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(ellipse 10px 10px at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient("center", "ellipse", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(ellipse at center, #9198e5)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient2(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red"))).toBe("repeating-radial-gradient(circle, #9198e5, red)");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient3(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red", Css$Ress.rgb(255, 255, 255)))).toBe("repeating-radial-gradient(circle, #9198e5, red, rgb(255, 255, 255))");
                expect(CssValueString$Ress.repeatingRadialGradient(Css$Ress.repeatingRadialGradient4(undefined, "circle", undefined, Css$Ress.hexColor("9198e5"), "red", Css$Ress.rgb(255, 255, 255), Css$Ress.linearColorStop2("blue", Css$Ress.pct(10))))).toBe("repeating-radial-gradient(circle, #9198e5, red, rgb(255, 255, 255), blue 10%)");
                
              }));
        test("conicGradient", (function () {
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient(undefined, undefined, "red"))).toBe("conic-gradient(red)");
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient(Css$Ress.deg(360), undefined, "red"))).toBe("conic-gradient(from 360deg, red)");
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient(Css$Ress.deg(360), Css$Ress.px(10), "red"))).toBe("conic-gradient(from 360deg at 10px, red)");
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient2(undefined, undefined, "red", "blue"))).toBe("conic-gradient(red, blue)");
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient3(undefined, undefined, "red", "blue", "yellow"))).toBe("conic-gradient(red, blue, yellow)");
                expect(CssValueString$Ress.conicGradient(Css$Ress.conicGradient4(undefined, undefined, "red", "blue", "yellow", Css$Ress.rgb(250, 250, 250)))).toBe("conic-gradient(red, blue, yellow, rgb(250, 250, 250))");
                
              }));
        test("repeatingConicGradient", (function () {
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient(undefined, undefined, "red"))).toBe("repeating-conic-gradient(red)");
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient(Css$Ress.deg(360), undefined, "red"))).toBe("repeating-conic-gradient(from 360deg, red)");
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient(Css$Ress.deg(360), Css$Ress.px(10), "red"))).toBe("repeating-conic-gradient(from 360deg at 10px, red)");
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient2(undefined, undefined, "red", "blue"))).toBe("repeating-conic-gradient(red, blue)");
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient3(undefined, undefined, "red", "blue", "yellow"))).toBe("repeating-conic-gradient(red, blue, yellow)");
                expect(CssValueString$Ress.repeatingConicGradient(Css$Ress.repeatingConicGradient4(undefined, undefined, "red", "blue", "yellow", Css$Ress.rgb(250, 250, 250)))).toBe("repeating-conic-gradient(red, blue, yellow, rgb(250, 250, 250))");
                
              }));
        test("gradient", (function () {
                expect(CssValueString$Ress.gradient(Css$Ress.linearGradient3(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.pct(30), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, 30%, rgb(255, 255, 255) 50% 60%)");
                expect(CssValueString$Ress.gradient(Css$Ress.linearGradient4(Css$Ress.turn(0.25), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(10)), Css$Ress.linearColorStop2(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(40)), Css$Ress.linearColorStop3(Css$Ress.rgb(255, 255, 255), Css$Ress.pct(50), Css$Ress.pct(60)), Css$Ress.linearColorStop3("red", Css$Ress.pct(70), Css$Ress.pct(100))))).toBe("linear-gradient(0.25turn, rgb(255, 255, 255) 10%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 50% 60%, red 70% 100%)");
                expect(CssValueString$Ress.gradient(Css$Ress.repeatingLinearGradient(Css$Ress.deg(360), "red"))).toBe("repeating-linear-gradient(360deg, red)");
                expect(CssValueString$Ress.gradient(Css$Ress.radialGradient("center", "circle", undefined, Css$Ress.hexColor("9198e5")))).toBe("radial-gradient(circle at center, #9198e5)");
                expect(CssValueString$Ress.gradient(Css$Ress.repeatingRadialGradient("center", "circle", Css$Ress.px(10), Css$Ress.hexColor("9198e5")))).toBe("repeating-radial-gradient(circle 10px at center, #9198e5)");
                expect(CssValueString$Ress.gradient(Css$Ress.conicGradient(Css$Ress.deg(360), Css$Ress.px(10), "red"))).toBe("conic-gradient(from 360deg at 10px, red)");
                expect(CssValueString$Ress.gradient(Css$Ress.repeatingConicGradient(Css$Ress.deg(360), Css$Ress.px(10), "red"))).toBe("repeating-conic-gradient(from 360deg at 10px, red)");
                
              }));
        test("url", (function () {
                expect(CssValueString$Ress.url(Css$Ress.url("myimage.png"))).toBe("url(\"myimage.png\")");
                
              }));
        test("imageSrc", (function () {
                expect(CssValueString$Ress.imageSrc(Css$Ress.url("myimage.png"))).toBe("url(\"myimage.png\")");
                expect(CssValueString$Ress.imageSrc(Css$Ress.src("myimage.png"))).toBe("\"myimage.png\"");
                
              }));
        test("image", (function () {
                expect(CssValueString$Ress.image(Css$Ress.image(undefined, undefined, Css$Ress.src("myimage.webp#xywh=0,20,40,60")))).toBe("image(\"myimage.webp#xywh=0,20,40,60\")");
                expect(CssValueString$Ress.image(Css$Ress.image(undefined, undefined, Css$Ress.url("myimage.png")))).toBe("image(url(\"myimage.png\"))");
                expect(CssValueString$Ress.image(Css$Ress.image(undefined, undefined, Css$Ress.rgba(0, 0, 0, 0.25)))).toBe("image(rgba(0, 0, 0, 0.25))");
                expect(CssValueString$Ress.image(Css$Ress.image(undefined, Css$Ress.rgba(0, 0, 0, 0.25), "red"))).toBe("image(red)");
                expect(CssValueString$Ress.image(Css$Ress.image("ltr", undefined, Css$Ress.src("myimage.png")))).toBe("image(ltr \"myimage.png\")");
                expect(CssValueString$Ress.image(Css$Ress.image("ltr", "red", Css$Ress.src("myimage.png")))).toBe("image(ltr \"myimage.png\", red)");
                
              }));
        test("bgSize", (function () {
                expect(CssValueString$Ress.bgSize("cover")).toBe("cover");
                expect(CssValueString$Ress.bgSize(Css$Ress.px(24))).toBe("24px");
                expect(CssValueString$Ress.bgSize(Css$Ress.bgSize2("auto", Css$Ress.px(24)))).toBe("auto 24px");
                expect(CssValueString$Ress.bgSize(Css$Ress.bgSize2(Css$Ress.px(24), Css$Ress.px(24)))).toBe("24px 24px");
                
              }));
        test("position", (function () {
                expect(CssValueString$Ress.position("center")).toBe("center");
                expect(CssValueString$Ress.position(Css$Ress.px(20))).toBe("20px");
                expect(CssValueString$Ress.position(Css$Ress.position2("left", "top"))).toBe("left top");
                expect(CssValueString$Ress.position(Css$Ress.position3("left", "top", Css$Ress.pct(10)))).toBe("left top 10%");
                expect(CssValueString$Ress.position(Css$Ress.position3("left", Css$Ress.pct(20), "bottom"))).toBe("left 20% bottom");
                expect(CssValueString$Ress.position(Css$Ress.position4("right", Css$Ress.pct(35), "bottom", Css$Ress.pct(45)))).toBe("right 35% bottom 45%");
                
              }));
        
      }));

describe("background", (function () {
        test("background", (function () {
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, "red")).toBe("red");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, Css$Ress.rgb(255, 255, 255))).toBe("rgb(255, 255, 255)");
                expect(CssValueString$Ress.background("red", undefined, undefined, undefined, undefined, undefined, undefined, Css$Ress.rgb(255, 255, 255))).toBe("rgb(255, 255, 255)");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, Css$Ress.url("myimage.png"))).toBe("url(\"myimage.png\")");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, "repeatY", undefined, undefined, undefined, Css$Ress.url("test.jpg"))).toBe("url(\"test.jpg\") repeat-y");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, "borderBox", undefined, "red")).toBe("red border-box");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, "borderBox", "paddingBox", "red")).toBe("red border-box padding-box");
                expect(CssValueString$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, "paddingBox", "red")).toBe("red");
                expect(CssValueString$Ress.background(undefined, "center", Css$Ress.pct(80), "noRepeat", undefined, undefined, undefined, Css$Ress.url("../img/image.png"))).toBe("url(\"../img/image.png\") center / 80% no-repeat");
                expect(CssValueString$Ress.background(undefined, undefined, Css$Ress.pct(80), "noRepeat", undefined, undefined, undefined, Css$Ress.url("../img/image.png"))).toBe("url(\"../img/image.png\") no-repeat");
                expect(CssValueString$Ress.bgLayer("red")).toBe("red");
                expect(CssValueString$Ress.bgLayer(Css$Ress.url("myimage.png"))).toBe("url(\"myimage.png\")");
                expect(CssValueString$Ress.bgLayer(Css$Ress.bgLayer(undefined, undefined, undefined, "repeatY", undefined, undefined, undefined, Css$Ress.url("test.jpg")))).toBe("url(\"test.jpg\") repeat-y");
                expect(CssValueString$Ress.bgLayer(Css$Ress.bgLayer(undefined, "center", Css$Ress.pct(80), "noRepeat", undefined, undefined, undefined, Css$Ress.url("../img/image.png")))).toBe("url(\"../img/image.png\") center / 80% no-repeat");
                
              }));
        
      }));

describe("Spacing", (function () {
        test("margin", (function () {
                expect(CssValueString$Ress.margin(Css$Ress.px(10))).toBe("10px");
                expect(CssValueString$Ress.margin("auto")).toBe("auto");
                expect(CssValueString$Ress.margin(Css$Ress.pct(20))).toBe("20%");
                expect(CssValueString$Ress.margin_global(Css$Ress.px(24))).toBe("24px");
                expect(CssValueString$Ress.margin_global("initial")).toBe("initial");
                
              }));
        test("padding", (function () {
                expect(CssValueString$Ress.padding(Css$Ress.px(10))).toBe("10px");
                expect(CssValueString$Ress.padding(Css$Ress.pct(20))).toBe("20%");
                expect(CssValueString$Ress.padding_global(Css$Ress.px(24))).toBe("24px");
                expect(CssValueString$Ress.padding_global("initial")).toBe("initial");
                
              }));
        
      }));

/*  Not a pure module */
