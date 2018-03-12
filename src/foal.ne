# foal
# o.s

@ {%
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

%}

@lexer lexer

foal -> die _ {% id %}

die ->
      _ %dee number {% parseDie %}
    | number {% getByIndex(0) %}

number -> digit:* {% compose(
    getByIndex(0),
    concat
) %}

digit -> _ [0-9] {% getByIndex(1) %}

_ -> [ \t\n\v\f]:* {% toNull %}
