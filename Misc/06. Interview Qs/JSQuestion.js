
/**
 *  Q → does JS supports fn overloding..?
*/

function foo(arg1) {
    console.log(arg1);
}
 
/* The above function will be overwritten by the function below */
function foo(arg1, arg2) {
    console.log(arg1, arg2);
}
 
// Driver code
foo("Geeks")

/**
 *  ANS:
 *      JavaScript does not support overloading. 
 *      JavaScript only  supports function overriding, 
 *      so if you declare two functions with the same name, the last one defined will override the previously defined version. 
 *      Whenever a call is made to the function, the last defined one will get executed.
*/