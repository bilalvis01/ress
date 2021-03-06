type tag;
type t = CssType.propertyValue<tag>;

let property = "borderBottom";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorder.MakeValue({
  type t = t;
});

module DeclarationHelper = {
  let borderBottom = (~width=?, ~color=?, style) => 
    declaration(property, value(~width=?width, ~color=?color, style));
  let borderBottomUnion = v =>
    declaration(property, v);
  let borderBottomString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderBottomFn = v => declarationFn(property, v);
};