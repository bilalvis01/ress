type tag;
type t = CssType.propertyValue<tag>;

external string: string => t = "%identity";
let value: CssType.Property.clear<t>;

module DeclarationHelper: {
  let clear: CssType.Property.clear<CssType.Syntax.d<'a>>;
  let clearUnion: t => CssType.Syntax.d<'a>;
  let clearString: string => CssType.Syntax.d<'a>;
};

module DeclarationFnHelper: {
  let clearFn: ('data => option<t>) => CssType.Syntax.dfn<'a, 'data>;
};