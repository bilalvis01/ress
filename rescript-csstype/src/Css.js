// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssRules$Ress = require("./CssRules.js");
var CssValueHelper$Ress = require("./CssValueHelper.js");
var CssAtRuleHelper$Ress = require("./CssAtRuleHelper.js");
var CssSelectorHelper$Ress = require("./CssSelectorHelper.js");
var CssDeclarationHelper$Ress = require("./CssDeclarationHelper.js");
var CssPseudoClassHelper$Ress = require("./CssPseudoClassHelper.js");
var CssAdvancedDeclarations$Ress = require("./CssAdvancedDeclarations.js");

function Make(Type) {
  var Declarations = CssAdvancedDeclarations$Ress.Make({});
  var Rules = CssRules$Ress.Make({});
  var include = CssSelectorHelper$Ress.Make({
        declarations: Declarations.make
      });
  var include$1 = CssPseudoClassHelper$Ress.Make({
        declarations: Declarations.make
      });
  return {
          Declarations: Declarations,
          Rules: Rules,
          property: CssDeclarationHelper$Ress.property,
          border: CssDeclarationHelper$Ress.border,
          borderString: CssDeclarationHelper$Ress.borderString,
          borderTop: CssDeclarationHelper$Ress.borderTop,
          borderTopString: CssDeclarationHelper$Ress.borderTopString,
          borderLeft: CssDeclarationHelper$Ress.borderLeft,
          borderLeftString: CssDeclarationHelper$Ress.borderLeftString,
          borderRight: CssDeclarationHelper$Ress.borderRight,
          borderRightString: CssDeclarationHelper$Ress.borderRightString,
          borderBottom: CssDeclarationHelper$Ress.borderBottom,
          borderBottomString: CssDeclarationHelper$Ress.borderBottomString,
          borderColor: CssDeclarationHelper$Ress.borderColor,
          borderColor2: CssDeclarationHelper$Ress.borderColor2,
          borderColor3: CssDeclarationHelper$Ress.borderColor3,
          borderColor4: CssDeclarationHelper$Ress.borderColor4,
          borderColorString: CssDeclarationHelper$Ress.borderColorString,
          borderTopColor: CssDeclarationHelper$Ress.borderTopColor,
          borderTopColorString: CssDeclarationHelper$Ress.borderTopColorString,
          borderRightColor: CssDeclarationHelper$Ress.borderRightColor,
          borderRightColorString: CssDeclarationHelper$Ress.borderRightColorString,
          borderBottomColor: CssDeclarationHelper$Ress.borderBottomColor,
          borderBottomColorString: CssDeclarationHelper$Ress.borderBottomColorString,
          borderLeftColor: CssDeclarationHelper$Ress.borderLeftColor,
          borderLeftColorString: CssDeclarationHelper$Ress.borderLeftColorString,
          borderStyle: CssDeclarationHelper$Ress.borderStyle,
          borderStyle2: CssDeclarationHelper$Ress.borderStyle2,
          borderStyle3: CssDeclarationHelper$Ress.borderStyle3,
          borderStyle4: CssDeclarationHelper$Ress.borderStyle4,
          borderStyleString: CssDeclarationHelper$Ress.borderStyleString,
          borderTopStyle: CssDeclarationHelper$Ress.borderTopStyle,
          borderTopStyleString: CssDeclarationHelper$Ress.borderTopStyleString,
          borderRightStyle: CssDeclarationHelper$Ress.borderRightStyle,
          borderRightStyleString: CssDeclarationHelper$Ress.borderRightStyleString,
          borderBottomStyle: CssDeclarationHelper$Ress.borderBottomStyle,
          borderBottomStyleString: CssDeclarationHelper$Ress.borderBottomStyleString,
          borderLeftStyle: CssDeclarationHelper$Ress.borderLeftStyle,
          borderLeftStyleString: CssDeclarationHelper$Ress.borderLeftStyleString,
          borderWidth: CssDeclarationHelper$Ress.borderWidth,
          borderWidth2: CssDeclarationHelper$Ress.borderWidth2,
          borderWidth3: CssDeclarationHelper$Ress.borderWidth3,
          borderWidth4: CssDeclarationHelper$Ress.borderWidth4,
          borderWidthString: CssDeclarationHelper$Ress.borderWidthString,
          borderTopWidth: CssDeclarationHelper$Ress.borderTopWidth,
          borderTopWidthString: CssDeclarationHelper$Ress.borderTopWidthString,
          borderRightWidth: CssDeclarationHelper$Ress.borderRightWidth,
          borderRightWidthString: CssDeclarationHelper$Ress.borderRightWidthString,
          borderBottomWidth: CssDeclarationHelper$Ress.borderBottomWidth,
          borderBottomWidthString: CssDeclarationHelper$Ress.borderBottomWidthString,
          borderLeftWidth: CssDeclarationHelper$Ress.borderLeftWidth,
          borderLeftWidthString: CssDeclarationHelper$Ress.borderLeftWidthString,
          background: CssDeclarationHelper$Ress.background,
          backgroundString: CssDeclarationHelper$Ress.backgroundString,
          background2: CssDeclarationHelper$Ress.background2,
          background3: CssDeclarationHelper$Ress.background3,
          background4: CssDeclarationHelper$Ress.background4,
          backgroundAttachment: CssDeclarationHelper$Ress.backgroundAttachment,
          backgroundAttachment2: CssDeclarationHelper$Ress.backgroundAttachment2,
          backgroundAttachment3: CssDeclarationHelper$Ress.backgroundAttachment3,
          backgroundAttachment4: CssDeclarationHelper$Ress.backgroundAttachment4,
          backgroundAttachmentString: CssDeclarationHelper$Ress.backgroundAttachmentString,
          backgroundColor: CssDeclarationHelper$Ress.backgroundColor,
          backgroundColorString: CssDeclarationHelper$Ress.backgroundColorString,
          backgroundImage: CssDeclarationHelper$Ress.backgroundImage,
          backgroundImage2: CssDeclarationHelper$Ress.backgroundImage2,
          backgroundImage3: CssDeclarationHelper$Ress.backgroundImage3,
          backgroundImage4: CssDeclarationHelper$Ress.backgroundImage4,
          backgroundImageString: CssDeclarationHelper$Ress.backgroundImageString,
          backgroundPosition: CssDeclarationHelper$Ress.backgroundPosition,
          backgroundPosition2: CssDeclarationHelper$Ress.backgroundPosition2,
          backgroundPosition3: CssDeclarationHelper$Ress.backgroundPosition3,
          backgroundPosition4: CssDeclarationHelper$Ress.backgroundPosition4,
          backgroundPositionString: CssDeclarationHelper$Ress.backgroundPositionString,
          backgroundStyle: CssDeclarationHelper$Ress.backgroundStyle,
          backgroundStyle2: CssDeclarationHelper$Ress.backgroundStyle2,
          backgroundStyle3: CssDeclarationHelper$Ress.backgroundStyle3,
          backgroundStyle4: CssDeclarationHelper$Ress.backgroundStyle4,
          backgroundStyleString: CssDeclarationHelper$Ress.backgroundStyleString,
          margin: CssDeclarationHelper$Ress.margin,
          margin2: CssDeclarationHelper$Ress.margin2,
          margin3: CssDeclarationHelper$Ress.margin3,
          margin4: CssDeclarationHelper$Ress.margin4,
          marginString: CssDeclarationHelper$Ress.marginString,
          marginNumber: CssDeclarationHelper$Ress.marginNumber,
          marginTop: CssDeclarationHelper$Ress.marginTop,
          marginTopString: CssDeclarationHelper$Ress.marginTopString,
          marginTopNumber: CssDeclarationHelper$Ress.marginTopNumber,
          marginRight: CssDeclarationHelper$Ress.marginRight,
          marginRightString: CssDeclarationHelper$Ress.marginRightString,
          marginRightNumber: CssDeclarationHelper$Ress.marginRightNumber,
          marginBottom: CssDeclarationHelper$Ress.marginBottom,
          marginBottomString: CssDeclarationHelper$Ress.marginBottomString,
          marginBottomNumber: CssDeclarationHelper$Ress.marginBottomNumber,
          marginLeft: CssDeclarationHelper$Ress.marginLeft,
          marginLeftString: CssDeclarationHelper$Ress.marginLeftString,
          marginLeftNumber: CssDeclarationHelper$Ress.marginLeftNumber,
          padding: CssDeclarationHelper$Ress.padding,
          padding2: CssDeclarationHelper$Ress.padding2,
          padding3: CssDeclarationHelper$Ress.padding3,
          padding4: CssDeclarationHelper$Ress.padding4,
          paddingString: CssDeclarationHelper$Ress.paddingString,
          paddingNumber: CssDeclarationHelper$Ress.paddingNumber,
          paddingTop: CssDeclarationHelper$Ress.paddingTop,
          paddingTopString: CssDeclarationHelper$Ress.paddingTopString,
          paddingTopNumber: CssDeclarationHelper$Ress.paddingTopNumber,
          paddingRight: CssDeclarationHelper$Ress.paddingRight,
          paddingRightString: CssDeclarationHelper$Ress.paddingRightString,
          paddingRightNumber: CssDeclarationHelper$Ress.paddingRightNumber,
          paddingBottom: CssDeclarationHelper$Ress.paddingBottom,
          paddingBottomString: CssDeclarationHelper$Ress.paddingBottomString,
          paddingBottomNumber: CssDeclarationHelper$Ress.paddingBottomNumber,
          paddingLeft: CssDeclarationHelper$Ress.paddingLeft,
          paddingLeftString: CssDeclarationHelper$Ress.paddingLeftString,
          paddingLeftNumber: CssDeclarationHelper$Ress.paddingLeftNumber,
          clear: CssDeclarationHelper$Ress.clear,
          color: CssDeclarationHelper$Ress.color,
          colorString: CssDeclarationHelper$Ress.colorString,
          cursor: CssDeclarationHelper$Ress.cursor,
          cursor1: CssDeclarationHelper$Ress.cursor1,
          cursor2: CssDeclarationHelper$Ress.cursor2,
          cursor3: CssDeclarationHelper$Ress.cursor3,
          cursor4: CssDeclarationHelper$Ress.cursor4,
          cursorString: CssDeclarationHelper$Ress.cursorString,
          fontWeight: CssDeclarationHelper$Ress.fontWeight,
          fontWeightString: CssDeclarationHelper$Ress.fontWeightString,
          fontWeightNumber: CssDeclarationHelper$Ress.fontWeightNumber,
          selector: include.selector,
          hover: include$1.hover,
          str: CssValueHelper$Ress.str,
          num: CssValueHelper$Ress.num,
          $$int: CssValueHelper$Ress.$$int,
          pct: CssValueHelper$Ress.pct,
          ratio: CssValueHelper$Ress.ratio,
          fr: CssValueHelper$Ress.fr,
          ch: CssValueHelper$Ress.ch,
          em: CssValueHelper$Ress.em,
          ex: CssValueHelper$Ress.ex,
          rem: CssValueHelper$Ress.rem,
          vh: CssValueHelper$Ress.vh,
          vw: CssValueHelper$Ress.vw,
          vmin: CssValueHelper$Ress.vmin,
          vmax: CssValueHelper$Ress.vmax,
          px: CssValueHelper$Ress.px,
          cm: CssValueHelper$Ress.cm,
          mm: CssValueHelper$Ress.mm,
          inch: CssValueHelper$Ress.inch,
          pc: CssValueHelper$Ress.pc,
          pt: CssValueHelper$Ress.pt,
          deg: CssValueHelper$Ress.deg,
          grad: CssValueHelper$Ress.grad,
          rad: CssValueHelper$Ress.rad,
          turn: CssValueHelper$Ress.turn,
          s: CssValueHelper$Ress.s,
          ms: CssValueHelper$Ress.ms,
          hz: CssValueHelper$Ress.hz,
          kHz: CssValueHelper$Ress.kHz,
          dpi: CssValueHelper$Ress.dpi,
          dpcm: CssValueHelper$Ress.dpcm,
          dppx: CssValueHelper$Ress.dppx,
          x: CssValueHelper$Ress.x,
          position2: CssValueHelper$Ress.position2,
          position3: CssValueHelper$Ress.position3,
          position4: CssValueHelper$Ress.position4,
          src: CssValueHelper$Ress.src,
          bgLayer: CssValueHelper$Ress.bgLayer,
          bgSize2: CssValueHelper$Ress.bgSize2,
          hsl: CssValueHelper$Ress.hsl,
          hsla: CssValueHelper$Ress.hsla,
          rgb: CssValueHelper$Ress.rgb,
          rgba: CssValueHelper$Ress.rgba,
          hexColor: CssValueHelper$Ress.hexColor,
          url: CssValueHelper$Ress.url,
          image: CssValueHelper$Ress.image,
          linearColorStop2: CssValueHelper$Ress.linearColorStop2,
          linearColorStop3: CssValueHelper$Ress.linearColorStop3,
          linearGradient: CssValueHelper$Ress.linearGradient,
          linearGradient2: CssValueHelper$Ress.linearGradient2,
          linearGradient3: CssValueHelper$Ress.linearGradient3,
          linearGradient4: CssValueHelper$Ress.linearGradient4,
          repeatingLinearGradient: CssValueHelper$Ress.repeatingLinearGradient,
          repeatingLinearGradient2: CssValueHelper$Ress.repeatingLinearGradient2,
          repeatingLinearGradient3: CssValueHelper$Ress.repeatingLinearGradient3,
          repeatingLinearGradient4: CssValueHelper$Ress.repeatingLinearGradient4,
          radialGradient: CssValueHelper$Ress.radialGradient,
          radialGradient2: CssValueHelper$Ress.radialGradient2,
          radialGradient3: CssValueHelper$Ress.radialGradient3,
          radialGradient4: CssValueHelper$Ress.radialGradient4,
          repeatingRadialGradient: CssValueHelper$Ress.repeatingRadialGradient,
          repeatingRadialGradient2: CssValueHelper$Ress.repeatingRadialGradient2,
          repeatingRadialGradient3: CssValueHelper$Ress.repeatingRadialGradient3,
          repeatingRadialGradient4: CssValueHelper$Ress.repeatingRadialGradient4,
          conicGradient: CssValueHelper$Ress.conicGradient,
          conicGradient2: CssValueHelper$Ress.conicGradient2,
          conicGradient3: CssValueHelper$Ress.conicGradient3,
          conicGradient4: CssValueHelper$Ress.conicGradient4,
          repeatingConicGradient: CssValueHelper$Ress.repeatingConicGradient,
          repeatingConicGradient2: CssValueHelper$Ress.repeatingConicGradient2,
          repeatingConicGradient3: CssValueHelper$Ress.repeatingConicGradient3,
          repeatingConicGradient4: CssValueHelper$Ress.repeatingConicGradient4,
          fontFace: CssAtRuleHelper$Ress.fontFace,
          Background: undefined,
          BackgroundAttachment: undefined,
          BackgroundColor: undefined,
          BackgroundImage: undefined,
          BackgroundPosition: undefined,
          BackgroundStyle: undefined,
          Border: undefined,
          BorderBottomColor: undefined,
          BorderBottomStyle: undefined,
          BorderBottomWidth: undefined,
          BorderColor: undefined,
          BorderLeftColor: undefined,
          BorderLeftStyle: undefined,
          BorderLeftWidth: undefined,
          BorderRightColor: undefined,
          BorderRightStyle: undefined,
          BorderRightWidth: undefined,
          BorderStyle: undefined,
          BorderTopColor: undefined,
          BorderTopStyle: undefined,
          BorderTopWidth: undefined,
          BorderWidth: undefined,
          Clear: undefined,
          Color: undefined,
          Cursor: undefined,
          FontFamily: undefined,
          FontWeight: undefined,
          Margin: undefined,
          MarginBottom: undefined,
          MarginLeft: undefined,
          MarginRight: undefined,
          MarginTop: undefined,
          Padding: undefined,
          PaddingBottom: undefined,
          PaddingLeft: undefined,
          PaddingRight: undefined,
          PaddingTop: undefined,
          $$FontFace: undefined
        };
}

