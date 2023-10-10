/*There are 3 methods to declare variables in js. let, const and var.
Before ES6, there were only Global scopes and function scope variable i.e. var. In ES6, they introduced let and const, which provides block scope.

*/

var a = 6;
//a can be accessed here
if(true){
    //a can be accessed here also
}

if(true){
    let b = 6;
    //b can be accessed here
}
//b cannot be accessed here

if(true){
    var c = 8;
    //c can be accessed here
}
//c can be accessed here also


// --------------------------------------------------------
// FUNCTION SCOPES 
/* 
    JS have function scopes. Each function creates a new scope. 
    variable declared using var, let and const inside a function cannot be used outside of that specific function
*/

function Sample(){
    var a = 1
    let b = 2
    const c =3
    //a, b, c can be accessed here
}

//a,b and c cannot be accessed here

//Global variables can be used anywhere

//NOTE:- if you assign a value to the variable which is not been decalred, then that variable automatically becomes global scoped.

function sayHello(){
    name = 'john'
}

//name can be used here also because it is global scoped.