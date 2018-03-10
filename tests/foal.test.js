(function() {
    'use strict';

    const ava = require('ava');

    const foal = require('../entry.js');
    const expectations = require('./parsingExpectations.js');

    const shouldParseTo = async (t, input, expected) => {
        const parsings = await foal(input);

        t.is(parsings.length, 1);
        t.is(parsings[0], expected);
    };

    shouldParseTo.title = (provided, input, expected) => {
        return provided
            ? `${provided}: '${input}' -> ${expected}`
            : `foal should parse '${input}' as ${expected}`;
    };

    for (const ex of expectations) {
        ava.test(ex.title, shouldParseTo, ex.in, ex.out);
    }

})();