var Declarations = CssAdvancedDeclarations$Ress.Make({});

var Rules = CssRules$Ress.Make({});

var include = CssSelectorHelper$Ress.Make({
      declarations: Declarations.make
    });

var include$1 = CssPseudoClassHelper$Ress.Make({
      declarations: Declarations.make
    });

var property = CssDeclarationHelper$Ress.property;

var border = CssDeclarationHelper$Ress.border;

var borderString = CssDeclarationHelper$Ress.borderString;

var borderTop = CssDeclarationHelper$Ress.borderTop;

var borderTopString = CssDeclarationHelper$Ress.borderTopString;

var borderLeft = CssDeclarationHelper$Ress.borderLeft;

var borderLeftString = CssDeclarationHelper$Ress.borderLeftString;

var borderRight = CssDeclarationHelper$Ress.borderRight;

var borderRightString = CssDeclarationHelper$Ress.borderRightString;

var borderBottom = CssDeclarationHelper$Ress.borderBottom;

var borderBottomString = CssDeclarationHelper$Ress.borderBottomString;

var borderColor = CssDeclarationHelper$Ress.borderColor;

var borderColor2 = CssDeclarationHelper$Ress.borderColor2;

var borderColor3 = CssDeclarationHelper$Ress.borderColor3;

var borderColor4 = CssDeclarationHelper$Ress.borderColor4;

