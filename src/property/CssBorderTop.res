type tag;
type t = CssType.propertyValue<tag>;

let property = "borderTop";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorder.MakeValue({
  type t = t;
});

module DeclarationHelper = {
  let borderTop = (~width=?, ~color=?, style) => 
    declaration(property, value(~width=?width, ~color=?color, style));
  let borderTopUnion = v =>
    declaration(property, v);
  let borderTopString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderTopFn = v => declarationFn(property, v);
};