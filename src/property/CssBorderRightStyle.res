type tag;
type t = CssType.propertyValue<tag>;

let property = "borderRightStyle";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorderSideStyle.MakeValue({ type t = t; });

module DeclarationHelper = {
  let borderRightStyle = v => 
    declaration(property, value(v));
  let borderRightStyleUnion = v =>
    declaration(property, v);
  let borderRightStyleString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderRightStyleFn = v => declarationFn(property, v);
};