// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssHelper$Ress = require("../src/helper/CssHelper.js");
var CssStyleRule$Ress = require("../src/statement/CssStyleRule.js");
var CssStatements$Ress = require("../src/statement/CssStatements.js");
var CssDeclarationBlock$Ress = require("../src/declaration/CssDeclarationBlock.js");
var CssStyleDeclaration$Ress = require("../src/declaration/CssStyleDeclaration.js");

var DeclarationBlock = CssDeclarationBlock$Ress.Make({
      styleDeclaration: CssStyleDeclaration$Ress.make
    });

var Statements = CssStatements$Ress.Make({
      styleRule: CssStyleRule$Ress.make
    });

var include = CssHelper$Ress.Make({
      declarationBlock: DeclarationBlock.make
    });

var pct = include.pct;

var px = include.px;

var hsla = include.hsla;

var rgb = include.rgb;

var url = include.url;

var rule = include.rule;

var hover = include.hover;

var background = include.background;

var color = include.color;

var marginNumber = include.marginNumber;

var paddingTop = include.paddingTop;

var paddingRight = include.paddingRight;

var paddingBottom = include.paddingBottom;

var paddingLeft = include.paddingLeft;

var declaration = include.declaration;

test("declarationBlock", (function () {
        expect(Curry._1(DeclarationBlock.make, [
                    Curry._2(declaration, "background", "url(\"image.png\")"),
                    Curry._2(declaration, "color", "rgb(200, 200, 200)"),
                    Curry._2(declaration, "margin", 24),
                    Curry._1(paddingTop, Curry._1(px, 24)),
                    Curry._1(paddingBottom, Curry._1(px, 24)),
                    Curry._1(paddingLeft, Curry._1(px, 40)),
                    Curry._1(paddingRight, Curry._1(px, 40)),
                    Curry._2(rule, "& .header", [
                          Curry._1(color, Curry._3(rgb, 200, 200, 200)),
                          Curry._1(paddingTop, Curry._1(px, 24)),
                          Curry._1(paddingBottom, Curry._1(px, 24)),
                          Curry._1(paddingLeft, Curry._1(px, 40)),
                          Curry._1(paddingRight, Curry._1(px, 40)),
                          Curry._1(marginNumber, 24)
                        ]),
                    Curry._2(rule, "& .button", [
                          Curry._1(color, Curry._4(hsla, 360, Curry._1(pct, 100), Curry._1(pct, 50), 0.5)),
                          Curry._1(hover, [Curry._8(background, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "blue")])
                        ]),
                    Curry._1(hover, [Curry._1(color, "blue")])
                  ])).toEqual({
              background: "url(\"image.png\")",
              color: "rgb(200, 200, 200)",
              margin: 24,
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingLeft: "40px",
              paddingRight: "40px",
              "& .header": {
                color: "rgb(200, 200, 200)",
                margin: 24,
                paddingTop: "24px",
                paddingBottom: "24px",
                paddingLeft: "40px",
                paddingRight: "40px"
              },
              "& .button": {
                color: "hsla(360, 100%, 50%, 0.5)",
                "&:hover": {
                  background: "blue"
                }
              },
              "&:hover": {
                color: "blue"
              }
            });
        
      }));

test("statements", (function () {
        expect(Curry._1(Statements.make, [Curry._2(rule, "app", [
                          Curry._2(declaration, "background", "url(\"image.png\")"),
                          Curry._2(declaration, "color", "rgb(200, 200, 200)"),
                          Curry._2(declaration, "margin", 24),
                          Curry._1(paddingTop, Curry._1(px, 24)),
                          Curry._1(paddingBottom, Curry._1(px, 24)),
                          Curry._1(paddingLeft, Curry._1(px, 40)),
                          Curry._1(paddingRight, Curry._1(px, 40)),
                          Curry._2(rule, "& .header", [
                                Curry._8(background, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Curry._1(url, "image.png")),
                                Curry._1(color, Curry._3(rgb, 200, 200, 200)),
                                Curry._1(paddingTop, Curry._1(px, 24)),
                                Curry._1(paddingBottom, Curry._1(px, 24)),
                                Curry._1(paddingLeft, Curry._1(px, 40)),
                                Curry._1(paddingRight, Curry._1(px, 40)),
                                Curry._1(marginNumber, 24)
                              ]),
                          Curry._2(rule, "& .button", [
                                Curry._1(color, Curry._4(hsla, 360, Curry._1(pct, 100), Curry._1(pct, 50), 0.5)),
                                Curry._1(hover, [Curry._8(background, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "blue")])
                              ]),
                          Curry._1(hover, [Curry._1(color, "blue")])
                        ])])).toEqual({
              app: {
                background: "url(\"image.png\")",
                color: "rgb(200, 200, 200)",
                margin: 24,
                paddingTop: "24px",
                paddingBottom: "24px",
                paddingLeft: "40px",
                paddingRight: "40px",
                "& .header": {
                  background: "url(\"image.png\")",
                  color: "rgb(200, 200, 200)",
                  margin: 24,
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  paddingLeft: "40px",
                  paddingRight: "40px"
                },
                "& .button": {
                  color: "hsla(360, 100%, 50%, 0.5)",
                  "&:hover": {
                    background: "blue"
                  }
                },
                "&:hover": {
                  color: "blue"
                }
              }
            });
        
      }));