var borderColorString = CssDeclarationHelper$Ress.borderColorString;

var borderTopColor = CssDeclarationHelper$Ress.borderTopColor;

var borderTopColorString = CssDeclarationHelper$Ress.borderTopColorString;

var borderRightColor = CssDeclarationHelper$Ress.borderRightColor;

var borderRightColorString = CssDeclarationHelper$Ress.borderRightColorString;

var borderBottomColor = CssDeclarationHelper$Ress.borderBottomColor;

var borderBottomColorString = CssDeclarationHelper$Ress.borderBottomColorString;

var borderLeftColor = CssDeclarationHelper$Ress.borderLeftColor;

var borderLeftColorString = CssDeclarationHelper$Ress.borderLeftColorString;

var borderStyle = CssDeclarationHelper$Ress.borderStyle;

var borderStyle2 = CssDeclarationHelper$Ress.borderStyle2;

var borderStyle3 = CssDeclarationHelper$Ress.borderStyle3;

var borderStyle4 = CssDeclarationHelper$Ress.borderStyle4;

var borderStyleString = CssDeclarationHelper$Ress.borderStyleString;

var borderTopStyle = CssDeclarationHelper$Ress.borderTopStyle;

var borderTopStyleString = CssDeclarationHelper$Ress.borderTopStyleString;

