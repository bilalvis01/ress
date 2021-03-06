type tag;
type t = CssType.propertyValue<tag>;

let property = "borderBottomWidth";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorderSideWidth.MakeValue({ type t = t; });

module DeclarationHelper = {
  let borderBottomWidth = v => 
    declaration(property, value(v));
  let borderBottomWidthUnion = v =>
    declaration(property, v);
  let borderBottomWidthString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderBottomWidthFn = v => declarationFn(property, v);
};