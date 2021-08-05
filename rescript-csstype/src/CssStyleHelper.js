// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var CssFontFace$Ress = require("./CssFontFace.js");
var CssDeclarationHelper$Ress = require("./CssDeclarationHelper.js");

function Make(Type) {
  var selector = function (selector$1, declarations) {
    return {
            NAME: "Selector",
            VAL: [
              selector$1,
              Curry._1(Type.style, declarations)
            ]
          };
  };
  var hover = function (declarations) {
    return {
            NAME: "Hover",
            VAL: Curry._1(Type.style, declarations)
          };
  };
  var fontFace = function (descriptors) {
    return {
            NAME: "FontFace",
            VAL: CssFontFace$Ress.make(descriptors)
          };
  };
  return {
          property: CssDeclarationHelper$Ress.property,
          propertyNumber: CssDeclarationHelper$Ress.propertyNumber,
          propertyInteger: CssDeclarationHelper$Ress.propertyInteger,
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
          selector: selector,
          hover: hover,
          fontFace: fontFace
        };
}

exports.Make = Make;
/* No side effect */
