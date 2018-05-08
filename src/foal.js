// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const lexer = require('./lexer.js');

    const pipe = (...fns) => fns
        .reduce(
            (acc, fn) => x => fn(acc(x)),
            x => x
        );

    const toConst = c => x => c;
    const toNull = toConst(null);
    const ifNull = c => x => x === null ? c : x;
    const concat = x => x.join('');
    const getIndex = i => x => x[i];
    // const id = getIndex(0); // nearley build-in
    const getProperty = p => x => x[p];
    const getValue = getProperty('value');
    const toLowerCase = x => x.toLowerCase();
    const toNumber = x => +x;
    const log = x => {
        console.log('log');
        console.log(x);
        console.log('end');
        return x;
    };

    const makeArray = d => [d];

    const makeObjTransform = fnDefs => x => {
        const fnMap = new Map(fnDefs);
        let newObj = {};
        for ([key, fn] of fnMap) {
            newObj[key] = fn(x);
        }
        return newObj;
    };

    const parseNumber = pipe(...[
        getIndex(0),
        getValue,
        toNumber,
    ]);

    const parseDee = pipe(...[
        getIndex(0),
        getValue,
        toLowerCase,
    ]);

    const parseUnop = pipe(...[
        getIndex(0),
        getValue,
        toLowerCase,
    ]);

    const parseDie = makeObjTransform([
        ['type', toConst('die')],
        ['dee', getIndex(1)],
        ['count', pipe(...[
            getIndex(0),
            ifNull(1),
        ])],
        ['arg', getIndex(2)],
    ]);

    const parseSequence = x => [x[0], ...x[1].map(y => y[1])];

    const parseMultiset = makeObjTransform([
        ['type', toConst('multiset')],
        ['elements', pipe(...[
            getIndex(2),
            ifNull([]),
        ])],
    ]);

    const parseUnary = makeObjTransform([
        ['type', toConst('unary')],
        ['op', getIndex(0)],
        ['argument', pipe(...[
            getIndex(2),
            getProperty('elements'),
        ])],
    ]);
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "foal", "symbols": ["expression"], "postprocess": id},
    {"name": "expression", "symbols": ["unary"], "postprocess": id},
    {"name": "unary", "symbols": ["unop", "_", "multiset"], "postprocess": parseUnary},
    {"name": "multiset$ebnf$1", "symbols": ["sequence"], "postprocess": id},
    {"name": "multiset$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "multiset", "symbols": [{"literal":"{"}, "_", "multiset$ebnf$1", "_", {"literal":"}"}], "postprocess": parseMultiset},
    {"name": "sequence$ebnf$1", "symbols": []},
    {"name": "sequence$ebnf$1$subexpression$1", "symbols": ["sep", "term"]},
    {"name": "sequence$ebnf$1", "symbols": ["sequence$ebnf$1", "sequence$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sequence", "symbols": ["term", "sequence$ebnf$1"], "postprocess": parseSequence},
    {"name": "term", "symbols": ["x"]},
    {"name": "term", "symbols": ["die"], "postprocess": id},
    {"name": "die", "symbols": ["x"]},
    {"name": "die$ebnf$1", "symbols": ["n"], "postprocess": id},
    {"name": "die$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "die", "symbols": ["die$ebnf$1", "dee", "n"], "postprocess": parseDie},
    {"name": "die", "symbols": ["n"], "postprocess": id},
    {"name": "sep", "symbols": ["x"]},
    {"name": "sep", "symbols": ["_", (lexer.has("sep") ? {type: "sep"} : sep), "_"], "postprocess": toNull},
    {"name": "sep", "symbols": ["__"], "postprocess": toNull},
    {"name": "unop", "symbols": [(lexer.has("unop") ? {type: "unop"} : unop)], "postprocess": parseUnop},
    {"name": "dee", "symbols": [(lexer.has("dee") ? {type: "dee"} : dee)], "postprocess": parseDee},
    {"name": "n", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": parseNumber},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("space") ? {type: "space"} : space)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": toNull},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("space") ? {type: "space"} : space)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("space") ? {type: "space"} : space)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": toNull},
    {"name": "x", "symbols": [(lexer.has("none") ? {type: "none"} : none)]}
]
  , ParserStart: "foal"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
