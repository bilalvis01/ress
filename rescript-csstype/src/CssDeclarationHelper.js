// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssClear$Ress = require("./property_value/CssClear.js");
var CssColor$Ress = require("./property_value/CssColor.js");
var CssBorder$Ress = require("./property_value/CssBorder.js");
var CssCursor$Ress = require("./property_value/CssCursor.js");
var CssMargin$Ress = require("./property_value/CssMargin.js");
var CssPadding$Ress = require("./property_value/CssPadding.js");
var CssMarginTop$Ress = require("./property_value/CssMarginTop.js");
var CssBackground$Ress = require("./property_value/CssBackground.js");
var CssFontFamily$Ress = require("./property_value/CssFontFamily.js");
var CssFontWeight$Ress = require("./property_value/CssFontWeight.js");
var CssMarginLeft$Ress = require("./property_value/CssMarginLeft.js");
var CssPaddingTop$Ress = require("./property_value/CssPaddingTop.js");
var CssBorderColor$Ress = require("./property_value/CssBorderColor.js");
var CssBorderStyle$Ress = require("./property_value/CssBorderStyle.js");
var CssBorderWidth$Ress = require("./property_value/CssBorderWidth.js");
var CssMarginRight$Ress = require("./property_value/CssMarginRight.js");
var CssPaddingLeft$Ress = require("./property_value/CssPaddingLeft.js");
var CssMarginBottom$Ress = require("./property_value/CssMarginBottom.js");
var CssPaddingRight$Ress = require("./property_value/CssPaddingRight.js");
var CssPaddingBottom$Ress = require("./property_value/CssPaddingBottom.js");
var CssBorderTopColor$Ress = require("./property_value/CssBorderTopColor.js");
var CssBorderTopStyle$Ress = require("./property_value/CssBorderTopStyle.js");
var CssBorderTopWidth$Ress = require("./property_value/CssBorderTopWidth.js");
var CssBackgroundColor$Ress = require("./property_value/CssBackgroundColor.js");
var CssBackgroundImage$Ress = require("./property_value/CssBackgroundImage.js");
var CssBackgroundStyle$Ress = require("./property_value/CssBackgroundStyle.js");
var CssBorderLeftColor$Ress = require("./property_value/CssBorderLeftColor.js");
var CssBorderLeftStyle$Ress = require("./property_value/CssBorderLeftStyle.js");
var CssBorderLeftWidth$Ress = require("./property_value/CssBorderLeftWidth.js");
var CssBorderRightColor$Ress = require("./property_value/CssBorderRightColor.js");
var CssBorderRightStyle$Ress = require("./property_value/CssBorderRightStyle.js");
var CssBorderRightWidth$Ress = require("./property_value/CssBorderRightWidth.js");
var CssBorderBottomColor$Ress = require("./property_value/CssBorderBottomColor.js");
var CssBorderBottomStyle$Ress = require("./property_value/CssBorderBottomStyle.js");
var CssBorderBottomWidth$Ress = require("./property_value/CssBorderBottomWidth.js");
var CssBackgroundPosition$Ress = require("./property_value/CssBackgroundPosition.js");
var CssBackgroundAttachment$Ress = require("./property_value/CssBackgroundAttachment.js");

function property(name, value) {
  return {
          NAME: "Property",
          VAL: [
            name,
            value
          ]
        };
}

function border(width, color, style) {
  return {
          NAME: "Border",
          VAL: CssBorder$Ress.value(width, color, style)
        };
}

function borderString(v) {
  return {
          NAME: "Border",
          VAL: v
        };
}

function borderTop(width, color, style) {
  return {
          NAME: "BorderTop",
          VAL: CssBorder$Ress.value(width, color, style)
        };
}

function borderTopString(v) {
  return {
          NAME: "BorderTop",
          VAL: v
        };
}

function borderLeft(width, color, style) {
  return {
          NAME: "BorderLeft",
          VAL: CssBorder$Ress.value(width, color, style)
        };
}

function borderLeftString(v) {
  return {
          NAME: "BorderLeft",
          VAL: v
        };
}

function borderRight(width, color, style) {
  return {
          NAME: "BorderRight",
          VAL: CssBorder$Ress.value(width, color, style)
        };
}

function borderRightString(v) {
  return {
          NAME: "BorderRight",
          VAL: v
        };
}

