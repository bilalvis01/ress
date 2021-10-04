open CssType;

type background<'return> = (
  ~color: col=?,
  ~position: position=?,
  ~size: bgSize=?,
  ~repeat: repeatStyle=?,
  ~attachment: attachment=?,
  ~origin: box=?,
  ~clip: box=?,
  [ | global | bgImage | col ]
) => 'return;
type background2<'return> = (
  bgLayer, 
  bgLayer,
) => 'return;
type background3<'return> = (
  bgLayer, 
  bgLayer, 
  bgLayer,
) => 'return;
type background4<'return> = (
  bgLayer, 
  bgLayer, 
  bgLayer, 
  bgLayer
) => 'return;

type backgroundAttachment<'return> = attachment_global => 
  'return;
type backgroundAttachment2<'return> = (
  attachment, 
  attachment,
) => 'return;
type backgroundAttachment3<'return> = (
  attachment, 
  attachment, 
  attachment,
) => 'return;
type backgroundAttachment4<'return> = (
  attachment, 
  attachment, 
  attachment, 
  attachment
) => 'return;

type backgroundColor<'return> = col_global => 'return;

type backgroundImage<'return> = bgImage_global => 
  'return;
type backgroundImage2<'return> = (
  bgImage, 
  bgImage,
) => 'return;
type backgroundImage3<'return> = (
  bgImage, 
  bgImage, 
  bgImage,
) => 'return;
type backgroundImage4<'return> = (
  bgImage, 
  bgImage, 
  bgImage, 
  bgImage,
) => 'return;

type backgroundPosition<'return> = position_global => 'return;
type backgroundPosition2<'return> = (
  position, 
  position,
) => 'return;
type backgroundPosition3<'return> = (
  position, 
  position, 
  position,
) => 'return;
type backgroundPosition4<'return> = (
  position, 
  position, 
  position, 
  position
) => 'return;

type backgroundStyle<'return> = repeatStyle_global => 'return;
type backgroundStyle2<'return> = (
  repeatStyle, 
  repeatStyle) => 'return;
type backgroundStyle3<'return> = (
  repeatStyle, 
  repeatStyle, 
  repeatStyle,
) => 'return;
type backgroundStyle4<'return> = (
  repeatStyle, 
  repeatStyle, 
  repeatStyle, 
  repeatStyle,
) => 'return;

type border<'return> = (
  ~width: lineWidth=?,
  ~color: col=?,
  [ | global | lineStyle ]
) => 'return;

type borderStyle<'return> = lineStyle_global => 'return;
type borderStyle2<'return> = (~tb: lineStyle, ~lr: lineStyle) => 'return;
type borderStyle3<'return> = (
  ~top: lineStyle, 
  ~lr: lineStyle, 
  ~bottom: lineStyle
) => 'return;
type borderStyle4<'return> = (
  ~top: lineStyle, 
  ~right: lineStyle, 
  ~bottom: lineStyle, 
  ~left: lineStyle
) => 'return;

type borderWidth<'return> = lineWidth_global => 'return;
type borderWidth2<'return> = (
  ~tb: lineWidth, ~
  lr: lineWidth,
) => 'return;
type borderWidth3<'return> = (
  ~top: lineWidth, 
  ~lr: lineWidth, 
  ~bottom: lineWidth,
) => 'return;
type borderWidth4<'return> = (
  ~top: lineWidth, 
  ~right: lineWidth, 
  ~bottom: lineWidth, 
  ~left: lineWidth,
) => 'return;

type borderColor<'return> = col_global => 'return;
type borderColor2<'return> = (
  ~tb: col, 
  ~lr: col,
) => 'return;
type borderColor3<'return> = (
  ~top: col, 
  ~lr: col, 
  ~bottom: col,
) => 'return;
type borderColor4<'return> = (
  ~top: col, 
  ~right: col, 
  ~bottom: col, 
  ~left: col,
) => 'return;

type color<'return> = col_global => 'return;

type clear<'return> = clr_global => 'return;

type cursor<'return> = cursorKeyword_global => 'return;
type cursor1<'return> = (
  cursorImage, 
  cursorKeyword,
) => 'return;
type cursor2<'return> = (
  cursorImage, 
  cursorImage, 
  cursorKeyword,
) => 'return;
type cursor3<'return> = (
  cursorImage, 
  cursorImage, 
  cursorImage, 
  cursorKeyword,
) => 'return;
type cursor4<'return> = (
  cursorImage, 
  cursorImage, 
  cursorImage, 
  cursorImage, 
  cursorKeyword,
) => 'return;

type fontFamily<'return> = fontFml_global => 'return;
type fontFamily2<'return> = (
  fontFml, 
  fontFml,
) => 'return;
type fontFamily3<'return> = (
  fontFml, 
  fontFml,
  fontFml,
) => 'return;
type fontFamily4<'return> = (
  fontFml, 
  fontFml,
  fontFml,
  fontFml,
) => 'return;

type fontWeight<'return> = fontWgt_global => 'return;

type margin<'return> = mgn_global => 'return;
type margin2<'return> = (
  ~tb: mgn, 
  ~lr: mgn,
) => 'return;
type margin3<'return> = (
  ~top: mgn, 
  ~lr: mgn, 
  ~bottom: mgn,
) => 'return;
type margin4<'return> = (
  ~top: mgn, 
  ~right: mgn, 
  ~bottom: mgn, 
  ~left: mgn,
) => 'return;

type padding<'return> = pdg_global => 'return;
type padding2<'return> = (~tb: pdg, ~lr: pdg) => 'return;
type padding3<'return> = (~top: pdg, ~lr: pdg, ~bottom: pdg) => 'return;
type padding4<'return> = (
  ~top: pdg, 
  ~right: pdg, 
  ~bottom: pdg, 
  ~left: pdg,
) => 'return;