var Background = include.Background;

var BackgroundAttachment = include.BackgroundAttachment;

var BackgroundColor = include.BackgroundColor;

var BackgroundImage = include.BackgroundImage;

var BackgroundPosition = include.BackgroundPosition;

var BackgroundStyle = include.BackgroundStyle;

var Border = include.Border;

var BorderTop = include.BorderTop;

var BorderRight = include.BorderRight;

var BorderBottom = include.BorderBottom;

var BorderLeft = include.BorderLeft;

var BorderTopColor = include.BorderTopColor;

var BorderRightColor = include.BorderRightColor;

var BorderBottomColor = include.BorderBottomColor;

var BorderLeftColor = include.BorderLeftColor;

var BorderTopStyle = include.BorderTopStyle;

var BorderRightStyle = include.BorderRightStyle;

var BorderBottomStyle = include.BorderBottomStyle;

var BorderLeftStyle = include.BorderLeftStyle;

var BorderTopWidth = include.BorderTopWidth;

var BorderRightWidth = include.BorderRightWidth;

var BorderBottomWidth = include.BorderBottomWidth;

var BorderLeftWidth = include.BorderLeftWidth;

var BorderColor = include.BorderColor;

var BorderStyle = include.BorderStyle;

var BorderWidth = include.BorderWidth;

var Clear = include.Clear;

var Color = include.Color;

var Cursor = include.Cursor;

var FontFamily = include.FontFamily;

var FontWeight = include.FontWeight;

var Margin = include.Margin;

var MarginTop = include.MarginTop;

var MarginRight = include.MarginRight;

var MarginBottom = include.MarginBottom;

var MarginLeft = include.MarginLeft;

var Padding = include.Padding;

var PaddingTop = include.PaddingTop;

var PaddingRight = include.PaddingRight;

var PaddingBottom = include.PaddingBottom;

var PaddingLeft = include.PaddingLeft;

var str = include.str;

var num = include.num;

var $$int = include.$$int;

var ratio = include.ratio;

var fr = include.fr;

var ch = include.ch;

var em = include.em;

var ex = include.ex;

var rem = include.rem;

var vh = include.vh;

var vw = include.vw;

var vmin = include.vmin;

var vmax = include.vmax;

var cm = include.cm;

var mm = include.mm;

var inch = include.inch;

var pc = include.pc;

var pt = include.pt;

var deg = include.deg;

var grad = include.grad;

var rad = include.rad;

var turn = include.turn;

var s = include.s;

var ms = include.ms;

var hz = include.hz;

var kHz = include.kHz;

var dpi = include.dpi;

var dpcm = include.dpcm;

var dppx = include.dppx;

var x = include.x;

var position2 = include.position2;

var position3 = include.position3;

var position4 = include.position4;

var src = include.src;

var bgLayer = include.bgLayer;

var bgSize2 = include.bgSize2;

var hsl = include.hsl;

var rgba = include.rgba;

var hexColor = include.hexColor;

var image = include.image;

var linearColorStop2 = include.linearColorStop2;

var linearColorStop3 = include.linearColorStop3;

var linearGradient = include.linearGradient;

var linearGradient2 = include.linearGradient2;

var linearGradient3 = include.linearGradient3;

var linearGradient4 = include.linearGradient4;

var repeatingLinearGradient = include.repeatingLinearGradient;

var repeatingLinearGradient2 = include.repeatingLinearGradient2;

var repeatingLinearGradient3 = include.repeatingLinearGradient3;

var repeatingLinearGradient4 = include.repeatingLinearGradient4;

