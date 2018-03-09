# foal
# o.s

@{%
    let lexer = require('./lexer.js');
%}

@lexer lexer

foal -> set

set -> prim:*

prim -> n | die n

die -> %die {% d => ({
    type: d[0].type,
    value: d[0].value
}) %}

n -> %n {% d => parseFloat(d[0].value) %}
