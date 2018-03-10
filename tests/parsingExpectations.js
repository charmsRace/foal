(function() {
    'use strict';

    const expectations = [
        {
            title: 'test 1',
            in: '',
            out: '',
        },
        {
            title: 'test 2',
            in: '2',
            out: '2',
        },
        {
            title: 'test 3',
            in: '3 5',
            out: '35',
        },
        {
            title: 'test 4',
            in: '   7  11   13 ',
            out: '71113',
        },
    ];

    module.exports = expectations;
})();