var radialGradient = include.radialGradient;

var radialGradient2 = include.radialGradient2;

var radialGradient3 = include.radialGradient3;

var radialGradient4 = include.radialGradient4;

var repeatingRadialGradient = include.repeatingRadialGradient;

var repeatingRadialGradient2 = include.repeatingRadialGradient2;

var repeatingRadialGradient3 = include.repeatingRadialGradient3;

var repeatingRadialGradient4 = include.repeatingRadialGradient4;

var conicGradient = include.conicGradient;

var conicGradient2 = include.conicGradient2;

var conicGradient3 = include.conicGradient3;

var conicGradient4 = include.conicGradient4;

var repeatingConicGradient = include.repeatingConicGradient;

var repeatingConicGradient2 = include.repeatingConicGradient2;

var repeatingConicGradient3 = include.repeatingConicGradient3;

var repeatingConicGradient4 = include.repeatingConicGradient4;

var font = include.font;

var regularAtRule = include.regularAtRule;

var nestedAtRule = include.nestedAtRule;

var fontFace = include.fontFace;

var $$FontFace = include.$$FontFace;

var pseudoClass = include.pseudoClass;

var background2 = include.background2;

var background3 = include.background3;

var background4 = include.background4;

var backgroundUnion = include.backgroundUnion;

var backgroundString = include.backgroundString;

var backgroundAttachment = include.backgroundAttachment;

var backgroundAttachment2 = include.backgroundAttachment2;

var backgroundAttachment3 = include.backgroundAttachment3;

var backgroundAttachment4 = include.backgroundAttachment4;

var backgroundAttachmentUnion = include.backgroundAttachmentUnion;

var backgroundAttachmentString = include.backgroundAttachmentString;

var backgroundColor = include.backgroundColor;

var backgroundColorUnion = include.backgroundColorUnion;

var backgroundColorString = include.backgroundColorString;

var backgroundImage = include.backgroundImage;

var backgroundImage2 = include.backgroundImage2;

var backgroundImage3 = include.backgroundImage3;

var backgroundImage4 = include.backgroundImage4;

var backgroundImageUnion = include.backgroundImageUnion;

var backgroundImageString = include.backgroundImageString;

var backgroundPosition = include.backgroundPosition;

var backgroundPosition2 = include.backgroundPosition2;

var backgroundPosition3 = include.backgroundPosition3;

var backgroundPosition4 = include.backgroundPosition4;

var backgroundPositionUnion = include.backgroundPositionUnion;

var backgroundPositionString = include.backgroundPositionString;

var backgroundStyle = include.backgroundStyle;

var backgroundStyle2 = include.backgroundStyle2;

var backgroundStyle3 = include.backgroundStyle3;

var backgroundStyle4 = include.backgroundStyle4;

var backgroundStyleUnion = include.backgroundStyleUnion;

var backgroundStyleString = include.backgroundStyleString;

var border = include.border;

var borderUnion = include.borderUnion;

var borderString = include.borderString;

var borderTop = include.borderTop;

var borderTopUnion = include.borderTopUnion;

var borderTopString = include.borderTopString;

var borderRight = include.borderRight;

var borderRightUnion = include.borderRightUnion;

var borderRightString = include.borderRightString;

var borderBottom = include.borderBottom;

var borderBottomUnion = include.borderBottomUnion;

var borderBottomString = include.borderBottomString;

var borderLeft = include.borderLeft;

var borderLeftUnion = include.borderLeftUnion;

var borderLeftString = include.borderLeftString;

var borderTopColor = include.borderTopColor;

var borderTopColorUnion = include.borderTopColorUnion;

var borderTopColorString = include.borderTopColorString;

var borderRightColor = include.borderRightColor;

var borderRightColorUnion = include.borderRightColorUnion;

var borderRightColorString = include.borderRightColorString;

var borderBottomColor = include.borderBottomColor;

var borderBottomColorUnion = include.borderBottomColorUnion;

var borderBottomColorString = include.borderBottomColorString;

var borderLeftColor = include.borderLeftColor;

var borderLeftColorUnion = include.borderLeftColorUnion;

var borderLeftColorString = include.borderLeftColorString;

var borderTopStyle = include.borderTopStyle;

var borderTopStyleUnion = include.borderTopStyleUnion;

var borderTopStyleString = include.borderTopStyleString;

var borderRightStyle = include.borderRightStyle;

var borderRightStyleUnion = include.borderRightStyleUnion;

var borderRightStyleString = include.borderRightStyleString;

