"use strict";

// example
{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
}

/* ----- */
{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  // "function-garator" create the object "generatot"
  let generator = generateSequence();
  alert(generator);   // [object Generator]
}

/* ----- */
{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  let generator = generateSequence();

  let one = generator.next();
  alert(JSON.stringify(one));   // {"value": 1, "done" false}

  let two = generator.next();
  alert(JSON.stringify(two));   // {"value": 2, "done" false}

  let three = generator.next();
  alert(JSON.stringify(three));   // {"value": 3, "done": true}
}

/* ----- */
{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  let generator = generateSequence();

  for(let value of generator) {
    alert(value);   // 1, then 2
  }
}

/* ----- */
{
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }

  let generator = generateSequence();

  for(let value of generator) {
    alert(value);   // 1, then 2, then 3
  }
}

/* ----- */
{
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }

  let sequence = [0, ...generateSequence()];

  alert(sequence);   // 0, 1, 2, 3
}

/* ----- */
{
  let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
}

/* ----- */
{
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }

  function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

  }

  let str = '';

  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }

  alert(str);   // 0..9A..Za..z
}

// the same
{
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }

  function* generateAlphaNum() {

    // yield* generateSequence(48, 57);
    for (let i = 48; i <= 57; i++) yield i;

    // yield* generateSequence(65, 90);
    for (let i = 65; i <= 90; i++) yield i;

    // yield* generateSequence(97, 122);
    for (let i = 97; i <= 122; i++) yield i;

  }

  let str = '';

  for(let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
  }

  alert(str);   // 0..9A..Za..z
}

/* ----- */
{
  function* gen() {
    let result = yield "2 + 2 + ?";

    alert(result);
  }

  let generator = gen();

  let question = generator.next().value;   // <-- yield return value

  generator.next(4);   // passing the result to generator
}

/* ----- */
{
  function* gen() {
    let ask1 = yield "2 + 2 = ?";
    alert(ask1);   // 4

    let ask2 = yield "3 * 3 = ?";
    alert(ask2);   // 9
  }

  let generator = gen();

  alert( generator.next().value );   // "2 + 2 = ?"

  alert( generator.next(4).value );  // "3 * 3 = ?"

  alert( generator.next(9).done );   // true
}

/* ----- */
{
  function* gen() {
    try {
      let result = yield "2 + 2 = ?";

      alert("Programm executtion will not reach this line, because an exception will occur above");
    } catch(err) {
      alert(err);   // will show the error
    }
  }

  let generator = gen();

  let question = generator.next().value;

  generator.throw(new Error("The answer not to find in my database"));
}

// the same
/* ----- */
{
  function* generate() {
    let result = yield "2 + 2 = ?";    // error in this string
  }

  let generator = generate();

  let question = generator.next().value;

  try {
    generator.throw(new Error("The answer not to find in my database"));
  } catch(err) {
    alert(err);    // will show the error
  }
}