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
    type value<'data> = Type.declarationBlock<'data>;
    type declarationBlock<'data> = Type.declarationBlock<'data>;
    let map = v => v;
  });

  module AtRule = CssAtRule.Make({
    type value<'data> = Type.declarationBlock<'data>;
    external map: ((string, CssAtRule.boxRule)) => statement<'data> = "%identity";
  });

  module PseudoClass = CssPseudoClass.Make({
    type value<'data> = Type.declarationBlock<'data>;
    type declarationBlock<'data> = Type.declarationBlock<'data>;
    let map = v => v;
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