type t;

let property = "borderTop";

module D = CssDeclarationConstructor;
module DF = CssDeclarationFnConstructor;

include CssBorder.MakeValue({
  type t = t;
});

module DeclarationHelper = {
  let borderTop = (~width=?, ~color=?, style) => 
    #Declaration(property, D.BoxValue(value(~width=?width, ~color=?color, style)));
  let borderTopUnion = v =>
    #Declaration(property, D.BoxValue(v));
  let borderTopString = v => 
    #Declaration(property, D.BoxValue(string(v)));
};

module DeclarationFnHelper = {
  include DeclarationHelper;
  let borderTopFn = v => #DeclarationFn(property, DF.BoxValue(v));
};