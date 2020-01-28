"use strict";

{
  let target = {};
  let proxy = new Proxy(target, {});

  proxy.test = 5;
  alert(target.test);  // 5

  alert(proxy.test);   // 5

  for(let key in proxy) alert(key);   // test
}

/* ----- */
{
  let numbers = [0, 1, 2];

  numbers = new Proxy(numbers, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        return 0;   // default value
      }
    }
  });

  alert( numbers[1] );   // 1
  alert( numbers[123] );   // 0 (there aren't this element)
}

/* ----- */
{
  let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios'
  };

  alert( dictionary['Hello'] );   // Hola
  alert( dictionary['Welcome'] );    // undefined
}

/* ----- */
{
  let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios'
  };

  dictionary = new Proxy(dictionary, {
    get(target, phrase) {
      if (phrase in target) {
        return target[phrase];
      } else {
        return phrase;
      }
    }
  });

  alert( dictionary['Hello'] );   // Hola
  alert( dictionary['Welcome to Proxy'] );    // Welcome to Proxy (havn't translation)
}

/* ----- */
{
  let numbers = [];

  numbers = new Proxy(numbers, {
    set(target, prop, val) {
      if (typeof val == 'number') {
        target[prop] = val;
        return true;
      } else {
        return false;
      }
    }
  });

  numbers.push(1);   // added success
  numbers.push(2);   // added success
  alert("Length: " + numbers.length);   // 2

  // numbers.push("test");    // TypeError

  // alert("Interpretator never come to this string (because we have error previous string)");
}

/* ----- */
{
  let user = {
    name: 'John',
    age: 30,
    _password: "***"
  };

  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });

  for(let key in user) alert(key);    // 'name', then: 'age'

  alert( Object.keys(user) );    // name, age
  alert( Object.values(user) );  // John, 30
}

/* ----- */
{
  let user = { };

  user = new Proxy(user, {
    ownKeys(target) {
      return ['a', 'b', 'c'];
    }
  });

  alert( Object.keys(user) );   // is empty
}

/* ----- */
{
  let user = {};

  user = new Proxy(user, {
    ownKeys(target) {
      return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) {
      return {
        enumerable: true,
        configurable: true
        /* ...other flags */
      };
    }

  });

  alert( Object.keys(user) );   // a,b,c
}

/* ----- */
{
  let user = {
    name: "John",
    _password: "secret"
  };

  alert(user._password);   // secret
}

/* ----- */
{
  let user = {
    name: "John",
    _password: "***"
  };

  user = new Proxy(user, {

    get(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      }
    },

    set(target, prop, val) {
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      } else {
        target[prop] = val;
        return true;
      }
    },

    deleteProperty(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Access denied");
      } else {
        delete target[prop];
        return true;
      }
    },

    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });

  try {
    alert(user._password);   // Error: Access denied
  } catch(e) { alert(e.message); }

  try {
    user._password = "test";   // Error: Access denied
  } catch(e) { alert(e.message); }

  try {
    delete user._password;   // Error: Access denied
  } catch(e) { alert(e.message); }

  for(let key in user) alert(key);   // name
}

/* ----- */
{
  let range = {
    start: 1,
    end: 10
  };

  range = new Proxy(range, {
    has(target, prop) {
      return prop >= target.start && prop <= target.end
    }
  });

  alert(5 in range);   // true
  alert(50 in range);  // false
}

/* ----- */
{
  function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  sayHi = delay(sayHi, 3000);

  sayHi("John");    // Hello, John! (after 3 seconds)
}

{
  function(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  alert(sayHi.length);   // 1

  sayHi = delay(sayHi, 3000);

  alert(sayHi.length);   // 0
}