var borderRightStyle = CssDeclarationHelper$Ress.borderRightStyle;

var borderRightStyleString = CssDeclarationHelper$Ress.borderRightStyleString;

var borderBottomStyle = CssDeclarationHelper$Ress.borderBottomStyle;

var borderBottomStyleString = CssDeclarationHelper$Ress.borderBottomStyleString;

var borderLeftStyle = CssDeclarationHelper$Ress.borderLeftStyle;

var borderLeftStyleString = CssDeclarationHelper$Ress.borderLeftStyleString;

var borderWidth = CssDeclarationHelper$Ress.borderWidth;

var borderWidth2 = CssDeclarationHelper$Ress.borderWidth2;

var borderWidth3 = CssDeclarationHelper$Ress.borderWidth3;

var borderWidth4 = CssDeclarationHelper$Ress.borderWidth4;

var borderWidthString = CssDeclarationHelper$Ress.borderWidthString;

var borderTopWidth = CssDeclarationHelper$Ress.borderTopWidth;

var borderTopWidthString = CssDeclarationHelper$Ress.borderTopWidthString;

var borderRightWidth = CssDeclarationHelper$Ress.borderRightWidth;

var borderRightWidthString = CssDeclarationHelper$Ress.borderRightWidthString;

var borderBottomWidth = CssDeclarationHelper$Ress.borderBottomWidth;

