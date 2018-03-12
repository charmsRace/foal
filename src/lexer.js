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
        // a "roll a die" operator -
        // mathematically speaking, a function from
        // { non-negative integers } -> [n]
        dee: /[dxiDXI]/,
        // Unary operators,
        // from P(N) -> N
        op: /[=#+^vVzZ]/,
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
    };

    const lexer = moo.compile(rules);

    module.exports = lexer;
})();
