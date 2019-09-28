"use strict";

{
  let sayHiMixin = {
    sayHi() {
      alert(`Hello, ${this.name}!`);
    },
    sayBye() {
      alert(`Bye, ${this.name}!`);
    }
  };

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  Object.assign(User.prototype, sayHiMixin);

  new User("John").sayHi();   // Hello, John!
}

/* ----- */
{
  let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
  };

  let sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
      super.say(`Hello, ${this.name}!`);
    },
    sayBye() {
      super.say(`Bye, ${this.name}!`);
    }
  };

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  Object.assign(User.prototype, sayHiMixin);

  new User("John").sayHi();   // Hello, John!
}

/* ----- */
{
  let eventMixin = {

    // subscribe to an event, use:
    // menu.on('select', function(item) { ... })
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },

    // unsubscribe, use:
    //menu.off('select', handler)
    off(eventName, handler) {
      let handlers = this._eventHandlers && this._eventHandlers[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.legth; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },

    // generate an event with the specified name and data
    // this.trigger('select', data1, data2);
    trigger(eventName, ...args) {
      if (!this._eventHandlers || !this._eventHandlers[eventName]) {
        return;
      }

      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };

  class Menu {
    choose(value) {
      this.trigger("select", value);
    }
  }

  Object.assign(Menu.prototype, eventMixin);

  let menu = new Menu();

  menu.on("select", value => alert(`Selected value: ${value}`));

  menu.choose("123");   // Selected value: 123
}