var borderBottomWidthString = CssDeclarationHelper$Ress.borderBottomWidthString;

var borderLeftWidth = CssDeclarationHelper$Ress.borderLeftWidth;

var borderLeftWidthString = CssDeclarationHelper$Ress.borderLeftWidthString;

var background = CssDeclarationHelper$Ress.background;

var backgroundString = CssDeclarationHelper$Ress.backgroundString;

var background2 = CssDeclarationHelper$Ress.background2;

var background3 = CssDeclarationHelper$Ress.background3;

var background4 = CssDeclarationHelper$Ress.background4;

var backgroundAttachment = CssDeclarationHelper$Ress.backgroundAttachment;

var backgroundAttachment2 = CssDeclarationHelper$Ress.backgroundAttachment2;

var backgroundAttachment3 = CssDeclarationHelper$Ress.backgroundAttachment3;

var backgroundAttachment4 = CssDeclarationHelper$Ress.backgroundAttachment4;

var backgroundAttachmentString = CssDeclarationHelper$Ress.backgroundAttachmentString;

var backgroundColor = CssDeclarationHelper$Ress.backgroundColor;

var backgroundColorString = CssDeclarationHelper$Ress.backgroundColorString;

var backgroundImage = CssDeclarationHelper$Ress.backgroundImage;

var backgroundImage2 = CssDeclarationHelper$Ress.backgroundImage2;

var backgroundImage3 = CssDeclarationHelper$Ress.backgroundImage3;

var backgroundImage4 = CssDeclarationHelper$Ress.backgroundImage4;

var backgroundImageString = CssDeclarationHelper$Ress.backgroundImageString;

var backgroundPosition = CssDeclarationHelper$Ress.backgroundPosition;

var backgroundPosition2 = CssDeclarationHelper$Ress.backgroundPosition2;

var backgroundPosition3 = CssDeclarationHelper$Ress.backgroundPosition3;

var backgroundPosition4 = CssDeclarationHelper$Ress.backgroundPosition4;

var backgroundPositionString = CssDeclarationHelper$Ress.backgroundPositionString;

var backgroundStyle = CssDeclarationHelper$Ress.backgroundStyle;

var backgroundStyle2 = CssDeclarationHelper$Ress.backgroundStyle2;

var backgroundStyle3 = CssDeclarationHelper$Ress.backgroundStyle3;

var backgroundStyle4 = CssDeclarationHelper$Ress.backgroundStyle4;

var backgroundStyleString = CssDeclarationHelper$Ress.backgroundStyleString;

var margin = CssDeclarationHelper$Ress.margin;

var margin2 = CssDeclarationHelper$Ress.margin2;

var margin3 = CssDeclarationHelper$Ress.margin3;

var margin4 = CssDeclarationHelper$Ress.margin4;

var marginString = CssDeclarationHelper$Ress.marginString;

var marginNumber = CssDeclarationHelper$Ress.marginNumber;

var marginTop = CssDeclarationHelper$Ress.marginTop;

var marginTopString = CssDeclarationHelper$Ress.marginTopString;

var marginTopNumber = CssDeclarationHelper$Ress.marginTopNumber;

var marginRight = CssDeclarationHelper$Ress.marginRight;

var marginRightString = CssDeclarationHelper$Ress.marginRightString;

var marginRightNumber = CssDeclarationHelper$Ress.marginRightNumber;

var marginBottom = CssDeclarationHelper$Ress.marginBottom;

var marginBottomString = CssDeclarationHelper$Ress.marginBottomString;

var marginBottomNumber = CssDeclarationHelper$Ress.marginBottomNumber;

var marginLeft = CssDeclarationHelper$Ress.marginLeft;

var marginLeftString = CssDeclarationHelper$Ress.marginLeftString;

var marginLeftNumber = CssDeclarationHelper$Ress.marginLeftNumber;

var padding = CssDeclarationHelper$Ress.padding;

var padding2 = CssDeclarationHelper$Ress.padding2;

var padding3 = CssDeclarationHelper$Ress.padding3;

var padding4 = CssDeclarationHelper$Ress.padding4;

var paddingString = CssDeclarationHelper$Ress.paddingString;

var paddingNumber = CssDeclarationHelper$Ress.paddingNumber;

var paddingTop = CssDeclarationHelper$Ress.paddingTop;

var paddingTopString = CssDeclarationHelper$Ress.paddingTopString;

