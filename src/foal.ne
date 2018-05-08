# foal
# o.s
@ {%
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
%}

@lexer lexer

foal -> expression {% id %}

expression -> unary {% id %}

unary -> unop _ multiset {% parseUnary %}

multiset -> "{" _ sequence:? _ "}" {% parseMultiset %}

sequence -> term (sep term):* {% parseSequence %}

term -> x
    | die {% id %}

die -> x
    | n:? dee n {% parseDie %}
    | n {% id %}

sep -> x
    | _ %sep _ {% toNull %}
    | __ {% toNull %}

unop -> %unop {% parseUnop %}

dee -> %dee {% parseDee %}

n -> %number {% parseNumber %}

_ -> %space:* {% toNull %}

__ -> %space:+ {% toNull %}

# a syntax trick
x -> %none
