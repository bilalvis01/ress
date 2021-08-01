// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssValue$Ress = require("../src/CssValue.js");
var CssFunction$Ress = require("../src/CssFunction.js");
var CssPropertyValue$Ress = require("../src/CssPropertyValue.js");

test("border", (function () {
        expect(CssPropertyValue$Ress.border(undefined, undefined, "solid")).toBe("solid");
        expect(CssPropertyValue$Ress.border(undefined, "red", "dashed")).toBe("red dashed");
        expect(CssPropertyValue$Ress.border(CssValue$Ress.rem(1.0), undefined, "solid")).toBe("1rem solid");
        expect(CssPropertyValue$Ress.border("thick", CssFunction$Ress.rgbX("32a1ce"), "double")).toBe("thick #32a1ce double");
        expect(CssPropertyValue$Ress.border(CssValue$Ress.mm(4), CssFunction$Ress.rgba(170, 50, 220, 0.6), "ridge")).toBe("4mm rgba(170, 50, 220, 0.6) ridge");
        
      }));

test("borderStyle", (function () {
        expect(CssPropertyValue$Ress.borderStyle("solid")).toBe("solid");
        expect(CssPropertyValue$Ress.borderStyle2("solid", "dashed")).toBe("solid dashed");
        expect(CssPropertyValue$Ress.borderStyle3("solid", "dashed", "dotted")).toBe("solid dashed dotted");
        expect(CssPropertyValue$Ress.borderStyle4("dashed", "solid", "dotted", "inset")).toBe("dashed solid dotted inset");
        
      }));

test("borderWidth", (function () {
        expect(CssPropertyValue$Ress.borderWidth(CssValue$Ress.px(1))).toBe("1px");
        expect(CssPropertyValue$Ress.borderWidth2("thin", "medium")).toBe("thin medium");
        expect(CssPropertyValue$Ress.borderWidth3("thin", "medium", CssValue$Ress.px(2))).toBe("thin medium 2px");
        expect(CssPropertyValue$Ress.borderWidth4("medium", CssValue$Ress.px(2), "thin", CssValue$Ress.px(4))).toBe("medium 2px thin 4px");
        
      }));

test("borderColor", (function () {
        expect(CssPropertyValue$Ress.borderColor("red")).toBe("red");
        expect(CssPropertyValue$Ress.borderColor2("red", CssFunction$Ress.rgbX("000000ff"))).toBe("red #000000ff");
        expect(CssPropertyValue$Ress.borderColor3("red", CssFunction$Ress.rgb(255, 255, 255), CssFunction$Ress.hsl(CssValue$Ress.deg(360), CssValue$Ress.pct(100), CssValue$Ress.pct(50)))).toBe("red rgb(255, 255, 255) hsl(360deg, 100%, 50%)");
        expect(CssPropertyValue$Ress.borderColor4("blue", CssFunction$Ress.rgba(0, 0, 0, 0.5), "red", CssFunction$Ress.rgb(255, 255, 255))).toBe("blue rgba(0, 0, 0, 0.5) red rgb(255, 255, 255)");
        
      }));