function borderBottom(width, color, style) {
  return {
          NAME: "BorderBottom",
          VAL: CssBorder$Ress.value(width, color, style)
        };
}

function borderBottomString(v) {
  return {
          NAME: "BorderBottom",
          VAL: v
        };
}

function borderColor(v) {
  return {
          NAME: "BorderColor",
          VAL: CssBorderColor$Ress.value(v)
        };
}

function borderColor2(tb, lr) {
  return {
          NAME: "BorderColor",
          VAL: CssBorderColor$Ress.value2(tb, lr)
        };
}

function borderColor3(top, lr, bottom) {
  return {
          NAME: "BorderColor",
          VAL: CssBorderColor$Ress.value3(top, lr, bottom)
        };
}

function borderColor4(top, right, bottom, left) {
  return {
          NAME: "BorderColor",
          VAL: CssBorderColor$Ress.value4(top, right, bottom, left)
        };
}

function borderColorString(v) {
  return {
          NAME: "BorderColor",
          VAL: v
        };
}

function borderTopColor(v) {
  return {
          NAME: "BorderTopColor",
          VAL: CssBorderTopColor$Ress.value(v)
        };
}

function borderTopColorString(v) {
  return {
          NAME: "BorderTopColor",
          VAL: v
        };
}

function borderRightColor(v) {
  return {
          NAME: "BorderRightColor",
          VAL: CssBorderRightColor$Ress.value(v)
        };
}

function borderRightColorString(v) {
  return {
          NAME: "BorderRightColor",
          VAL: v
        };
}

function borderBottomColor(v) {
  return {
          NAME: "BorderBottomColor",
          VAL: CssBorderBottomColor$Ress.value(v)
        };
}

function borderBottomColorString(v) {
  return {
          NAME: "BorderBottomColor",
          VAL: v
        };
}

function borderLeftColor(v) {
  return {
          NAME: "BorderLeftColor",
          VAL: CssBorderLeftColor$Ress.value(v)
        };
}

function borderLeftColorString(v) {
  return {
          NAME: "BorderLeftColor",
          VAL: v
        };
}

function borderStyle(v) {
  return {
          NAME: "BorderStyle",
          VAL: CssBorderStyle$Ress.value(v)
        };
}

function borderStyle2(tb, lr) {
  return {
          NAME: "BorderStyle",
          VAL: CssBorderStyle$Ress.value2(tb, lr)
        };
}

function borderStyle3(top, lr, bottom) {
  return {
          NAME: "BorderStyle",
          VAL: CssBorderStyle$Ress.value3(top, lr, bottom)
        };
}

function borderStyle4(top, right, bottom, left) {
  return {
          NAME: "BorderStyle",
          VAL: CssBorderStyle$Ress.value4(top, right, bottom, left)
        };
}

function borderStyleString(v) {
  return {
          NAME: "BorderStyle",
          VAL: v
        };
}

function borderTopStyle(v) {
  return {
          NAME: "BorderTopStyle",
          VAL: CssBorderTopStyle$Ress.value(v)
        };
}

function borderTopStyleString(v) {
  return {
          NAME: "BorderTopStyle",
          VAL: v
        };
}

function borderRightStyle(v) {
  return {
          NAME: "BorderRightStyle",
          VAL: CssBorderRightStyle$Ress.value(v)
        };
}

function borderRightStyleString(v) {
  return {
          NAME: "BorderRightStyle",
          VAL: v
        };
}

function borderBottomStyle(v) {
  return {
          NAME: "BorderBottomStyle",
          VAL: CssBorderBottomStyle$Ress.value(v)
        };
}

function borderBottomStyleString(v) {
  return {
          NAME: "BorderBottomStyle",
          VAL: v
        };
}

function borderLeftStyle(v) {
  return {
          NAME: "BorderLeftStyle",
          VAL: CssBorderLeftStyle$Ress.value(v)
        };
}

function borderLeftStyleString(v) {
  return {
          NAME: "BorderLeftStyle",
          VAL: v
        };
}

function borderWidth(v) {
  return {
          NAME: "BorderWidth",
          VAL: CssBorderWidth$Ress.value(v)
        };
}

function borderWidth2(tb, lr) {
  return {
          NAME: "BorderWidth",
          VAL: CssBorderWidth$Ress.value2(tb, lr)
        };
}

function borderWidth3(top, lr, bottom) {
  return {
          NAME: "BorderWidth",
          VAL: CssBorderWidth$Ress.value3(top, lr, bottom)
        };
}

