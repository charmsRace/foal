# foal
# o.s

@ {%
    const nuller = () => null;
    const makeArray = d => [d];
    const concatAll = d => d[0].join('');
    const getByIndex = i => d => d[i];
    // const id = getByIndex(0);
%}

foal -> number _ {% id %}

dee -> _ [dxiDXI] {% id %}

number -> digit:* {% concatAll %}

digit -> _ [0-9] {% getByIndex(1) %}

_ -> [ \t\n\v\f]:* {% nuller %}
