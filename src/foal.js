// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    let lexer = require('./lexer.js');
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "foal", "symbols": ["set"]},
    {"name": "set$ebnf$1", "symbols": []},
    {"name": "set$ebnf$1", "symbols": ["set$ebnf$1", "prim"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "set", "symbols": ["set$ebnf$1"]},
    {"name": "prim", "symbols": ["n"]},
    {"name": "prim", "symbols": ["die", "n"]},
    {"name": "die", "symbols": [(lexer.has("die") ? {type: "die"} : die)], "postprocess":  d => ({
            type: d[0].type,
            value: d[0].value
        }) },
    {"name": "n", "symbols": [(lexer.has("n") ? {type: "n"} : n)], "postprocess": d => parseFloat(d[0].value)}
]
  , ParserStart: "foal"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