var borderBottomStyle = include.borderBottomStyle;

var borderBottomStyleUnion = include.borderBottomStyleUnion;

var borderBottomStyleString = include.borderBottomStyleString;

var borderLeftStyle = include.borderLeftStyle;

var borderLeftStyleUnion = include.borderLeftStyleUnion;

var borderLeftStyleString = include.borderLeftStyleString;

var borderTopWidth = include.borderTopWidth;

var borderTopWidthUnion = include.borderTopWidthUnion;

var borderTopWidthString = include.borderTopWidthString;

var borderRightWidth = include.borderRightWidth;

var borderRightWidthUnion = include.borderRightWidthUnion;

var borderRightWidthString = include.borderRightWidthString;

var borderBottomWidth = include.borderBottomWidth;

var borderBottomWidthUnion = include.borderBottomWidthUnion;

var borderBottomWidthString = include.borderBottomWidthString;

var borderLeftWidth = include.borderLeftWidth;

var borderLeftWidthUnion = include.borderLeftWidthUnion;

var borderLeftWidthString = include.borderLeftWidthString;

var borderColor = include.borderColor;

var borderColor2 = include.borderColor2;

var borderColor3 = include.borderColor3;

var borderColor4 = include.borderColor4;

var borderColorUnion = include.borderColorUnion;

var borderColorString = include.borderColorString;

var borderStyle = include.borderStyle;

var borderStyle2 = include.borderStyle2;

var borderStyle3 = include.borderStyle3;

var borderStyle4 = include.borderStyle4;

var borderStyleUnion = include.borderStyleUnion;

var borderStyleString = include.borderStyleString;

var borderWidth = include.borderWidth;

var borderWidth2 = include.borderWidth2;

var borderWidth3 = include.borderWidth3;

var borderWidth4 = include.borderWidth4;

var borderWidthUnion = include.borderWidthUnion;

var borderWidthString = include.borderWidthString;

var clear = include.clear;

var clearUnion = include.clearUnion;

var clearString = include.clearString;

var colorUnion = include.colorUnion;

var colorString = include.colorString;

var cursor = include.cursor;

var cursor1 = include.cursor1;

var cursor2 = include.cursor2;

var cursor3 = include.cursor3;

var cursor4 = include.cursor4;

var cursorUnion = include.cursorUnion;

var cursorString = include.cursorString;

var fontFamily = include.fontFamily;

var fontFamily2 = include.fontFamily2;

var fontFamily3 = include.fontFamily3;

var fontFamily4 = include.fontFamily4;

var fontFamilyUnion = include.fontFamilyUnion;

var fontFamilyString = include.fontFamilyString;

var fontWeight = include.fontWeight;

var fontWeightUnion = include.fontWeightUnion;

var fontWeightString = include.fontWeightString;

var fontWeightInteger = include.fontWeightInteger;

var margin = include.margin;

var margin2 = include.margin2;

var margin3 = include.margin3;

var margin4 = include.margin4;

var marginUnion = include.marginUnion;

var marginString = include.marginString;

var marginTop = include.marginTop;

var marginTopUnion = include.marginTopUnion;

var marginTopString = include.marginTopString;

var marginTopNumber = include.marginTopNumber;

var marginRight = include.marginRight;

var marginRightUnion = include.marginRightUnion;

var marginRightString = include.marginRightString;

var marginRightNumber = include.marginRightNumber;

var marginBottom = include.marginBottom;

var marginBottomUnion = include.marginBottomUnion;

var marginBottomString = include.marginBottomString;

var marginBottomNumber = include.marginBottomNumber;

var marginLeft = include.marginLeft;

var marginLeftUnion = include.marginLeftUnion;

var marginLeftString = include.marginLeftString;

var marginLeftNumber = include.marginLeftNumber;

var padding = include.padding;

var padding2 = include.padding2;

var padding3 = include.padding3;

var padding4 = include.padding4;

var paddingUnion = include.paddingUnion;

var paddingString = include.paddingString;

var paddingNumber = include.paddingNumber;

var paddingTopUnion = include.paddingTopUnion;

var paddingTopString = include.paddingTopString;

var paddingTopNumber = include.paddingTopNumber;

var paddingRightUnion = include.paddingRightUnion;

var paddingRightString = include.paddingRightString;

var paddingRightNumber = include.paddingRightNumber;

var paddingBottomUnion = include.paddingBottomUnion;

var paddingBottomString = include.paddingBottomString;

