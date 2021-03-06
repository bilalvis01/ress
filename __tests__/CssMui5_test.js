// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Caml_option = require("rescript/lib/js/caml_option.js");
var CssMui5$Ress = require("../src/mui5/CssMui5.js");
var Box = require("@mui/material/Box").default;
var ReactTestRenderer = require("react-test-renderer");
var GlobalStyles = require("@mui/material/GlobalStyles").default;

test("mui5 Box", (function () {
        var tree = ReactTestRenderer.create(React.createElement(Box, {
                    sx: Curry._1(CssMui5$Ress.sx, [
                          Curry._1(CssMui5$Ress.colorFn, (function (theme) {
                                  return Caml_option.some(theme.palette.primary.main);
                                })),
                          Curry._1(CssMui5$Ress.margin, Curry._1(CssMui5$Ress.px, 24))
                        ])
                  })).toJSON();
        expect(tree).toMatchSnapshot();
        
      }));

test("mui5 GlobalStyles", (function () {
        ReactTestRenderer.create(React.createElement(React.Fragment, undefined, React.createElement(GlobalStyles, {
                        styles: (function (theme) {
                            return Curry._1(CssMui5$Ress.styles, [Curry._2(CssMui5$Ress.rule, "h1", [Curry._1(CssMui5$Ress.colorString, theme.palette.primary.main)])]);
                          })
                      }))).toJSON();
        expect(document.head).toMatchSnapshot();
        
      }));

/*  Not a pure module */
