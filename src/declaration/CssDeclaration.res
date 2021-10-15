let make = declaration => {
  switch declaration {
  | #Declaration(property, value) => (property, value)
  };
};

let map = (declaration, callback) => callback(declaration);

external toStyleDeclaration: CssType.declaration => CssType.styleDeclaration<'data> = "%identity";

module Helper = {
  let declaration = (property, value) => 
    #Declaration(property, CssType.BoxPropertyValue(value));
};