var paddingTopNumber = CssDeclarationHelper$Ress.paddingTopNumber;

var paddingRight = CssDeclarationHelper$Ress.paddingRight;

var paddingRightString = CssDeclarationHelper$Ress.paddingRightString;

var paddingRightNumber = CssDeclarationHelper$Ress.paddingRightNumber;

var paddingBottom = CssDeclarationHelper$Ress.paddingBottom;

var paddingBottomString = CssDeclarationHelper$Ress.paddingBottomString;

var paddingBottomNumber = CssDeclarationHelper$Ress.paddingBottomNumber;

var paddingLeft = CssDeclarationHelper$Ress.paddingLeft;

var paddingLeftString = CssDeclarationHelper$Ress.paddingLeftString;

var paddingLeftNumber = CssDeclarationHelper$Ress.paddingLeftNumber;

var clear = CssDeclarationHelper$Ress.clear;

var color = CssDeclarationHelper$Ress.color;

var colorString = CssDeclarationHelper$Ress.colorString;

var cursor = CssDeclarationHelper$Ress.cursor;

var cursor1 = CssDeclarationHelper$Ress.cursor1;

var cursor2 = CssDeclarationHelper$Ress.cursor2;

var cursor3 = CssDeclarationHelper$Ress.cursor3;

var cursor4 = CssDeclarationHelper$Ress.cursor4;

var cursorString = CssDeclarationHelper$Ress.cursorString;

var fontWeight = CssDeclarationHelper$Ress.fontWeight;

var fontWeightString = CssDeclarationHelper$Ress.fontWeightString;

var fontWeightNumber = CssDeclarationHelper$Ress.fontWeightNumber;

var selector = include.selector;

var hover = include$1.hover;

var str = CssValueHelper$Ress.str;

var num = CssValueHelper$Ress.num;

var $$int = CssValueHelper$Ress.$$int;

var pct = CssValueHelper$Ress.pct;

var ratio = CssValueHelper$Ress.ratio;

var fr = CssValueHelper$Ress.fr;

var ch = CssValueHelper$Ress.ch;

var em = CssValueHelper$Ress.em;

var ex = CssValueHelper$Ress.ex;

var rem = CssValueHelper$Ress.rem;

var vh = CssValueHelper$Ress.vh;

var vw = CssValueHelper$Ress.vw;

var vmin = CssValueHelper$Ress.vmin;

var vmax = CssValueHelper$Ress.vmax;

var px = CssValueHelper$Ress.px;

var cm = CssValueHelper$Ress.cm;

var mm = CssValueHelper$Ress.mm;

var inch = CssValueHelper$Ress.inch;

var pc = CssValueHelper$Ress.pc;

var pt = CssValueHelper$Ress.pt;

var deg = CssValueHelper$Ress.deg;

var grad = CssValueHelper$Ress.grad;

var rad = CssValueHelper$Ress.rad;

var turn = CssValueHelper$Ress.turn;

var s = CssValueHelper$Ress.s;

var ms = CssValueHelper$Ress.ms;

var hz = CssValueHelper$Ress.hz;

var kHz = CssValueHelper$Ress.kHz;

var dpi = CssValueHelper$Ress.dpi;

var dpcm = CssValueHelper$Ress.dpcm;

var dppx = CssValueHelper$Ress.dppx;

var x = CssValueHelper$Ress.x;

var position2 = CssValueHelper$Ress.position2;

var position3 = CssValueHelper$Ress.position3;

var position4 = CssValueHelper$Ress.position4;

var src = CssValueHelper$Ress.src;

var bgLayer = CssValueHelper$Ress.bgLayer;

var bgSize2 = CssValueHelper$Ress.bgSize2;

var hsl = CssValueHelper$Ress.hsl;

var hsla = CssValueHelper$Ress.hsla;

var rgb = CssValueHelper$Ress.rgb;

var rgba = CssValueHelper$Ress.rgba;

var hexColor = CssValueHelper$Ress.hexColor;

var url = CssValueHelper$Ress.url;

var image = CssValueHelper$Ress.image;

var linearColorStop2 = CssValueHelper$Ress.linearColorStop2;

var linearColorStop3 = CssValueHelper$Ress.linearColorStop3;

var linearGradient = CssValueHelper$Ress.linearGradient;

var linearGradient2 = CssValueHelper$Ress.linearGradient2;

var linearGradient3 = CssValueHelper$Ress.linearGradient3;

var linearGradient4 = CssValueHelper$Ress.linearGradient4;

var repeatingLinearGradient = CssValueHelper$Ress.repeatingLinearGradient;

var repeatingLinearGradient2 = CssValueHelper$Ress.repeatingLinearGradient2;

var repeatingLinearGradient3 = CssValueHelper$Ress.repeatingLinearGradient3;

var repeatingLinearGradient4 = CssValueHelper$Ress.repeatingLinearGradient4;

var radialGradient = CssValueHelper$Ress.radialGradient;