var paddingBottomNumber = include.paddingBottomNumber;

var paddingLeftUnion = include.paddingLeftUnion;

var paddingLeftString = include.paddingLeftString;

var paddingLeftNumber = include.paddingLeftNumber;

var backgroundFn = include.backgroundFn;

var backgroundAttachmentFn = include.backgroundAttachmentFn;

var backgroundColorFn = include.backgroundColorFn;

var backgroundImageFn = include.backgroundImageFn;

var backgroundPositionFn = include.backgroundPositionFn;

var backgroundStyleFn = include.backgroundStyleFn;

var borderFn = include.borderFn;

var borderTopFn = include.borderTopFn;

var borderRightFn = include.borderRightFn;

var borderBottomFn = include.borderBottomFn;

var borderLeftFn = include.borderLeftFn;

var borderTopColorFn = include.borderTopColorFn;

var borderRightColorFn = include.borderRightColorFn;

var borderBottomColorFn = include.borderBottomColorFn;

var borderLeftColorFn = include.borderLeftColorFn;

var borderTopStyleFn = include.borderTopStyleFn;

var borderRightStyleFn = include.borderRightStyleFn;

var borderBottomStyleFn = include.borderBottomStyleFn;

var borderLeftStyleFn = include.borderLeftStyleFn;

var borderTopWidthFn = include.borderTopWidthFn;

var borderRightWidthFn = include.borderRightWidthFn;

var borderBottomWidthFn = include.borderBottomWidthFn;

var borderLeftWidthFn = include.borderLeftWidthFn;

var borderColorFn = include.borderColorFn;

var borderStyleFn = include.borderStyleFn;

var borderWidthFn = include.borderWidthFn;

var clearFn = include.clearFn;

var colorFn = include.colorFn;

var cursorFn = include.cursorFn;

var fontFamilyFn = include.fontFamilyFn;

var fontWeightFn = include.fontWeightFn;

var marginFn = include.marginFn;

var marginTopFn = include.marginTopFn;

var marginRightFn = include.marginRightFn;

var marginBottomFn = include.marginBottomFn;

var marginLeftFn = include.marginLeftFn;

var paddingFn = include.paddingFn;

var paddingTopFn = include.paddingTopFn;

var paddingRightFn = include.paddingRightFn;

var paddingBottomFn = include.paddingBottomFn;

var paddingLeftFn = include.paddingLeftFn;