function borderWidth4(top, right, bottom, left) {
  return {
          NAME: "BorderWidth",
          VAL: CssBorderWidth$Ress.value4(top, right, bottom, left)
        };
}

function borderWidthString(v) {
  return {
          NAME: "BorderWidth",
          VAL: v
        };
}

function borderTopWidth(v) {
  return {
          NAME: "BorderTopWidth",
          VAL: CssBorderTopWidth$Ress.value(v)
        };
}

function borderTopWidthString(v) {
  return {
          NAME: "BorderTopWidth",
          VAL: v
        };
}

function borderRightWidth(v) {
  return {
          NAME: "BorderRightWidth",
          VAL: CssBorderRightWidth$Ress.value(v)
        };
}

function borderRightWidthString(v) {
  return {
          NAME: "BorderRightWidth",
          VAL: v
        };
}

function borderBottomWidth(v) {
  return {
          NAME: "BorderBottomWidth",
          VAL: CssBorderBottomWidth$Ress.value(v)
        };
}

function borderBottomWidthString(v) {
  return {
          NAME: "BorderBottomWidth",
          VAL: v
        };
}

function borderLeftWidth(v) {
  return {
          NAME: "BorderLeftWidth",
          VAL: CssBorderLeftWidth$Ress.value(v)
        };
}

function borderLeftWidthString(v) {
  return {
          NAME: "BorderLeftWidth",
          VAL: v
        };
}

function background(color, position, size, repeat, attachment, origin, clip, imageOrColor) {
  return {
          NAME: "Background",
          VAL: CssBackground$Ress.value(color, position, size, repeat, attachment, origin, clip, imageOrColor)
        };
}

function background2(l1, l2) {
  return {
          NAME: "Background",
          VAL: CssBackground$Ress.value2(l1, l2)
        };
}

function background3(l1, l2, l3) {
  return {
          NAME: "Background",
          VAL: CssBackground$Ress.value3(l1, l2, l3)
        };
}

function background4(l1, l2, l3, l4) {
  return {
          NAME: "Background",
          VAL: CssBackground$Ress.value4(l1, l2, l3, l4)
        };
}

function backgroundString(v) {
  return {
          NAME: "Background",
          VAL: v
        };
}

function backgroundAttachment(v) {
  return {
          NAME: "BackgroundAttachment",
          VAL: CssBackgroundAttachment$Ress.value(v)
        };
}

function backgroundAttachment2(v1, v2) {
  return {
          NAME: "BackgroundAttachment",
          VAL: CssBackgroundAttachment$Ress.value2(v1, v2)
        };
}

function backgroundAttachment3(v1, v2, v3) {
  return {
          NAME: "BackgroundAttachment",
          VAL: CssBackgroundAttachment$Ress.value3(v1, v2, v3)
        };
}

function backgroundAttachment4(v1, v2, v3, v4) {
  return {
          NAME: "BackgroundAttachment",
          VAL: CssBackgroundAttachment$Ress.value4(v1, v2, v3, v4)
        };
}

function backgroundAttachmentString(v) {
  return {
          NAME: "BackgroundAttachment",
          VAL: v
        };
}

function backgroundColor(v) {
  return {
          NAME: "BackgroundColor",
          VAL: CssBackgroundColor$Ress.value(v)
        };
}

function backgroundColorString(v) {
  return {
          NAME: "BackgroundColor",
          VAL: v
        };
}

function backgroundImage(v) {
  return {
          NAME: "BackgroundImage",
          VAL: CssBackgroundImage$Ress.value(v)
        };
}

function backgroundImage2(v1, v2) {
  return {
          NAME: "BackgroundImage",
          VAL: CssBackgroundImage$Ress.value2(v1, v2)
        };
}

function backgroundImage3(v1, v2, v3) {
  return {
          NAME: "BackgroundImage",
          VAL: CssBackgroundImage$Ress.value3(v1, v2, v3)
        };
}

function backgroundImage4(v1, v2, v3, v4) {
  return {
          NAME: "BackgroundImage",
          VAL: CssBackgroundImage$Ress.value4(v1, v2, v3, v4)
        };
}

function backgroundImageString(v) {
  return {
          NAME: "BackgroundImage",
          VAL: v
        };
}

