type tag;
type t = CssType.propertyValue<tag>;

let property = "borderBottomStyle";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssBorderSideStyle.MakeValue({ type t = t; });

module DeclarationHelper = {
  let borderBottomStyle = v => 
    declaration(property, value(v));
  let borderBottomStyleUnion = v =>
    declaration(property, v);
  let borderBottomStyleString = v => 
    declaration(property, string(v));
};

module DeclarationFnHelper = {
  let borderBottomStyleFn = v => declarationFn(property, v);
};