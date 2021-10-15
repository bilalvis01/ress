let make = v => {
  switch v {
  | #PseudoClass(selector, declarationBlock) => (selector, declarationBlock)
  };
};

let map = (declaration, callback) => callback(declaration);

external toStyleDeclaration: CssType.styleRule<'data> => CssType.styleDeclaration<'data> = "%identity";

module MakeHelper = (
  D: {
    type syntax<'data>;
    let declarationBlock: array<syntax<'data>> => CssType.declarationBlock<'data>; 
  }
) => {
  type declarations<'data> = array<D.syntax<'data>>;
  let pseudoClass = (selector, declarations) => 
    #PseudoClass(selector, D.declarationBlock(declarations));
  let hover = declarations => pseudoClass(":hover", declarations);
}