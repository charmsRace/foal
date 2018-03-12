// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const lexer = require('./lexer.js');

    const toNull = () => null;
    const makeArray = d => [d];
    const concatAll = d => d[0].join('');
    const getByIndex = i => d => d[i];
    // const id = getByIndex(0);

    const parseDie = d => ({
        type: 'die',
        dee: d[1].value.toLowerCase(),
        arg: d[2],
    });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "foal", "symbols": ["die", "_"], "postprocess": id},
    {"name": "die", "symbols": ["_", (lexer.has("dee") ? {type: "dee"} : dee), "number"], "postprocess": parseDie},
    {"name": "die", "symbols": ["number"], "postprocess": id},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": concatAll},
    {"name": "digit", "symbols": ["_", /[0-9]/], "postprocess": getByIndex(1)},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ \t\n\v\f]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": toNull}
]
  , ParserStart: "foal"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
