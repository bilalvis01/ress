type tag;
type t = CssType.propertyValue<tag>;

let property = "paddingBottom";

let { declaration } = module(CssDeclaration.Helper);
let { declarationFn } = module(CssDeclarationFn.Helper);

include CssPaddingSide.MakeValue({ type t = t; });

module DeclarationHelper = {
  let paddingBottom = v =>
    declaration(property, value(v));
  let paddingBottomUnion = v =>
    declaration(property, v);
  let paddingBottomString = v =>
    declaration(property, string(v));
  let paddingBottomNumber = v =>
    declaration(property, number(v));
};

module DeclarationFnHelper = {
  let paddingBottomFn = v => declarationFn(property, v);
};