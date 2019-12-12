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
      for(let value = this.from; value <= this.to; value)
    }
  }
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
    for (leti = 48; i <= 57; i++) yield i;

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