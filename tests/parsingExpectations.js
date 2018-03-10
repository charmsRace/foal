(function() {
    'use strict';

    const expectations = [
        [
            '',
            '',
        ],
        [
            '2',
            '2',
        ],
        [
            ' 3 ',
            '3',
        ],
        [
            '5 7',
            '57',
        ],
        [
            '    11  13      17         ',
            '111317',
        ],
    ];

    module.exports = expectations;
})();
