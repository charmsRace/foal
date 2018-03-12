(function() {
    'use strict';

    const goodSyntax = [
        {
            title: 'foal should parse the empty string',
            in: '',
            out: '',
        },

        // numbers
        {
            in: '2',
            out: '2',
        },
        {
            in: '3 5',
            out: '35',
        },
        {
            in: '   7  11   13 ',
            out: '71113',
        },

        // dice
        {
            in: 'd4',
            out: {
                type: 'die',
                dee: 'd',
                arg: '4',
            },
        },
        {
            in: ' x 8 ',
            out: {
                type: 'die',
                dee: 'x',
                arg: '8',
            },
        },
        {
            in: '   I    15    16 ',
            out: {
                type: 'die',
                dee: 'i',
                arg: '1516',
            },
        },
        {
            in: 'X2342',
            out: {
                type: 'die',
                dee: 'x',
                arg: '2342',
            },
        },
    ];

    const badSyntax = [
        'one',
        'roll a d6',
    ];

    module.exports = {
        goodSyntax,
        badSyntax,
    };
})();
