# foal
# o.s

@ {%
    const nuller = () => null;
    const makeArray = d => [d];
    const concatAll = d => d[0].join('');
    const getByIndex = i => d => d[i];
    // const id = getByIndex(0);

    const parseDie = d => ({
        type: 'die',
        dee: d[0],
        arg: d[2],
    });
%}

foal -> die _ {% id %}

die ->
      dee _ number {% parseDie %}
    | number {% id %}

dee -> _ [dxiDXI] {% getByIndex(1) %}

number -> digit:* {% concatAll %}

digit -> _ [0-9] {% getByIndex(1) %}

_ -> [ \t\n\v\f]:* {% nuller %}
