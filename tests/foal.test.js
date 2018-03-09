(function() {
    'use strict';

    const ava = require('ava');

    ava.test('metatest', async t => {
        const foo = 2;

        t.is(await foo, 2);
    });

})();
