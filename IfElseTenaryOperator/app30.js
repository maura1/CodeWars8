/*In JavaScript, if..else is the most basic condition statement, it consists of three parts:condition, statement1, statement2, like this:

if (condition) statementa
else           statementb
It means that if the condition is true, then execute the statementa, otherwise execute the statementb.If the statementa or statementb more than one line, you need to add { and } at the head and tail of statement in JS, to keep the same indentation on Python and to put a end in Ruby where it indeed ends.*/

const saleHotdogs = (n) => (n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95);
