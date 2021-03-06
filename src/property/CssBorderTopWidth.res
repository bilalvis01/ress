type tag;
type t = CssType.propertyValue<tag>;

let property = "borderTopWidth";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorderSideWidth.MakeValue({ type t = t; });

module DeclarationHelper = {
  let borderTopWidth = v => 
    declaration(property, value(v));
  let borderTopWidthUnion = v =>
    declaration(property, v);
  let borderTopWidthString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderTopWidthFn = v => declarationFn(property, v);
};