# foal
# o.s

@{%
    let lexer = require('./lexer.js');
%}

foal -> set

set ->
      null {% function(d) {
      return {
          operator: "=",
          argument: []
      };
    } %}
    | prim {% function(d) {
        return {
            operator: "=",
            argument: [d[0]]
        };
    } %}
    | set prim {% function(d) {
        return {
            operator: "=",
            argument: d[0].argument.concat(d[1])
        };
    }%}
    | op set {% function(d) {
        return {
            operator: d[0],
            argument: d[1]
        };
    } %}

prim ->
      "x"
    | "a"

op ->
      "="
    | "+"
    | "#"
    | "^"
    | "v"
