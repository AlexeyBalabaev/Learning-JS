"use strict";

// Eval: completing of the code
{
  let code = 'alert("Hello")';
  eval(code);   // Hello
}

/* ----- */
{
  let value = eval('1+1');
  alert(value);   // 2
}

/* ----- */
{
  let value = eval('let i = 0; ++i');
  alert(value);   // 1
}

/* ----- */
{
  let a = 1;

  function f() {
    let a = 2;

    eval('alert(a)');   // 2
  }

  f();
}

/* ----- */
{
  let x = 5;
  eval("x = 10");
  alert(x);   // 10
}

/* ----- */
{
  eval("let x =5; function f() {}");

  alert(typeof x);   // undefined
}

/* ----- */
{
  let f = new Function('a', 'alert(a)');

  f(5);
}