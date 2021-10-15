let make: CssType.Syntax.declaration => CssType.declaration;

let map: (CssType.declaration, CssType.declaration => (string, 'value)) => (string, 'value);

external toStyleDeclaration: CssType.declaration => CssType.styleDeclaration<'data> = "%identity";

module Helper: {
  let declaration: (string, CssType.propertyValue<'a>) => CssType.Syntax.d<'b>;
};