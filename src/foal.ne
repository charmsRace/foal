# foal
# o.s

@ {%
    const lexer = require('./lexer.js');

    const toNull = () => null;
    const makeArray = d => [d];
    const concatAll = d => d[0].join('');
    const getByIndex = i => d => d[i];
    // const id = getByIndex(0);

    const parseDie = d => {
        console.log('d[1]');
        console.log(d[1]);
        return {
        type: 'die',
        dee: d[1].value.toLowerCase(),
        arg: d[2],
    }};
%}

@lexer lexer

foal -> die _ {% id %}

die ->
      _ %dee number {% parseDie %}
    | number {% id %}

dxee -> [dxiDXI] {% getByIndex(1) %}

number -> digit:* {% concatAll %}

digit -> _ [0-9] {% getByIndex(1) %}

_ -> [ \t\n\v\f]:* {% toNull %}