function backgroundPosition(v) {
  return {
          NAME: "BackgroundPosition",
          VAL: CssBackgroundPosition$Ress.value(v)
        };
}

function backgroundPosition2(v1, v2) {
  return {
          NAME: "BackgroundPosition",
          VAL: CssBackgroundPosition$Ress.value2(v1, v2)
        };
}

function backgroundPosition3(v1, v2, v3) {
  return {
          NAME: "BackgroundPosition",
          VAL: CssBackgroundPosition$Ress.value3(v1, v2, v3)
        };
}

function backgroundPosition4(v1, v2, v3, v4) {
  return {
          NAME: "BackgroundPosition",
          VAL: CssBackgroundPosition$Ress.value4(v1, v2, v3, v4)
        };
}

function backgroundPositionString(v) {
  return {
          NAME: "BackgroundPosition",
          VAL: v
        };
}

function backgroundStyle(v) {
  return {
          NAME: "BackgroundStyle",
          VAL: CssBackgroundStyle$Ress.value(v)
        };
}

function backgroundStyle2(v1, v2) {
  return {
          NAME: "BackgroundStyle",
          VAL: CssBackgroundStyle$Ress.value2(v1, v2)
        };
}

function backgroundStyle3(v1, v2, v3) {
  return {
          NAME: "BackgroundStyle",
          VAL: CssBackgroundStyle$Ress.value3(v1, v2, v3)
        };
}

function backgroundStyle4(v1, v2, v3, v4) {
  return {
          NAME: "BackgroundStyle",
          VAL: CssBackgroundStyle$Ress.value4(v1, v2, v3, v4)
        };
}

function backgroundStyleString(v) {
  return {
          NAME: "BackgroundStyle",
          VAL: v
        };
}

function margin(v) {
  return {
          NAME: "Margin",
          VAL: CssMargin$Ress.value(v)
        };
}

function margin2(tb, lr) {
  return {
          NAME: "Margin",
          VAL: CssMargin$Ress.value2(tb, lr)
        };
}

function margin3(top, lr, bottom) {
  return {
          NAME: "Margin",
          VAL: CssMargin$Ress.value3(top, lr, bottom)
        };
}

function margin4(top, right, bottom, left) {
  return {
          NAME: "Margin",
          VAL: CssMargin$Ress.value4(top, right, bottom, left)
        };
}

function marginString(v) {
  return {
          NAME: "Margin",
          VAL: v
        };
}

function marginNumber(v) {
  return {
          NAME: "Margin",
          VAL: v
        };
}

function marginTop(v) {
  return {
          NAME: "MarginTop",
          VAL: CssMarginTop$Ress.value(v)
        };
}

function marginTopString(v) {
  return {
          NAME: "MarginTop",
          VAL: v
        };
}

function marginTopNumber(v) {
  return {
          NAME: "MarginTop",
          VAL: v
        };
}

function marginRight(v) {
  return {
          NAME: "MarginRight",
          VAL: CssMarginRight$Ress.value(v)
        };
}

function marginRightString(v) {
  return {
          NAME: "MarginRight",
          VAL: v
        };
}

function marginRightNumber(v) {
  return {
          NAME: "MarginRight",
          VAL: v
        };
}

function marginBottom(v) {
  return {
          NAME: "MarginBottom",
          VAL: CssMarginBottom$Ress.value(v)
        };
}

function marginBottomString(v) {
  return {
          NAME: "MarginBottom",
          VAL: v
        };
}

function marginBottomNumber(v) {
  return {
          NAME: "MarginBottom",
          VAL: v
        };
}

function marginLeft(v) {
  return {
          NAME: "MarginLeft",
          VAL: CssMarginLeft$Ress.value(v)
        };
}

function marginLeftString(v) {
  return {
          NAME: "MarginLeft",
          VAL: v
        };
}

function marginLeftNumber(v) {
  return {
          NAME: "MarginLeft",
          VAL: v
        };
}

function padding(v) {
  return {
          NAME: "Padding",
          VAL: CssPadding$Ress.value(v)
        };
}

function padding2(tb, lr) {
  return {
          NAME: "Padding",
          VAL: CssPadding$Ress.value2(tb, lr)
        };
}

function padding3(top, lr, bottom) {
  return {
          NAME: "Padding",
          VAL: CssPadding$Ress.value3(top, lr, bottom)
        };
}

