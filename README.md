# ress

`ress` let you writing css property and value in a safe way with the power of rescript

Here's an example of how to write some stylse with `ress`:

```
open Css;

module Button = {
  @react.component
  let make = (~children: React.element) => {
    <Box
      sx=sx([
        background(#red),
        padding4(~top=px(2), ~bottom=px(2), ~left=px(4), ~right=px(4)),
      ])
    >
      {children}
    </Box>
  };
};
```

*Notice: This is highly experimental project thus bugs, chrashes, unstable api should be expected*