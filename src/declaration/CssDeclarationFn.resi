let make: CssType.Syntax.declarationFn<'data> => CssType.declarationFn<'data>;

let map: (CssType.declarationFn<'data>, CssType.declarationFn<'data> => (string, 'value)) => 
  (string, 'value);

external toStyleDeclaration: CssType.declarationFn<'data> => CssType.styleDeclaration<'data> = "%identity";

module Helper: {
  let declarationFn: (string, CssType.propertyValueFn<'a, 'data>) => CssType.Syntax.dfn<'b, 'data>;
};