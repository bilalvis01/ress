// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssRule$Ress = require("../rule/CssRule.js");
var CssPseudoClass$Ress = require("../rule/CssPseudoClass.js");
var CssValueHelper$Ress = require("../value/CssValueHelper.js");
var CssAtRuleHelper$Ress = require("../at_rule/CssAtRuleHelper.js");
var CssDeclarationHelper$Ress = require("../declaration/CssDeclarationHelper.js");
var CssDeclarationFnHelper$Ress = require("../declaration/CssDeclarationFnHelper.js");
var CssMui5StatementBlocks$Ress = require("./CssMui5StatementBlocks.js");
var CssMui5DeclarationBlock$Ress = require("./CssMui5DeclarationBlock.js");

function Make(Type) {
  var DeclarationBlock = CssMui5DeclarationBlock$Ress.Make({});
  var StatementBlocks = CssMui5StatementBlocks$Ress.Make({});
  var include = CssRule$Ress.MakeHelper({
        declarationBlock: DeclarationBlock.make
      });
  var include$1 = CssPseudoClass$Ress.MakeHelper({
        declarationBlock: DeclarationBlock.make
      });
  return {
          DeclarationBlock: DeclarationBlock,
          StatementBlocks: StatementBlocks,
          style: DeclarationBlock.make,
          styles: StatementBlocks.make,
          Property: undefined,
          Background: undefined,
          BackgroundAttachment: undefined,
          BackgroundColor: undefined,
          BackgroundImage: undefined,
          BackgroundPosition: undefined,
          BackgroundStyle: undefined,
          Border: undefined,
          BorderTop: undefined,
          BorderRight: undefined,
          BorderBottom: undefined,
          BorderLeft: undefined,
          BorderTopColor: undefined,
          BorderRightColor: undefined,
          BorderBottomColor: undefined,
          BorderLeftColor: undefined,
          BorderTopStyle: undefined,
          BorderRightStyle: undefined,
          BorderBottomStyle: undefined,
          BorderLeftStyle: undefined,
          BorderTopWidth: undefined,
          BorderRightWidth: undefined,
          BorderBottomWidth: undefined,
          BorderLeftWidth: undefined,
          BorderColor: undefined,
          BorderStyle: undefined,
          BorderWidth: undefined,
          Clear: undefined,
          Color: undefined,
          Cursor: undefined,
          FontFamily: undefined,
          FontWeight: undefined,
          Margin: undefined,
          MarginTop: undefined,
          MarginRight: undefined,
          MarginBottom: undefined,
          MarginLeft: undefined,
          Padding: undefined,
          PaddingTop: undefined,
          PaddingRight: undefined,
          PaddingBottom: undefined,
          PaddingLeft: undefined,
          $$FontFace: undefined,
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
          rule: include.rule,
          atRule: CssAtRuleHelper$Ress.atRule,
          fontFace: CssAtRuleHelper$Ress.fontFace,
          pseudoClass: include$1.pseudoClass,
          hover: include$1.hover,
          background: CssDeclarationHelper$Ress.background,
          background2: CssDeclarationHelper$Ress.background2,
          background3: CssDeclarationHelper$Ress.background3,
          background4: CssDeclarationHelper$Ress.background4,
          backgroundUnion: CssDeclarationHelper$Ress.backgroundUnion,
          backgroundString: CssDeclarationHelper$Ress.backgroundString,
          backgroundAttachment: CssDeclarationHelper$Ress.backgroundAttachment,
          backgroundAttachment2: CssDeclarationHelper$Ress.backgroundAttachment2,
          backgroundAttachment3: CssDeclarationHelper$Ress.backgroundAttachment3,
          backgroundAttachment4: CssDeclarationHelper$Ress.backgroundAttachment4,
          backgroundAttachmentUnion: CssDeclarationHelper$Ress.backgroundAttachmentUnion,
          backgroundAttachmentString: CssDeclarationHelper$Ress.backgroundAttachmentString,
          backgroundColor: CssDeclarationHelper$Ress.backgroundColor,
          backgroundColorUnion: CssDeclarationHelper$Ress.backgroundColorUnion,
          backgroundColorString: CssDeclarationHelper$Ress.backgroundColorString,
          backgroundImage: CssDeclarationHelper$Ress.backgroundImage,
          backgroundImage2: CssDeclarationHelper$Ress.backgroundImage2,
          backgroundImage3: CssDeclarationHelper$Ress.backgroundImage3,
          backgroundImage4: CssDeclarationHelper$Ress.backgroundImage4,
          backgroundImageUnion: CssDeclarationHelper$Ress.backgroundImageUnion,
          backgroundImageString: CssDeclarationHelper$Ress.backgroundImageString,
          backgroundPosition: CssDeclarationHelper$Ress.backgroundPosition,
          backgroundPosition2: CssDeclarationHelper$Ress.backgroundPosition2,
          backgroundPosition3: CssDeclarationHelper$Ress.backgroundPosition3,
          backgroundPosition4: CssDeclarationHelper$Ress.backgroundPosition4,
          backgroundPositionUnion: CssDeclarationHelper$Ress.backgroundPositionUnion,
          backgroundPositionString: CssDeclarationHelper$Ress.backgroundPositionString,
          backgroundStyle: CssDeclarationHelper$Ress.backgroundStyle,
          backgroundStyle2: CssDeclarationHelper$Ress.backgroundStyle2,
          backgroundStyle3: CssDeclarationHelper$Ress.backgroundStyle3,
          backgroundStyle4: CssDeclarationHelper$Ress.backgroundStyle4,
          backgroundStyleUnion: CssDeclarationHelper$Ress.backgroundStyleUnion,
          backgroundStyleString: CssDeclarationHelper$Ress.backgroundStyleString,
          border: CssDeclarationHelper$Ress.border,
          borderUnion: CssDeclarationHelper$Ress.borderUnion,
          borderString: CssDeclarationHelper$Ress.borderString,
          borderTop: CssDeclarationHelper$Ress.borderTop,
          borderTopUnion: CssDeclarationHelper$Ress.borderTopUnion,
          borderTopString: CssDeclarationHelper$Ress.borderTopString,
          borderRight: CssDeclarationHelper$Ress.borderRight,
          borderRightUnion: CssDeclarationHelper$Ress.borderRightUnion,
          borderRightString: CssDeclarationHelper$Ress.borderRightString,
          borderBottom: CssDeclarationHelper$Ress.borderBottom,
          borderBottomUnion: CssDeclarationHelper$Ress.borderBottomUnion,
          borderBottomString: CssDeclarationHelper$Ress.borderBottomString,
          borderLeft: CssDeclarationHelper$Ress.borderLeft,
          borderLeftUnion: CssDeclarationHelper$Ress.borderLeftUnion,
          borderLeftString: CssDeclarationHelper$Ress.borderLeftString,
          borderTopColor: CssDeclarationHelper$Ress.borderTopColor,
          borderTopColorUnion: CssDeclarationHelper$Ress.borderTopColorUnion,
          borderTopColorString: CssDeclarationHelper$Ress.borderTopColorString,
          borderRightColor: CssDeclarationHelper$Ress.borderRightColor,
          borderRightColorUnion: CssDeclarationHelper$Ress.borderRightColorUnion,
          borderRightColorString: CssDeclarationHelper$Ress.borderRightColorString,
          borderBottomColor: CssDeclarationHelper$Ress.borderBottomColor,
          borderBottomColorUnion: CssDeclarationHelper$Ress.borderBottomColorUnion,
          borderBottomColorString: CssDeclarationHelper$Ress.borderBottomColorString,
          borderLeftColor: CssDeclarationHelper$Ress.borderLeftColor,
          borderLeftColorUnion: CssDeclarationHelper$Ress.borderLeftColorUnion,
          borderLeftColorString: CssDeclarationHelper$Ress.borderLeftColorString,
          borderTopStyle: CssDeclarationHelper$Ress.borderTopStyle,
          borderTopStyleUnion: CssDeclarationHelper$Ress.borderTopStyleUnion,
          borderTopStyleString: CssDeclarationHelper$Ress.borderTopStyleString,
          borderRightStyle: CssDeclarationHelper$Ress.borderRightStyle,
          borderRightStyleUnion: CssDeclarationHelper$Ress.borderRightStyleUnion,
          borderRightStyleString: CssDeclarationHelper$Ress.borderRightStyleString,
          borderBottomStyle: CssDeclarationHelper$Ress.borderBottomStyle,
          borderBottomStyleUnion: CssDeclarationHelper$Ress.borderBottomStyleUnion,
          borderBottomStyleString: CssDeclarationHelper$Ress.borderBottomStyleString,
          borderLeftStyle: CssDeclarationHelper$Ress.borderLeftStyle,
          borderLeftStyleUnion: CssDeclarationHelper$Ress.borderLeftStyleUnion,
          borderLeftStyleString: CssDeclarationHelper$Ress.borderLeftStyleString,
          borderTopWidth: CssDeclarationHelper$Ress.borderTopWidth,
          borderTopWidthUnion: CssDeclarationHelper$Ress.borderTopWidthUnion,
          borderTopWidthString: CssDeclarationHelper$Ress.borderTopWidthString,
          borderRightWidth: CssDeclarationHelper$Ress.borderRightWidth,
          borderRightWidthUnion: CssDeclarationHelper$Ress.borderRightWidthUnion,
          borderRightWidthString: CssDeclarationHelper$Ress.borderRightWidthString,
          borderBottomWidth: CssDeclarationHelper$Ress.borderBottomWidth,
          borderBottomWidthUnion: CssDeclarationHelper$Ress.borderBottomWidthUnion,
          borderBottomWidthString: CssDeclarationHelper$Ress.borderBottomWidthString,
          borderLeftWidth: CssDeclarationHelper$Ress.borderLeftWidth,
          borderLeftWidthUnion: CssDeclarationHelper$Ress.borderLeftWidthUnion,
          borderLeftWidthString: CssDeclarationHelper$Ress.borderLeftWidthString,
          borderColor: CssDeclarationHelper$Ress.borderColor,
          borderColor2: CssDeclarationHelper$Ress.borderColor2,
          borderColor3: CssDeclarationHelper$Ress.borderColor3,
          borderColor4: CssDeclarationHelper$Ress.borderColor4,
          borderColorUnion: CssDeclarationHelper$Ress.borderColorUnion,
          borderColorString: CssDeclarationHelper$Ress.borderColorString,
          borderStyle: CssDeclarationHelper$Ress.borderStyle,
          borderStyle2: CssDeclarationHelper$Ress.borderStyle2,
          borderStyle3: CssDeclarationHelper$Ress.borderStyle3,
          borderStyle4: CssDeclarationHelper$Ress.borderStyle4,
          borderStyleUnion: CssDeclarationHelper$Ress.borderStyleUnion,
          borderStyleString: CssDeclarationHelper$Ress.borderStyleString,
          borderWidth: CssDeclarationHelper$Ress.borderWidth,
          borderWidth2: CssDeclarationHelper$Ress.borderWidth2,
          borderWidth3: CssDeclarationHelper$Ress.borderWidth3,
          borderWidth4: CssDeclarationHelper$Ress.borderWidth4,
          borderWidthUnion: CssDeclarationHelper$Ress.borderWidthUnion,
          borderWidthString: CssDeclarationHelper$Ress.borderWidthString,
          clear: CssDeclarationHelper$Ress.clear,
          color: CssDeclarationHelper$Ress.color,
          colorUnion: CssDeclarationHelper$Ress.colorUnion,
          colorString: CssDeclarationHelper$Ress.colorString,
          cursor: CssDeclarationHelper$Ress.cursor,
          cursor1: CssDeclarationHelper$Ress.cursor1,
          cursor2: CssDeclarationHelper$Ress.cursor2,
          cursor3: CssDeclarationHelper$Ress.cursor3,
          cursor4: CssDeclarationHelper$Ress.cursor4,
          cursorUnion: CssDeclarationHelper$Ress.cursorUnion,
          cursorString: CssDeclarationHelper$Ress.cursorString,
          fontFamily: CssDeclarationHelper$Ress.fontFamily,
          fontFamily2: CssDeclarationHelper$Ress.fontFamily2,
          fontFamily3: CssDeclarationHelper$Ress.fontFamily3,
          fontFamily4: CssDeclarationHelper$Ress.fontFamily4,
          fontFamilyUnion: CssDeclarationHelper$Ress.fontFamilyUnion,
          fontFamilyString: CssDeclarationHelper$Ress.fontFamilyString,
          fontWeight: CssDeclarationHelper$Ress.fontWeight,
          fontWeightUnion: CssDeclarationHelper$Ress.fontWeightUnion,
          fontWeightString: CssDeclarationHelper$Ress.fontWeightString,
          fontWeightNumber: CssDeclarationHelper$Ress.fontWeightNumber,
          margin: CssDeclarationHelper$Ress.margin,
          margin2: CssDeclarationHelper$Ress.margin2,
          margin3: CssDeclarationHelper$Ress.margin3,
          margin4: CssDeclarationHelper$Ress.margin4,
          marginUnion: CssDeclarationHelper$Ress.marginUnion,
          marginString: CssDeclarationHelper$Ress.marginString,
          marginNumber: CssDeclarationHelper$Ress.marginNumber,
          marginTop: CssDeclarationHelper$Ress.marginTop,
          marginTopUnion: CssDeclarationHelper$Ress.marginTopUnion,
          marginTopString: CssDeclarationHelper$Ress.marginTopString,
          marginTopNumber: CssDeclarationHelper$Ress.marginTopNumber,
          marginRight: CssDeclarationHelper$Ress.marginRight,
          marginRightUnion: CssDeclarationHelper$Ress.marginRightUnion,
          marginRightString: CssDeclarationHelper$Ress.marginRightString,
          marginRightNumber: CssDeclarationHelper$Ress.marginRightNumber,
          marginBottom: CssDeclarationHelper$Ress.marginBottom,
          marginBottomUnion: CssDeclarationHelper$Ress.marginBottomUnion,
          marginBottomString: CssDeclarationHelper$Ress.marginBottomString,
          marginBottomNumber: CssDeclarationHelper$Ress.marginBottomNumber,
          marginLeft: CssDeclarationHelper$Ress.marginLeft,
          marginLeftUnion: CssDeclarationHelper$Ress.marginLeftUnion,
          marginLeftString: CssDeclarationHelper$Ress.marginLeftString,
          marginLeftNumber: CssDeclarationHelper$Ress.marginLeftNumber,
          padding: CssDeclarationHelper$Ress.padding,
          padding2: CssDeclarationHelper$Ress.padding2,
          padding3: CssDeclarationHelper$Ress.padding3,
          padding4: CssDeclarationHelper$Ress.padding4,
          paddingUnion: CssDeclarationHelper$Ress.paddingUnion,
          paddingString: CssDeclarationHelper$Ress.paddingString,
          paddingNumber: CssDeclarationHelper$Ress.paddingNumber,
          paddingTop: CssDeclarationHelper$Ress.paddingTop,
          paddingTopUnion: CssDeclarationHelper$Ress.paddingTopUnion,
          paddingTopString: CssDeclarationHelper$Ress.paddingTopString,
          paddingTopNumber: CssDeclarationHelper$Ress.paddingTopNumber,
          paddingRight: CssDeclarationHelper$Ress.paddingRight,
          paddingRightUnion: CssDeclarationHelper$Ress.paddingRightUnion,
          paddingRightString: CssDeclarationHelper$Ress.paddingRightString,
          paddingRightNumber: CssDeclarationHelper$Ress.paddingRightNumber,
          paddingBottom: CssDeclarationHelper$Ress.paddingBottom,
          paddingBottomUnion: CssDeclarationHelper$Ress.paddingBottomUnion,
          paddingBottomString: CssDeclarationHelper$Ress.paddingBottomString,
          paddingBottomNumber: CssDeclarationHelper$Ress.paddingBottomNumber,
          paddingLeft: CssDeclarationHelper$Ress.paddingLeft,
          paddingLeftUnion: CssDeclarationHelper$Ress.paddingLeftUnion,
          paddingLeftString: CssDeclarationHelper$Ress.paddingLeftString,
          paddingLeftNumber: CssDeclarationHelper$Ress.paddingLeftNumber,
          declaration: CssDeclarationFnHelper$Ress.declaration,
          backgroundFn: CssDeclarationFnHelper$Ress.backgroundFn,
          backgroundAttachmentFn: CssDeclarationFnHelper$Ress.backgroundAttachmentFn,
          backgroundColorFn: CssDeclarationFnHelper$Ress.backgroundColorFn,
          backgroundImageFn: CssDeclarationFnHelper$Ress.backgroundImageFn,
          backgroundPositionFn: CssDeclarationFnHelper$Ress.backgroundPositionFn,
          backgroundStyleFn: CssDeclarationFnHelper$Ress.backgroundStyleFn,
          borderFn: CssDeclarationFnHelper$Ress.borderFn,
          borderTopFn: CssDeclarationFnHelper$Ress.borderTopFn,
          borderRightFn: CssDeclarationFnHelper$Ress.borderRightFn,
          borderBottomFn: CssDeclarationFnHelper$Ress.borderBottomFn,
          borderLeftFn: CssDeclarationFnHelper$Ress.borderLeftFn,
          borderTopColorFn: CssDeclarationFnHelper$Ress.borderTopColorFn,
          borderRightColorFn: CssDeclarationFnHelper$Ress.borderRightColorFn,
          borderBottomColorFn: CssDeclarationFnHelper$Ress.borderBottomColorFn,
          borderLeftColorFn: CssDeclarationFnHelper$Ress.borderLeftColorFn,
          borderTopStyleFn: CssDeclarationFnHelper$Ress.borderTopStyleFn,
          borderRightStyleFn: CssDeclarationFnHelper$Ress.borderRightStyleFn,
          borderBottomStyleFn: CssDeclarationFnHelper$Ress.borderBottomStyleFn,
          borderLeftStyleFn: CssDeclarationFnHelper$Ress.borderLeftStyleFn,
          borderTopWidthFn: CssDeclarationFnHelper$Ress.borderTopWidthFn,
          borderRightWidthFn: CssDeclarationFnHelper$Ress.borderRightWidthFn,
          borderBottomWidthFn: CssDeclarationFnHelper$Ress.borderBottomWidthFn,
          borderLeftWidthFn: CssDeclarationFnHelper$Ress.borderLeftWidthFn,
          borderColorFn: CssDeclarationFnHelper$Ress.borderColorFn,
          borderStyleFn: CssDeclarationFnHelper$Ress.borderStyleFn,
          borderWidthFn: CssDeclarationFnHelper$Ress.borderWidthFn,
          clearFn: CssDeclarationFnHelper$Ress.clearFn,
          colorFn: CssDeclarationFnHelper$Ress.colorFn,
          cursorFn: CssDeclarationFnHelper$Ress.cursorFn,
          fontFamilyFn: CssDeclarationFnHelper$Ress.fontFamilyFn,
          fontWeightFn: CssDeclarationFnHelper$Ress.fontWeightFn,
          marginFn: CssDeclarationFnHelper$Ress.marginFn,
          marginTopFn: CssDeclarationFnHelper$Ress.marginTopFn,
          marginRightFn: CssDeclarationFnHelper$Ress.marginRightFn,
          marginBottomFn: CssDeclarationFnHelper$Ress.marginBottomFn,
          marginLeftFn: CssDeclarationFnHelper$Ress.marginLeftFn,
          paddingFn: CssDeclarationFnHelper$Ress.paddingFn,
          paddingTopFn: CssDeclarationFnHelper$Ress.paddingTopFn,
          paddingRightFn: CssDeclarationFnHelper$Ress.paddingRightFn,
          paddingBottomFn: CssDeclarationFnHelper$Ress.paddingBottomFn,
          paddingLeftFn: CssDeclarationFnHelper$Ress.paddingLeftFn
        };
}

exports.Make = Make;
/* CssDeclarationHelper-Ress Not a pure module */
