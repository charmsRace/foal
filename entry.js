(function() {
    'use strict';

    const nearley = require('nearley');

    const rules = require('./src/foal.js');
    const grammar = nearley.Grammar.fromCompiled(rules);

    const parse = s => {
        const parser = new nearley.Parser(grammar);
        parser.feed(s);
        return parser.results;
    };

    module.exports = parse;

})();
