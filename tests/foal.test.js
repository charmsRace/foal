(function() {
    'use strict';

    const ava = require('ava');

    const foal = require('../entry.js');
    const expectations = require('./parsingExpectations.js');

    const shouldParseAs = async (t, input, expected) => {
        const parsings = await foal(input);

        t.is(parsings.length, 1);
        t.is(parsings[0], expected);
    };

    shouldParseAs.title = (provided, input, expected) => {
        return provided
            ? `${provided}: '${input}' -> ${expected}`
            : `foal should parse '${input}' as ${expected}`;
    };

    for (const ex of expectations.goodSyntax) {
        ava.test(ex.title, shouldParseAs, ex.in, ex.out);
    }

    const shouldNotParse = async (t, input) => {
        await t.throws(() => Promise.resolve(foal.parse(input)));
    };

    shouldNotParse.title = (provided, input) => {
        return provided
            ? `${provided}: '${input}' -> X`
            : `foal should not parse '${input}`;
    };

    for (const ex of expectations.badSyntax) {
        ava.test(shouldNotParse, ex);
    }

})();
