# foal
# o.s

@ {%
    const nuller = () => null;
%}

foal -> number

number -> digit:*

digit -> _ [0-9] _

_ -> [ \t\n\v\f]:* {% nuller %}
