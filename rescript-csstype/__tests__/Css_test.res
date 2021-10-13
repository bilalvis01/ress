open Jest;

include CssHelper.Make({ 
  type styleDeclaration<'data> = CssType.Syntax.styleDeclaration<'data>;
  let declarationBlock = CssDeclarationBlock.make; 
});

test("declarationBlock", (.) => {
  expect(CssDeclarationBlock.make([
    declaration("background", string(`url("image.png")`)),
    declaration("color", string("rgb(200, 200, 200)")),
    declaration("margin", number(24.)),
    paddingTop(px(24)),
    paddingBottom(px(24)),
    paddingLeft(px(40)),
    paddingRight(px(40)),
    rule("& .header", [
      color(rgb(200, 200, 200)),
      paddingTop(px(24)),
      paddingBottom(px(24)),
      paddingLeft(px(40)),
      paddingRight(px(40)),
      marginNumber(24.),
    ]),
    rule("& .button", [
      color(hsla(360, pct(100.), pct(50.), 0.5)),
      hover([
        background(#blue)
      ]),
    ]),
    hover([
      color(#blue)
    ]),
  ]))
  ->toEqual(Obj.magic({
    "background": `url("image.png")`,
    "color": "rgb(200, 200, 200)",
    "margin": 24,
    "paddingTop": "24px",
    "paddingBottom": "24px",
    "paddingLeft": "40px",
    "paddingRight": "40px",
    "& .header": {
      "color": "rgb(200, 200, 200)",
      "margin": 24,
      "paddingTop": "24px",
      "paddingBottom": "24px",
      "paddingLeft": "40px",
      "paddingRight": "40px",
    },
    "& .button": {
      "color": "hsla(360, 100%, 50%, 0.5)"
      "&:hover": {
        "background": "blue"
      }
    },
    "&:hover": {
      "color": "blue"
    },
  }));
});

test("statements", (.) => {
  expect(CssStatements.make([
    rule("app", [
      declaration("background", string(`url("image.png")`)),
      declaration("color", string("rgb(200, 200, 200)")),
      declaration("margin", number(24.)),
      paddingTop(px(24)),
      paddingBottom(px(24)),
      paddingLeft(px(40)),
      paddingRight(px(40)),
      rule("& .header", [
        background(url("image.png")),
        color(rgb(200, 200, 200)),
        paddingTop(px(24)),
        paddingBottom(px(24)),
        paddingLeft(px(40)),
        paddingRight(px(40)),
        marginNumber(24.),
      ]),
      rule("& .button", [
        color(hsla(360, pct(100.), pct(50.), 0.5)),
        hover([
          background(#blue)
        ]),
      ]),
      hover([
        color(#blue)
      ]),
    ]),
  ]))
  ->toEqual(Obj.magic({
    "app": {
      "background": `url("image.png")`,
      "color": "rgb(200, 200, 200)",
      "margin": 24,
      "paddingTop": "24px",
      "paddingBottom": "24px",
      "paddingLeft": "40px",
      "paddingRight": "40px",
      "& .header": {
        "background": `url("image.png")`,
        "color": "rgb(200, 200, 200)",
        "margin": 24,
        "paddingTop": "24px",
        "paddingBottom": "24px",
        "paddingLeft": "40px",
        "paddingRight": "40px",
      },
      "& .button": {
        "color": "hsla(360, 100%, 50%, 0.5)"
        "&:hover": {
          "background": "blue"
        }
      },
      "&:hover": {
        "color": "blue"
      },
    },
  }));
});