(function() {
    'use strict';

    const ava = require('ava');

    const foal = require('../entry.js');

    ava.test('parse numbers', async t => {

        const parsings = await foal('   2 33  4');

        t.is(parsings.length, 1);
        t.is(parsings[0], '2334');
    });

})();
