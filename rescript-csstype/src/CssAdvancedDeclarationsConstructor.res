type t<'declarations> = [
  | CssDeclarationType.t
  | CssSelectorType.t<'declarations>
  | CssPseudoClassType.t<'declarations>
  | CssAtRuleConstructor.t
];