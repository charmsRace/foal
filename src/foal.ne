# foal
# o.s

@ {%
    const nuller = () => null;
    const makeArray = d => [d];
    const concatAll = d => d[0].join('');
    const getByIndex = i => d => d[i];
    // const id = getByIndex(0);
%}

foal -> number


number -> digit:* {% concatAll %}

dee -> [dD]

digit -> _ [0-9] _ {% getByIndex(1) %}

_ -> [ \t\n\v\f]:* {% nuller %}
