"use strict";

{
  let user = {
    name: "Jhon",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };

  alert(user);         // hint: string  --> {name: Jhon}
  alert(+user);        // hint: number  --> 1000
  alert(user + 500);   // hint: default --> 1500
}

/* ----- */
{
  let user = {
    name: "Jhon",
    money: 1000,

    toString() {
      return `{name: "${this.name}"}`;
    },

    valueOf() {
      return this.money;
    }
  };

  alert(user);        // toString --> {name: Jhon}
  alert(+user);       // valueOf --> 1000
  alert(user + 500);  // valueOf --> 1500
}

/* ----- */
{
  let user = {
    name: "Jhon",

    toString() {
      return this.name;
    }
  };

  alert(user);         // toString --> Jhon
  alert(user + 500);   // toString --> Jhon500
}