var radialGradient2 = CssValueHelper$Ress.radialGradient2;

var radialGradient3 = CssValueHelper$Ress.radialGradient3;

var radialGradient4 = CssValueHelper$Ress.radialGradient4;

var repeatingRadialGradient = CssValueHelper$Ress.repeatingRadialGradient;

var repeatingRadialGradient2 = CssValueHelper$Ress.repeatingRadialGradient2;

var repeatingRadialGradient3 = CssValueHelper$Ress.repeatingRadialGradient3;

var repeatingRadialGradient4 = CssValueHelper$Ress.repeatingRadialGradient4;

var conicGradient = CssValueHelper$Ress.conicGradient;

var conicGradient2 = CssValueHelper$Ress.conicGradient2;

var conicGradient3 = CssValueHelper$Ress.conicGradient3;

var conicGradient4 = CssValueHelper$Ress.conicGradient4;

var repeatingConicGradient = CssValueHelper$Ress.repeatingConicGradient;

var repeatingConicGradient2 = CssValueHelper$Ress.repeatingConicGradient2;

var repeatingConicGradient3 = CssValueHelper$Ress.repeatingConicGradient3;

var repeatingConicGradient4 = CssValueHelper$Ress.repeatingConicGradient4;

var fontFace = CssAtRuleHelper$Ress.fontFace;

var Background;

var BackgroundAttachment;

var BackgroundColor;

var BackgroundImage;

var BackgroundPosition;

var BackgroundStyle;

var Border;

var BorderBottomColor;

var BorderBottomStyle;

var BorderBottomWidth;

var BorderColor;

var BorderLeftColor;

var BorderLeftStyle;

var BorderLeftWidth;

var BorderRightColor;

var BorderRightStyle;

var BorderRightWidth;

var BorderStyle;

var BorderTopColor;

var BorderTopStyle;

var BorderTopWidth;

var BorderWidth;

var Clear;

var Color;

var Cursor;

var FontFamily;

var FontWeight;

var Margin;

var MarginBottom;

var MarginLeft;

var MarginRight;

var MarginTop;

var Padding;

var PaddingBottom;

var PaddingLeft;

var PaddingRight;

var PaddingTop;

var $$FontFace;

var style = Declarations.make;

var styles = Rules.make;

