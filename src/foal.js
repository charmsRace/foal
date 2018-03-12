// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const lexer = require('./lexer.js');

    const compose = (...fns) => fns
        .reduce(
            (acc, fn) => x => fn(acc(x)),
            x => x
        );

    const toConst = c => x => c;
    const toNull = toConst(null);
    const concat = x => x.join('');
    const getByIndex = i => x => x[i];
    // const id = getByIndex(0); // nearley build-in
    const getValue = x => x.value;
    const lowerCase = x => x.toLowerCase();

    const makeArray = d => [d];

    const makeObjTransform = fnDefs => x => {
        const fnMap = new Map(fnDefs);
        let newObj = {};
        for ([key, fn] of fnMap) {
            newObj[key] = fn(x);
        }
        return newObj;
    };

    const parseDie = makeObjTransform([
        ['type', toConst('die')],
        ['dee', compose(
            getByIndex(1),
            getValue,
            lowerCase
            )
        ],
        ['arg', getByIndex(2)],
    ]);

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "foal", "symbols": ["die", "_"], "postprocess": id},
    {"name": "die", "symbols": ["_", (lexer.has("dee") ? {type: "dee"} : dee), "number"], "postprocess": parseDie},
    {"name": "die", "symbols": ["number"], "postprocess": getByIndex(0)},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$1"], "postprocess":  compose(
            getByIndex(0),
            concat
        ) },
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
