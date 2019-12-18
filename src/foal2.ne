@{%
  const tree = require('./ast.js');
  const lexer = require('./lexer.js');

  const ignore = _ => null;

  const getIndex = i => d => d[i];

  const toLowerCase = d => d.toLowerCase();
%}

@lexer lexer

FOAL -> _ ADDITIVE _ {% getIndex(1) %}

ADDITIVE -> X
  | ADDITIVE _ %additiveOp _ MULTIPLICATIVE

  | MULTIPLICATIVE {% id %}

MULTIPLICATIVE -> X
  | MULTIPLICATIVE _ %multiplicativeOp _ MODULO
  | MODULO {% id %}

MODULO -> X
  | MODULO _ %moduloOp _ PARENTHETICAL
  | PARENTHETICAL {% id %}

PARENTHETICAL -> X
  | %parenLeft _ ADDITIVE _ %parenRight
  | TERM {% id %}

TERM -> COIN | DIE | NUMBER {% id %}

COIN -> NUMBER:? COIN_OP
COIN_OP -> %coin {% toLowerCase %}

DIE -> NUMBER:? DIE_OP NUMBER
DIE_OP -> %dee {% toLowerCase %}

NUMBER -> %number {%
  // ([{ value }]) => parseInt(value, 10)
  ([{ value }]) => tree.cons('Num', [tree.string(value)])
%}

_ -> %space:* {% ignore %}
__ -> %space:+ {% ignore %}

# TERM -> X
#   | COIN {% id %}
#   | DIE {% id %}
#   | NUMBER {% id %}


# COIN -> NUMBER:? COIN_OP {%
#   ([

# COIN_OP -> %coin {%
#   ([{ value }]) => value.toLowerCase()
# %}

# DIE -> NUMBER:? DIE_OP NUMBER {%
#   ([diceCount, dieType, faceCount]) => ({
#     dieType,
#     diceCount: diceCount === null ? 1 : diceCount
#     faceCount,
#   })
# %}

# DIE_OP -> %dee {%
#   ([{ value }]) => value.toLowerCase()
# %}

# # DIE -> NUMBER:? DEE NUMBER {%
# #   ([a]) => a
# # %}



# _ -> %space:* {% ignore %}

# __ -> %space:+ {% ignore %}

X -> %none
