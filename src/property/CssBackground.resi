type tag;
type t = CssType.propertyValue<tag>;

external string: string => t = "%identity";
let value: CssType.Property.background<t>;
let value2: CssType.Property.background2<t>;
let value3: CssType.Property.background3<t>;
let value4: CssType.Property.background4<t>;

module DeclarationHelper: {
  let background: CssType.Property.background<CssType.Syntax.d<'a>>;
  let background2: CssType.Property.background2<CssType.Syntax.d<'a>>;
  let background3: CssType.Property.background3<CssType.Syntax.d<'a>>;
  let background4: CssType.Property.background4<CssType.Syntax.d<'a>>;
  let backgroundUnion: t => CssType.Syntax.d<'a>;
  let backgroundString: string => CssType.Syntax.d<'a>;
};

module DeclarationFnHelper: {
  let backgroundFn: ('data => option<t>) => CssType.Syntax.dfn<'a, 'data>;
};