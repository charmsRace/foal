# Features

- d, x
- mdn
- c
- +, -, *, /, %,
- sum, count, min, max
- { }
- lowest n, highest n, choose n
- >, >=, <, <=, ==, !=
- ? :
- ~
- @p
- ; maybe?
- A R _

- .. maybe?

- c, _ in T
- d, x
  ({''} u N) x N -> T
- T subset S
- +, -, *, /, %
  S^2 -> S
- sum, count, min, max
  MP(S) -> N
- lowest, highest, choose
  S x MP(S) -> MP(S)
- >, >=, <, <=, ==, !=
  MP(S) x S -> MP(S)
- ? :
  MP(S) x A x B -> A u B
- ~
  A x B -> A u B
- @
  I -> S
- A, R
  MP(S)^2 -> MP(S)

1. d x @
<!-- 1. unary - -->
1. %
1. * /
1. + -
1. > >= < <= == !=
1. lowest, highest, sample
1. sum, count, min, max

2 * 2 % 2
2 * 2 > 2

sum lowest n 2#d6

Everything in Foal is an expression.
Executing a Foal program evaluates and returns the expression.
Every expression in Foal is a multiset of numbers.

Examples

d2
2d2
2d2 + 10
d2 + d3
d2, d3
{d2}
{d2, d3}
{d2 + 10}
{d2 + d3}
3#d2 -> {2, 1, 1}
3#{d2}
3#{d2, d3}
3#d2 + d6
sum 3#{d2}
count 2#{d2}
lowest 2 6#d2

d2 > 6
d2 + d3 > 6

count 2#d6 > 1



Exploding d6:
sum d6 U (_ == 6)

Hero point reroll
x = d20; (x > 10 ~ x + 10) + 8








