module Make = (
  Type: {
    type t<'data>;
    type declarationBlock<'data>;
  }
) => {
  type statementConstructor<'declarationBlock> = [
    | CssRule.constructor<'declarationBlock>
    | CssAtRule.constructor
    | CssPseudoClass.constructor<'declarationBlock>
  ];
  
  type statement<'data> = (string, Type.declarationBlock<'data>);

  module Rule = CssRule.Make({ 
    type declarationBlock<'data> = Type.declarationBlock<'data>;
  });

  module AtRule = {
    external toStatement: CssAtRule.t => statement<'data> = "%identity";
    let make = v => CssAtRule.make(v)->toStatement;
  };

  module PseudoClass = CssPseudoClass.Make({
    type declarationBlock<'data> = Type.declarationBlock<'data>;
    let map = v => {
      let (selector, declarationBlock) = v;
      (`@global ${selector}`, declarationBlock);
    };
  });

  module Statement = {
    let make = statement => {
      switch statement {
      | #...CssRule.constructor as s => Rule.make(s)
      | #...CssAtRule.constructor as s => AtRule.make(s)
      | #...CssPseudoClass.constructor as s => PseudoClass.make(s)
      }
    };
  };

  external makeRules: Js.Dict.t<Type.declarationBlock<'data>> => Type.t<'data> = "%identity";

  let make = rules => {
    Belt.Array.map(rules, rule => {
      switch rule {
      | #...statementConstructor as s => Statement.make(s)
      }
    })
    ->Js.Dict.fromArray
    ->makeRules
  };
}