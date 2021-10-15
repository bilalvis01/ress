let make = declaration => {
  switch declaration {
  | #DeclarationFn(name, value) => (name, value)
  };
};

let map = (declaration, callback) => callback(declaration);

external toStyleDeclaration: CssType.declarationFn<'data> => CssType.styleDeclaration<'data> = "%identity";

module Helper = {
  let declarationFn = (property, value) => #DeclarationFn(property, CssType.BoxPropertyValueFn(value));
};