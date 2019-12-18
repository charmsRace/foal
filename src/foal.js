// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const tree = require('./ast.js');
  const lexer = require('./lexer.js');

  const ignore = _ => null;

  const getIndex = i => d => d[i];

  const toLowerCase = d => d.toLowerCase();
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "FOAL", "symbols": ["_", "ADDITIVE", "_"], "postprocess": getIndex(1)},
    {"name": "ADDITIVE", "symbols": ["X"]},
    {"name": "ADDITIVE", "symbols": ["ADDITIVE", "_", (lexer.has("additiveOp") ? {type: "additiveOp"} : additiveOp), "_", "MULTIPLICATIVE"]},
    {"name": "ADDITIVE", "symbols": ["MULTIPLICATIVE"], "postprocess": id},
    {"name": "MULTIPLICATIVE", "symbols": ["X"]},
    {"name": "MULTIPLICATIVE", "symbols": ["MULTIPLICATIVE", "_", (lexer.has("multiplicativeOp") ? {type: "multiplicativeOp"} : multiplicativeOp), "_", "MODULO"]},
    {"name": "MULTIPLICATIVE", "symbols": ["MODULO"], "postprocess": id},
    {"name": "MODULO", "symbols": ["X"]},
    {"name": "MODULO", "symbols": ["MODULO", "_", (lexer.has("moduloOp") ? {type: "moduloOp"} : moduloOp), "_", "PARENTHETICAL"]},
    {"name": "MODULO", "symbols": ["PARENTHETICAL"], "postprocess": id},
    {"name": "PARENTHETICAL", "symbols": ["X"]},
    {"name": "PARENTHETICAL", "symbols": [(lexer.has("parenLeft") ? {type: "parenLeft"} : parenLeft), "_", "ADDITIVE", "_", (lexer.has("parenRight") ? {type: "parenRight"} : parenRight)]},
    {"name": "PARENTHETICAL", "symbols": ["TERM"], "postprocess": id},
    {"name": "TERM", "symbols": ["COIN"]},
    {"name": "TERM", "symbols": ["DIE"]},
    {"name": "TERM", "symbols": ["NUMBER"], "postprocess": id},
    {"name": "COIN$ebnf$1", "symbols": ["NUMBER"], "postprocess": id},
    {"name": "COIN$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "COIN", "symbols": ["COIN$ebnf$1", "COIN_OP"]},
    {"name": "COIN_OP", "symbols": [(lexer.has("coin") ? {type: "coin"} : coin)], "postprocess": toLowerCase},
    {"name": "DIE$ebnf$1", "symbols": ["NUMBER"], "postprocess": id},
    {"name": "DIE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "DIE", "symbols": ["DIE$ebnf$1", "DIE_OP", "NUMBER"]},
    {"name": "DIE_OP", "symbols": [(lexer.has("dee") ? {type: "dee"} : dee)], "postprocess": toLowerCase},
    {"name": "NUMBER", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": 
        // ([{ value }]) => parseInt(value, 10)
        ([{ value }]) => tree.cons('Num', [tree.string(value)])
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("space") ? {type: "space"} : space)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": ignore},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("space") ? {type: "space"} : space)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("space") ? {type: "space"} : space)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": ignore},
    {"name": "X", "symbols": [(lexer.has("none") ? {type: "none"} : none)]}
]
  , ParserStart: "FOAL"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
