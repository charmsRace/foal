(function() {
    'use strict';

    const ava = require('ava');

    const foal = require('../entry.js');
    const expectations = require('./parsingExpectations.js');

    const shouldParseTo = (t, input, expected) => {
        const parsings = foal(input);

        t.is(parsings.length, 1);
        t.is(parsings[0], expected);
    };

    shouldParseTo.title = (provided, input, expected) => {
        return `foal should parse '${input}' as ${expected}`;
    };

    ava.test('parse numbers', async t => {

        const parsings = await foal('   2 33  4');

        t.is(parsings.length, 1);
        t.is(parsings[0], '2334');
    });

    ava.test(shouldParseTo, '', '');
    ava.test(shouldParseTo, '1', '1');
    ava.test(shouldParseTo, '2 3', '23');
    ava.test(shouldParseTo, '   5  7 11  ', '5711');

    for (const ex of expectations) {
        ava.test(shouldParseTo, ex[0], ex[1]);
    }

})();