exports.DeclarationBlock = DeclarationBlock;
exports.Statements = Statements;
exports.Background = Background;
exports.BackgroundAttachment = BackgroundAttachment;
exports.BackgroundColor = BackgroundColor;
exports.BackgroundImage = BackgroundImage;
exports.BackgroundPosition = BackgroundPosition;
exports.BackgroundStyle = BackgroundStyle;
exports.Border = Border;
exports.BorderTop = BorderTop;
exports.BorderRight = BorderRight;
exports.BorderBottom = BorderBottom;
exports.BorderLeft = BorderLeft;
exports.BorderTopColor = BorderTopColor;
exports.BorderRightColor = BorderRightColor;
exports.BorderBottomColor = BorderBottomColor;
exports.BorderLeftColor = BorderLeftColor;
exports.BorderTopStyle = BorderTopStyle;
exports.BorderRightStyle = BorderRightStyle;
exports.BorderBottomStyle = BorderBottomStyle;
exports.BorderLeftStyle = BorderLeftStyle;
exports.BorderTopWidth = BorderTopWidth;
exports.BorderRightWidth = BorderRightWidth;
exports.BorderBottomWidth = BorderBottomWidth;
exports.BorderLeftWidth = BorderLeftWidth;
exports.BorderColor = BorderColor;
exports.BorderStyle = BorderStyle;
exports.BorderWidth = BorderWidth;
exports.Clear = Clear;
exports.Color = Color;
exports.Cursor = Cursor;
exports.FontFamily = FontFamily;
exports.FontWeight = FontWeight;
exports.Margin = Margin;
exports.MarginTop = MarginTop;
exports.MarginRight = MarginRight;
exports.MarginBottom = MarginBottom;
exports.MarginLeft = MarginLeft;
exports.Padding = Padding;
exports.PaddingTop = PaddingTop;
exports.PaddingRight = PaddingRight;
exports.PaddingBottom = PaddingBottom;
exports.PaddingLeft = PaddingLeft;
exports.str = str;
exports.num = num;
exports.$$int = $$int;
exports.pct = pct;
exports.ratio = ratio;
exports.fr = fr;
exports.ch = ch;
exports.em = em;
exports.ex = ex;
exports.rem = rem;
exports.vh = vh;
exports.vw = vw;
exports.vmin = vmin;
exports.vmax = vmax;
exports.px = px;
exports.cm = cm;
exports.mm = mm;
exports.inch = inch;
exports.pc = pc;
exports.pt = pt;
exports.deg = deg;
exports.grad = grad;
exports.rad = rad;
exports.turn = turn;
exports.s = s;
exports.ms = ms;
exports.hz = hz;
exports.kHz = kHz;
exports.dpi = dpi;
exports.dpcm = dpcm;
exports.dppx = dppx;
exports.x = x;
exports.position2 = position2;
exports.position3 = position3;
exports.position4 = position4;
exports.src = src;
exports.bgLayer = bgLayer;
exports.bgSize2 = bgSize2;
exports.hsl = hsl;
exports.hsla = hsla;
exports.rgb = rgb;
exports.rgba = rgba;
exports.hexColor = hexColor;
exports.url = url;
exports.image = image;
exports.linearColorStop2 = linearColorStop2;
exports.linearColorStop3 = linearColorStop3;
exports.linearGradient = linearGradient;
exports.linearGradient2 = linearGradient2;
exports.linearGradient3 = linearGradient3;
exports.linearGradient4 = linearGradient4;
exports.repeatingLinearGradient = repeatingLinearGradient;
exports.repeatingLinearGradient2 = repeatingLinearGradient2;
exports.repeatingLinearGradient3 = repeatingLinearGradient3;
exports.repeatingLinearGradient4 = repeatingLinearGradient4;
exports.radialGradient = radialGradient;
exports.radialGradient2 = radialGradient2;
exports.radialGradient3 = radialGradient3;
exports.radialGradient4 = radialGradient4;
exports.repeatingRadialGradient = repeatingRadialGradient;
exports.repeatingRadialGradient2 = repeatingRadialGradient2;
exports.repeatingRadialGradient3 = repeatingRadialGradient3;
exports.repeatingRadialGradient4 = repeatingRadialGradient4;
exports.conicGradient = conicGradient;
exports.conicGradient2 = conicGradient2;
exports.conicGradient3 = conicGradient3;
exports.conicGradient4 = conicGradient4;
exports.repeatingConicGradient = repeatingConicGradient;
exports.repeatingConicGradient2 = repeatingConicGradient2;
exports.repeatingConicGradient3 = repeatingConicGradient3;
exports.repeatingConicGradient4 = repeatingConicGradient4;
exports.font = font;
exports.rule = rule;
exports.regularAtRule = regularAtRule;
exports.nestedAtRule = nestedAtRule;
exports.fontFace = fontFace;
exports.$$FontFace = $$FontFace;
exports.pseudoClass = pseudoClass;
exports.hover = hover;
exports.background = background;
exports.background2 = background2;
exports.background3 = background3;
exports.background4 = background4;
exports.backgroundUnion = backgroundUnion;
exports.backgroundString = backgroundString;
exports.backgroundAttachment = backgroundAttachment;
exports.backgroundAttachment2 = backgroundAttachment2;
exports.backgroundAttachment3 = backgroundAttachment3;
exports.backgroundAttachment4 = backgroundAttachment4;
exports.backgroundAttachmentUnion = backgroundAttachmentUnion;
exports.backgroundAttachmentString = backgroundAttachmentString;
exports.backgroundColor = backgroundColor;
exports.backgroundColorUnion = backgroundColorUnion;
exports.backgroundColorString = backgroundColorString;
exports.backgroundImage = backgroundImage;
exports.backgroundImage2 = backgroundImage2;
exports.backgroundImage3 = backgroundImage3;
exports.backgroundImage4 = backgroundImage4;
exports.backgroundImageUnion = backgroundImageUnion;
exports.backgroundImageString = backgroundImageString;
exports.backgroundPosition = backgroundPosition;
exports.backgroundPosition2 = backgroundPosition2;
exports.backgroundPosition3 = backgroundPosition3;
exports.backgroundPosition4 = backgroundPosition4;
exports.backgroundPositionUnion = backgroundPositionUnion;
exports.backgroundPositionString = backgroundPositionString;
exports.backgroundStyle = backgroundStyle;
exports.backgroundStyle2 = backgroundStyle2;
exports.backgroundStyle3 = backgroundStyle3;
exports.backgroundStyle4 = backgroundStyle4;
exports.backgroundStyleUnion = backgroundStyleUnion;
exports.backgroundStyleString = backgroundStyleString;
exports.border = border;
exports.borderUnion = borderUnion;
exports.borderString = borderString;
exports.borderTop = borderTop;
exports.borderTopUnion = borderTopUnion;
exports.borderTopString = borderTopString;
exports.borderRight = borderRight;
exports.borderRightUnion = borderRightUnion;
exports.borderRightString = borderRightString;
exports.borderBottom = borderBottom;
exports.borderBottomUnion = borderBottomUnion;
exports.borderBottomString = borderBottomString;
exports.borderLeft = borderLeft;
exports.borderLeftUnion = borderLeftUnion;
exports.borderLeftString = borderLeftString;
exports.borderTopColor = borderTopColor;
exports.borderTopColorUnion = borderTopColorUnion;
exports.borderTopColorString = borderTopColorString;
exports.borderRightColor = borderRightColor;
exports.borderRightColorUnion = borderRightColorUnion;
exports.borderRightColorString = borderRightColorString;
exports.borderBottomColor = borderBottomColor;
exports.borderBottomColorUnion = borderBottomColorUnion;
exports.borderBottomColorString = borderBottomColorString;
exports.borderLeftColor = borderLeftColor;
exports.borderLeftColorUnion = borderLeftColorUnion;
exports.borderLeftColorString = borderLeftColorString;
exports.borderTopStyle = borderTopStyle;
exports.borderTopStyleUnion = borderTopStyleUnion;
exports.borderTopStyleString = borderTopStyleString;
exports.borderRightStyle = borderRightStyle;
exports.borderRightStyleUnion = borderRightStyleUnion;
exports.borderRightStyleString = borderRightStyleString;
exports.borderBottomStyle = borderBottomStyle;
exports.borderBottomStyleUnion = borderBottomStyleUnion;
exports.borderBottomStyleString = borderBottomStyleString;
exports.borderLeftStyle = borderLeftStyle;
exports.borderLeftStyleUnion = borderLeftStyleUnion;
exports.borderLeftStyleString = borderLeftStyleString;
exports.borderTopWidth = borderTopWidth;
exports.borderTopWidthUnion = borderTopWidthUnion;
exports.borderTopWidthString = borderTopWidthString;
exports.borderRightWidth = borderRightWidth;
exports.borderRightWidthUnion = borderRightWidthUnion;
exports.borderRightWidthString = borderRightWidthString;
exports.borderBottomWidth = borderBottomWidth;
exports.borderBottomWidthUnion = borderBottomWidthUnion;
exports.borderBottomWidthString = borderBottomWidthString;
exports.borderLeftWidth = borderLeftWidth;
exports.borderLeftWidthUnion = borderLeftWidthUnion;
exports.borderLeftWidthString = borderLeftWidthString;
exports.borderColor = borderColor;
exports.borderColor2 = borderColor2;
exports.borderColor3 = borderColor3;
exports.borderColor4 = borderColor4;
exports.borderColorUnion = borderColorUnion;
exports.borderColorString = borderColorString;
exports.borderStyle = borderStyle;
exports.borderStyle2 = borderStyle2;
exports.borderStyle3 = borderStyle3;
exports.borderStyle4 = borderStyle4;
exports.borderStyleUnion = borderStyleUnion;
exports.borderStyleString = borderStyleString;
exports.borderWidth = borderWidth;
exports.borderWidth2 = borderWidth2;
exports.borderWidth3 = borderWidth3;
exports.borderWidth4 = borderWidth4;
exports.borderWidthUnion = borderWidthUnion;
exports.borderWidthString = borderWidthString;
exports.clear = clear;
exports.clearUnion = clearUnion;
exports.clearString = clearString;
exports.color = color;
exports.colorUnion = colorUnion;
exports.colorString = colorString;
exports.cursor = cursor;
exports.cursor1 = cursor1;
exports.cursor2 = cursor2;
exports.cursor3 = cursor3;
exports.cursor4 = cursor4;
exports.cursorUnion = cursorUnion;
exports.cursorString = cursorString;
exports.fontFamily = fontFamily;
exports.fontFamily2 = fontFamily2;
exports.fontFamily3 = fontFamily3;
exports.fontFamily4 = fontFamily4;
exports.fontFamilyUnion = fontFamilyUnion;
exports.fontFamilyString = fontFamilyString;
exports.fontWeight = fontWeight;
exports.fontWeightUnion = fontWeightUnion;
exports.fontWeightString = fontWeightString;
exports.fontWeightInteger = fontWeightInteger;
exports.margin = margin;
exports.margin2 = margin2;
exports.margin3 = margin3;
exports.margin4 = margin4;
exports.marginUnion = marginUnion;
exports.marginString = marginString;
exports.marginNumber = marginNumber;
exports.marginTop = marginTop;
exports.marginTopUnion = marginTopUnion;
exports.marginTopString = marginTopString;
exports.marginTopNumber = marginTopNumber;
exports.marginRight = marginRight;
exports.marginRightUnion = marginRightUnion;
exports.marginRightString = marginRightString;
exports.marginRightNumber = marginRightNumber;
exports.marginBottom = marginBottom;
exports.marginBottomUnion = marginBottomUnion;
exports.marginBottomString = marginBottomString;
exports.marginBottomNumber = marginBottomNumber;
exports.marginLeft = marginLeft;
exports.marginLeftUnion = marginLeftUnion;
exports.marginLeftString = marginLeftString;
exports.marginLeftNumber = marginLeftNumber;
exports.padding = padding;
exports.padding2 = padding2;
exports.padding3 = padding3;
exports.padding4 = padding4;
exports.paddingUnion = paddingUnion;
exports.paddingString = paddingString;
exports.paddingNumber = paddingNumber;
exports.paddingTop = paddingTop;
exports.paddingTopUnion = paddingTopUnion;
exports.paddingTopString = paddingTopString;
exports.paddingTopNumber = paddingTopNumber;
exports.paddingRight = paddingRight;
exports.paddingRightUnion = paddingRightUnion;
exports.paddingRightString = paddingRightString;
exports.paddingRightNumber = paddingRightNumber;
exports.paddingBottom = paddingBottom;
exports.paddingBottomUnion = paddingBottomUnion;
exports.paddingBottomString = paddingBottomString;
exports.paddingBottomNumber = paddingBottomNumber;
exports.paddingLeft = paddingLeft;
exports.paddingLeftUnion = paddingLeftUnion;
exports.paddingLeftString = paddingLeftString;
exports.paddingLeftNumber = paddingLeftNumber;
exports.declaration = declaration;
exports.backgroundFn = backgroundFn;
exports.backgroundAttachmentFn = backgroundAttachmentFn;
exports.backgroundColorFn = backgroundColorFn;
exports.backgroundImageFn = backgroundImageFn;
exports.backgroundPositionFn = backgroundPositionFn;
exports.backgroundStyleFn = backgroundStyleFn;
exports.borderFn = borderFn;
exports.borderTopFn = borderTopFn;
exports.borderRightFn = borderRightFn;
exports.borderBottomFn = borderBottomFn;
exports.borderLeftFn = borderLeftFn;
exports.borderTopColorFn = borderTopColorFn;
exports.borderRightColorFn = borderRightColorFn;
exports.borderBottomColorFn = borderBottomColorFn;
exports.borderLeftColorFn = borderLeftColorFn;
exports.borderTopStyleFn = borderTopStyleFn;
exports.borderRightStyleFn = borderRightStyleFn;
exports.borderBottomStyleFn = borderBottomStyleFn;
exports.borderLeftStyleFn = borderLeftStyleFn;
exports.borderTopWidthFn = borderTopWidthFn;
exports.borderRightWidthFn = borderRightWidthFn;
exports.borderBottomWidthFn = borderBottomWidthFn;
exports.borderLeftWidthFn = borderLeftWidthFn;
exports.borderColorFn = borderColorFn;
exports.borderStyleFn = borderStyleFn;
exports.borderWidthFn = borderWidthFn;
exports.clearFn = clearFn;
exports.colorFn = colorFn;
exports.cursorFn = cursorFn;
exports.fontFamilyFn = fontFamilyFn;
exports.fontWeightFn = fontWeightFn;
exports.marginFn = marginFn;
exports.marginTopFn = marginTopFn;
exports.marginRightFn = marginRightFn;
exports.marginBottomFn = marginBottomFn;
exports.marginLeftFn = marginLeftFn;
exports.paddingFn = paddingFn;
exports.paddingTopFn = paddingTopFn;
exports.paddingRightFn = paddingRightFn;
exports.paddingBottomFn = paddingBottomFn;
exports.paddingLeftFn = paddingLeftFn;
/* DeclarationBlock Not a pure module */