exports.Make = Make;
exports.Declarations = Declarations;
exports.Rules = Rules;
exports.property = property;
exports.border = border;
exports.borderString = borderString;
exports.borderTop = borderTop;
exports.borderTopString = borderTopString;
exports.borderLeft = borderLeft;
exports.borderLeftString = borderLeftString;
exports.borderRight = borderRight;
exports.borderRightString = borderRightString;
exports.borderBottom = borderBottom;
exports.borderBottomString = borderBottomString;
exports.borderColor = borderColor;
exports.borderColor2 = borderColor2;
exports.borderColor3 = borderColor3;
exports.borderColor4 = borderColor4;
exports.borderColorString = borderColorString;
exports.borderTopColor = borderTopColor;
exports.borderTopColorString = borderTopColorString;
exports.borderRightColor = borderRightColor;
exports.borderRightColorString = borderRightColorString;
exports.borderBottomColor = borderBottomColor;
exports.borderBottomColorString = borderBottomColorString;
exports.borderLeftColor = borderLeftColor;
exports.borderLeftColorString = borderLeftColorString;
exports.borderStyle = borderStyle;
exports.borderStyle2 = borderStyle2;
exports.borderStyle3 = borderStyle3;
exports.borderStyle4 = borderStyle4;
exports.borderStyleString = borderStyleString;
exports.borderTopStyle = borderTopStyle;
exports.borderTopStyleString = borderTopStyleString;
exports.borderRightStyle = borderRightStyle;
exports.borderRightStyleString = borderRightStyleString;
exports.borderBottomStyle = borderBottomStyle;
exports.borderBottomStyleString = borderBottomStyleString;
exports.borderLeftStyle = borderLeftStyle;
exports.borderLeftStyleString = borderLeftStyleString;
exports.borderWidth = borderWidth;
exports.borderWidth2 = borderWidth2;
exports.borderWidth3 = borderWidth3;
exports.borderWidth4 = borderWidth4;
exports.borderWidthString = borderWidthString;
exports.borderTopWidth = borderTopWidth;
exports.borderTopWidthString = borderTopWidthString;
exports.borderRightWidth = borderRightWidth;
exports.borderRightWidthString = borderRightWidthString;
exports.borderBottomWidth = borderBottomWidth;
exports.borderBottomWidthString = borderBottomWidthString;
exports.borderLeftWidth = borderLeftWidth;
exports.borderLeftWidthString = borderLeftWidthString;
exports.background = background;
exports.backgroundString = backgroundString;
exports.background2 = background2;
exports.background3 = background3;
exports.background4 = background4;
exports.backgroundAttachment = backgroundAttachment;
exports.backgroundAttachment2 = backgroundAttachment2;
exports.backgroundAttachment3 = backgroundAttachment3;
exports.backgroundAttachment4 = backgroundAttachment4;
exports.backgroundAttachmentString = backgroundAttachmentString;
exports.backgroundColor = backgroundColor;
exports.backgroundColorString = backgroundColorString;
exports.backgroundImage = backgroundImage;
exports.backgroundImage2 = backgroundImage2;
exports.backgroundImage3 = backgroundImage3;
exports.backgroundImage4 = backgroundImage4;
exports.backgroundImageString = backgroundImageString;
exports.backgroundPosition = backgroundPosition;
exports.backgroundPosition2 = backgroundPosition2;
exports.backgroundPosition3 = backgroundPosition3;
exports.backgroundPosition4 = backgroundPosition4;
exports.backgroundPositionString = backgroundPositionString;
exports.backgroundStyle = backgroundStyle;
exports.backgroundStyle2 = backgroundStyle2;
exports.backgroundStyle3 = backgroundStyle3;
exports.backgroundStyle4 = backgroundStyle4;
exports.backgroundStyleString = backgroundStyleString;
exports.margin = margin;
exports.margin2 = margin2;
exports.margin3 = margin3;
exports.margin4 = margin4;
exports.marginString = marginString;
exports.marginNumber = marginNumber;
exports.marginTop = marginTop;
exports.marginTopString = marginTopString;
exports.marginTopNumber = marginTopNumber;
exports.marginRight = marginRight;
exports.marginRightString = marginRightString;
exports.marginRightNumber = marginRightNumber;
exports.marginBottom = marginBottom;
exports.marginBottomString = marginBottomString;
exports.marginBottomNumber = marginBottomNumber;
exports.marginLeft = marginLeft;
exports.marginLeftString = marginLeftString;
exports.marginLeftNumber = marginLeftNumber;
exports.padding = padding;
exports.padding2 = padding2;
exports.padding3 = padding3;
exports.padding4 = padding4;
exports.paddingString = paddingString;
exports.paddingNumber = paddingNumber;
exports.paddingTop = paddingTop;
exports.paddingTopString = paddingTopString;
exports.paddingTopNumber = paddingTopNumber;
exports.paddingRight = paddingRight;
exports.paddingRightString = paddingRightString;
exports.paddingRightNumber = paddingRightNumber;
exports.paddingBottom = paddingBottom;
exports.paddingBottomString = paddingBottomString;
exports.paddingBottomNumber = paddingBottomNumber;
exports.paddingLeft = paddingLeft;
exports.paddingLeftString = paddingLeftString;
exports.paddingLeftNumber = paddingLeftNumber;
exports.clear = clear;
exports.color = color;
exports.colorString = colorString;
exports.cursor = cursor;
exports.cursor1 = cursor1;
exports.cursor2 = cursor2;
exports.cursor3 = cursor3;
exports.cursor4 = cursor4;
exports.cursorString = cursorString;
exports.fontWeight = fontWeight;
exports.fontWeightString = fontWeightString;
exports.fontWeightNumber = fontWeightNumber;
exports.selector = selector;
exports.hover = hover;
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
exports.fontFace = fontFace;
exports.Background = Background;
exports.BackgroundAttachment = BackgroundAttachment;
exports.BackgroundColor = BackgroundColor;
exports.BackgroundImage = BackgroundImage;
exports.BackgroundPosition = BackgroundPosition;
exports.BackgroundStyle = BackgroundStyle;
exports.Border = Border;
exports.BorderBottomColor = BorderBottomColor;
exports.BorderBottomStyle = BorderBottomStyle;
exports.BorderBottomWidth = BorderBottomWidth;
exports.BorderColor = BorderColor;
exports.BorderLeftColor = BorderLeftColor;
exports.BorderLeftStyle = BorderLeftStyle;
exports.BorderLeftWidth = BorderLeftWidth;
exports.BorderRightColor = BorderRightColor;
exports.BorderRightStyle = BorderRightStyle;
exports.BorderRightWidth = BorderRightWidth;
exports.BorderStyle = BorderStyle;
exports.BorderTopColor = BorderTopColor;
exports.BorderTopStyle = BorderTopStyle;
exports.BorderTopWidth = BorderTopWidth;
exports.BorderWidth = BorderWidth;
exports.Clear = Clear;
exports.Color = Color;
exports.Cursor = Cursor;
exports.FontFamily = FontFamily;
exports.FontWeight = FontWeight;
exports.Margin = Margin;
exports.MarginBottom = MarginBottom;
exports.MarginLeft = MarginLeft;
exports.MarginRight = MarginRight;
exports.MarginTop = MarginTop;
exports.Padding = Padding;
exports.PaddingBottom = PaddingBottom;
exports.PaddingLeft = PaddingLeft;
exports.PaddingRight = PaddingRight;
exports.PaddingTop = PaddingTop;
exports.$$FontFace = $$FontFace;
exports.style = style;
exports.styles = styles;
/* Declarations Not a pure module */
