(function() {
    'use strict';

    const moo = require('moo');

    const rules = {
        // Dear foal,
        hi: />f:/, // needs ^?
        // Whitespace, including newlines
        space: {
            match: /\s+/,
            lineBreaks: true,
        },
        // A non-negative integer
        n: /(?:0|[1-9]\d*)/,
        // the "roll a die" operator -
        // mathematically speaking, a function from
        // { non-negative integers } -> [n]
        die: /[dxi]/i,
        // Unary operators,
        // from P(N) -> N
        op: /[=#+^vz]/i,
        '=': '=', // identity
        '+': '+', // sum
        '^': '^', // max
        'v': 'v', // min
        '#': '#', // cardinality operator -
                  // counts elements,
                  // i.e. sum of zeroth powers
        'Z': 'Z', // zero operator
                  // constant function returning 0
                  // (the additive identity)
        // a comment, always after the expression,
        // separated by : 
        comment: /:[^]*?$/,
        // Syntax error
        error: moo.error,
    };

    let lexer = moo.compile(rules);

    module.exports = lexer;
})();