test("background", (function () {
        expect(CssPropertyValue$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, "initial")).toBe("initial");
        expect(CssPropertyValue$Ress.background("red", undefined, undefined, undefined, undefined, undefined, undefined, "initial")).toBe("initial");
        expect(CssPropertyValue$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, "red")).toBe("red");
        expect(CssPropertyValue$Ress.background(undefined, undefined, undefined, undefined, undefined, undefined, undefined, CssFunction$Ress.rgb(255, 255, 255))).toBe("rgb(255, 255, 255)");
        expect(CssPropertyValue$Ress.background(undefined, undefined, undefined, "repeat-y", undefined, undefined, undefined, CssFunction$Ress.url("test.jpg"))).toBe("url(\"test.jpg\") repeat-y");
        expect(CssPropertyValue$Ress.background2(CssFunction$Ress.linearGradient2(CssValue$Ress.deg(217), CssFunction$Ress.rgba(255, 0, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(255, 0, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(127), CssFunction$Ress.rgba(0, 255, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(0, 255, 0, 0), CssValue$Ress.pct(70.71))))).toBe("linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%)");
        expect(CssPropertyValue$Ress.background3(CssFunction$Ress.linearGradient2(CssValue$Ress.deg(217), CssFunction$Ress.rgba(255, 0, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(255, 0, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(127), CssFunction$Ress.rgba(0, 255, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(0, 255, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(217), CssFunction$Ress.rgba(255, 0, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(255, 0, 0, 0), CssValue$Ress.pct(70.71))))).toBe("linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%)");
        expect(CssPropertyValue$Ress.background4(CssFunction$Ress.linearGradient2(CssValue$Ress.deg(217), CssFunction$Ress.rgba(255, 0, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(255, 0, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(127), CssFunction$Ress.rgba(0, 255, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(0, 255, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(217), CssFunction$Ress.rgba(255, 0, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(255, 0, 0, 0), CssValue$Ress.pct(70.71))), CssFunction$Ress.linearGradient2(CssValue$Ress.deg(127), CssFunction$Ress.rgba(0, 255, 0, 0.8), CssFunction$Ress.linearColorStop2(CssFunction$Ress.rgba(0, 255, 0, 0), CssValue$Ress.pct(70.71))))).toBe("linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%)");
        expect(CssPropertyValue$Ress.background4(CssValue$Ress.bgLayer(undefined, undefined, undefined, "repeat", undefined, undefined, undefined, CssFunction$Ress.url("myimage.png")), CssValue$Ress.bgLayer(undefined, undefined, undefined, "repeat", undefined, undefined, undefined, CssFunction$Ress.url("myimage.png")), CssValue$Ress.bgLayer(undefined, undefined, undefined, "repeat", undefined, undefined, undefined, CssFunction$Ress.url("myimage.png")), CssValue$Ress.bgLayer(undefined, undefined, undefined, "repeat", undefined, undefined, undefined, CssFunction$Ress.url("myimage.png")))).toBe("url(\"myimage.png\") repeat, url(\"myimage.png\") repeat, url(\"myimage.png\") repeat, url(\"myimage.png\") repeat");
        
      }));

test("backgroundAttachment", (function () {
        expect(CssPropertyValue$Ress.backgroundAttachment("scroll")).toBe("scroll");
        expect(CssPropertyValue$Ress.backgroundAttachment2("scroll", "fixed")).toBe("scroll, fixed");
        expect(CssPropertyValue$Ress.backgroundAttachment3("scroll", "fixed", "fixed")).toBe("scroll, fixed, fixed");
        expect(CssPropertyValue$Ress.backgroundAttachment4("scroll", "fixed", "fixed", "local")).toBe("scroll, fixed, fixed, local");
        
      }));

test("backgroundColor", (function () {
        expect(CssPropertyValue$Ress.backgroundColor(CssFunction$Ress.rgb(200, 200, 200))).toBe("rgb(200, 200, 200)");
        
      }));

test("backgroundImage", (function () {
        expect(CssPropertyValue$Ress.backgroundImage(CssFunction$Ress.url("image.png"))).toBe("url(\"image.png\")");
        expect(CssPropertyValue$Ress.backgroundImage2(CssFunction$Ress.url("image.png"), CssFunction$Ress.image(undefined, undefined, CssFunction$Ress.url("myimage.jpg")))).toBe("url(\"image.png\"), image(url(\"myimage.jpg\"))");
        expect(CssPropertyValue$Ress.backgroundImage3(CssFunction$Ress.url("image.png"), CssFunction$Ress.image(undefined, undefined, CssFunction$Ress.url("myimage.jpg")), CssFunction$Ress.linearGradient(undefined, "red"))).toBe("url(\"image.png\"), image(url(\"myimage.jpg\")), linear-gradient(red)");
        expect(CssPropertyValue$Ress.backgroundImage4(CssFunction$Ress.url("image.png"), CssFunction$Ress.image(undefined, undefined, CssFunction$Ress.url("myimage.jpg")), CssFunction$Ress.linearGradient(undefined, "red"), CssFunction$Ress.radialGradient(undefined, undefined, undefined, "blue"))).toBe("url(\"image.png\"), image(url(\"myimage.jpg\")), linear-gradient(red), radial-gradient(blue)");
        
      }));

test("backgroundPosition", (function () {
        expect(CssPropertyValue$Ress.backgroundPosition(CssValue$Ress.px(10))).toBe("10px");
        expect(CssPropertyValue$Ress.backgroundPosition2(CssValue$Ress.px(10), CssValue$Ress.position2("center", "bottom"))).toBe("10px, center bottom");
        expect(CssPropertyValue$Ress.backgroundPosition3(CssValue$Ress.px(10), CssValue$Ress.position2("center", "bottom"), "center")).toBe("10px, center bottom, center");
        expect(CssPropertyValue$Ress.backgroundPosition4(CssValue$Ress.px(10), CssValue$Ress.position2("center", "bottom"), CssValue$Ress.pct(10), CssValue$Ress.position4("left", CssValue$Ress.px(10), "top", CssValue$Ress.pct(10)))).toBe("10px, center bottom, 10%, left 10px top 10%");
        
      }));

test("backgroundStyle", (function () {
        expect(CssPropertyValue$Ress.backgroundStyle("repeat-x")).toBe("repeat-x");
        expect(CssPropertyValue$Ress.backgroundStyle2("repeat-x", "repeat repeat")).toBe("repeat-x, repeat repeat");
        expect(CssPropertyValue$Ress.backgroundStyle3("repeat-x", "repeat repeat", "no-repeat")).toBe("repeat-x, repeat repeat, no-repeat");
        expect(CssPropertyValue$Ress.backgroundStyle4("repeat-x", "repeat repeat", "no-repeat", "space")).toBe("repeat-x, repeat repeat, no-repeat, space");
        
      }));

test("margin", (function () {
        expect(CssPropertyValue$Ress.margin(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.margin("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.margin2(CssValue$Ress.rem(2), CssValue$Ress.rem(4))).toBe("2rem 4rem");
        expect(CssPropertyValue$Ress.margin3(CssValue$Ress.px(10), CssValue$Ress.px(24), CssValue$Ress.px(40))).toBe("10px 24px 40px");
        expect(CssPropertyValue$Ress.margin4(CssValue$Ress.px(20), CssValue$Ress.px(40), CssValue$Ress.px(20), CssValue$Ress.px(40))).toBe("20px 40px 20px 40px");
        expect(CssPropertyValue$Ress.marginTop(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.marginTop("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.marginRight(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.marginRight("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.marginBottom(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.marginBottom("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.marginLeft(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.marginLeft("initial")).toBe("initial");
        
      }));

test("padding", (function () {
        expect(CssPropertyValue$Ress.padding(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.padding("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.padding2(CssValue$Ress.rem(2), CssValue$Ress.rem(4))).toBe("2rem 4rem");
        expect(CssPropertyValue$Ress.padding3(CssValue$Ress.px(10), CssValue$Ress.px(24), CssValue$Ress.px(40))).toBe("10px 24px 40px");
        expect(CssPropertyValue$Ress.padding4(CssValue$Ress.px(20), CssValue$Ress.px(40), CssValue$Ress.px(20), CssValue$Ress.px(40))).toBe("20px 40px 20px 40px");
        expect(CssPropertyValue$Ress.paddingTop(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.paddingTop("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.paddingRight(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.paddingRight("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.paddingBottom(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.paddingBottom("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.paddingLeft(CssValue$Ress.px(24))).toBe("24px");
        expect(CssPropertyValue$Ress.paddingLeft("initial")).toBe("initial");
        
      }));

test("cursor", (function () {
        expect(CssPropertyValue$Ress.cursor("auto")).toBe("auto");
        expect(CssPropertyValue$Ress.cursor("initial")).toBe("initial");
        expect(CssPropertyValue$Ress.cursor1(CssFunction$Ress.url("image.png"), "default")).toBe("url(\"image.png\"), default");
        expect(CssPropertyValue$Ress.cursor1({
                    NAME: "url2",
                    VAL: [
                      "image.png",
                      12
                    ]
                  }, "default")).toBe("url(\"image.png\") 12, default");
        expect(CssPropertyValue$Ress.cursor1({
                    NAME: "url3",
                    VAL: [
                      "image.png",
                      12,
                      24
                    ]
                  }, "default")).toBe("url(\"image.png\") 12 24, default");
        expect(CssPropertyValue$Ress.cursor2(CssFunction$Ress.url("image.png"), CssFunction$Ress.url("image2.png"), "default")).toBe("url(\"image.png\"), url(\"image2.png\"), default");
        expect(CssPropertyValue$Ress.cursor3(CssFunction$Ress.url("image.png"), CssFunction$Ress.url("image2.png"), CssFunction$Ress.url("image3.png"), "default")).toBe("url(\"image.png\"), url(\"image2.png\"), url(\"image3.png\"), default");
        expect(CssPropertyValue$Ress.cursor4(CssFunction$Ress.url("image.png"), CssFunction$Ress.url("image2.png"), CssFunction$Ress.url("image3.png"), CssFunction$Ress.url("image4.png"), "default")).toBe("url(\"image.png\"), url(\"image2.png\"), url(\"image3.png\"), url(\"image4.png\"), default");
        
      }));

/*  Not a pure module */