function padding4(top, right, bottom, left) {
  return {
          NAME: "Padding",
          VAL: CssPadding$Ress.value4(top, right, bottom, left)
        };
}

function paddingString(v) {
  return {
          NAME: "Padding",
          VAL: v
        };
}

function paddingNumber(v) {
  return {
          NAME: "Padding",
          VAL: v
        };
}

function paddingTop(v) {
  return {
          NAME: "PaddingTop",
          VAL: CssPaddingTop$Ress.value(v)
        };
}

function paddingTopString(v) {
  return {
          NAME: "PaddingTop",
          VAL: v
        };
}

function paddingTopNumber(v) {
  return {
          NAME: "PaddingTop",
          VAL: v
        };
}

function paddingRight(v) {
  return {
          NAME: "PaddingRight",
          VAL: CssPaddingRight$Ress.value(v)
        };
}

function paddingRightString(v) {
  return {
          NAME: "PaddingRight",
          VAL: v
        };
}

function paddingRightNumber(v) {
  return {
          NAME: "PaddingRight",
          VAL: v
        };
}

function paddingBottom(v) {
  return {
          NAME: "PaddingBottom",
          VAL: CssPaddingBottom$Ress.value(v)
        };
}

function paddingBottomString(v) {
  return {
          NAME: "PaddingBottom",
          VAL: v
        };
}

function paddingBottomNumber(v) {
  return {
          NAME: "PaddingBottom",
          VAL: v
        };
}

function paddingLeft(v) {
  return {
          NAME: "PaddingLeft",
          VAL: CssPaddingLeft$Ress.value(v)
        };
}

function paddingLeftString(v) {
  return {
          NAME: "PaddingLeft",
          VAL: v
        };
}

function paddingLeftNumber(v) {
  return {
          NAME: "PaddingLeft",
          VAL: v
        };
}

function clear(v) {
  return {
          NAME: "Clear",
          VAL: CssClear$Ress.value(v)
        };
}

function color(v) {
  return {
          NAME: "Color",
          VAL: CssColor$Ress.value(v)
        };
}

function colorString(v) {
  return {
          NAME: "Color",
          VAL: v
        };
}

function cursor(v) {
  return {
          NAME: "Cursor",
          VAL: CssCursor$Ress.value(v)
        };
}

function cursor1(i, k) {
  return {
          NAME: "Cursor",
          VAL: CssCursor$Ress.value1(i, k)
        };
}

function cursor2(i1, i2, k) {
  return {
          NAME: "Cursor",
          VAL: CssCursor$Ress.value2(i1, i2, k)
        };
}

function cursor3(i1, i2, i3, k) {
  return {
          NAME: "Cursor",
          VAL: CssCursor$Ress.value3(i1, i2, i3, k)
        };
}

function cursor4(i1, i2, i3, i4, k) {
  return {
          NAME: "Cursor",
          VAL: CssCursor$Ress.value4(i1, i2, i3, i4, k)
        };
}

function cursorString(v) {
  return {
          NAME: "Cursor",
          VAL: v
        };
}

function fontWeight(v) {
  return {
          NAME: "FontWeight",
          VAL: CssFontWeight$Ress.value(v)
        };
}

function fontWeightString(v) {
  return {
          NAME: "FontWeight",
          VAL: v
        };
}

function fontWeightNumber(v) {
  return {
          NAME: "FontWeight",
          VAL: v
        };
}

function fontFamily(v) {
  return {
          NAME: "FontFamily",
          VAL: CssFontFamily$Ress.value(v)
        };
}

function fontFamily2(v1, v2) {
  return {
          NAME: "FontFamily",
          VAL: CssFontFamily$Ress.value2(v1, v2)
        };
}

function fontFamily3(v1, v2, v3) {
  return {
          NAME: "FontFamily",
          VAL: CssFontFamily$Ress.value3(v1, v2, v3)
        };
}

function fontFamily4(v1, v2, v3, v4) {
  return {
          NAME: "FontFamily",
          VAL: CssFontFamily$Ress.value4(v1, v2, v3, v4)
        };
}

function fontFamilyString(v) {
  return {
          NAME: "FontFamily",
          VAL: v
        };
}

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
exports.fontFamily = fontFamily;
exports.fontFamily2 = fontFamily2;
exports.fontFamily3 = fontFamily3;
exports.fontFamily4 = fontFamily4;
exports.fontFamilyString = fontFamilyString;
/* No side effect */
