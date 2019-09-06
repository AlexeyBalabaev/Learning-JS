"use strict";

{
  let arr = ["Alex", "Balabaev"];

  let [firstName, surname] = arr;

  alert(firstName);  // Alex
  alert(surname);    // Balabaev
}

/* ----- */
{
  let [firstName, surname] = "Alex Balabaev".split(' ');

  alert(firstName);  // Alex
  alert(surname);    // Balabaev
}

/* ----- */
{
  let arr = ["Alex", "Balabaev"];

  // let [firstName, surname] = arr   -- the same:
  let firstName = arr[0];
  let surname = arr[1];
}

/* ----- */
{
  let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  alert( title );   // Consul
}

/* ----- */
{
  let [a, b, c] = "abc";   // ["a", "b", "c"]
  let [one, two, three] = new Set([1, 2, 3]);

  let user = {};
  [user.name, user.surname] = "Alex Balabaev".split(' ');

  alert(user.name);    // Alex
}

/* ----- */
{
  let user = {
    name: "John",
    age: 30
  };

  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`);   // name:John, then age:30
  }
}

/* ----- */
{
  let user = new Map();
  user.set("name", "Pete");
  user.set("age", "28");

  for (let [key, value] of user) {
    alert(`${key}:${value}`);   // name:Pete, then age:28
  }
}

/* ----- */
{
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  alert(name1);   // Julius
  alert(name2);   // Caesar

  // rest - is array
  alert(rest[0]);     // Consul
  alert(rest[1]);     // of the Roman Republic
  alert(rest.length); // 2
}

/* ----- */
{
  let [firstName, surname] = [];

  alert(firstName);  // undefined
  alert(surname);    // undefined
}

/* ----- */
{
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];

  alert(name);    // Julius
  alert(surname); // Anonymus
}

/* ----- */
{
  let [ name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

  alert(name);    // Julius
  alert(surname); // result of prompt
}

/* ----- */
{
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let {title, width, height} = options;

  alert(title);   // Menu
  alert(width);   // 100
  alert(height);  // 200
}

/* ----- */
{
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let {width: w, height: h, title} = options;
  // width -> w
  // height -> h
  // title -> title

  alert(title); // Menu
  alert(w);     // 100
  alert(h);     // 200
}

/* ----- */
{
  let options = { title: "Menu", };

  let {width = 100, height = 200, title} = options;

  alert(title);   // Menu
  alert(width);   // 100
  alert(height);  // 200
}

/* ----- */
{
  let options = { title: "Menu" };

  let {width = prompt("width?"), title = prompt("title?")} = options;

  alert(title);   // Menu
  alert(width);   // result of prompt
}

/* ----- */
{
  let options = { title: "Menu" };

  let {width: w = prompt('width?'), title = prompt('title?')} = options;

  alert(title);   // Menu
  alert(w);   // result of prompt
}

/* ----- */
{
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let { title } = options;

  alert(title);   // Menu
}

/* ----- */
{
  let options = {
    title: "Menu",
    height: 200,
    width: 100
  };

  let {title, ...rest} = options;

  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  //200
  alert(rest.width);   //100
}

/* ----- */
{
  let title, width, height;

  ({title, width, height} = {title: "Menu", width: 200, height: 100});

  alert(title);   // Menu
}

/* ----- */
{
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  let {
    size: {
      width,
      height
    },
    items: [item1, item2],
    title = "Menu"
  } = options;

  alert(title);   // Menu
  alert(width);   // 100
  alert(height);  // 200
  alert(item1);   // Cake
  alert(item2);   // Donut
}

/* ----- */
{
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    alert( `${title} ${width} ${height}` );  // My menu 100 200
    alert( items );   // Items1,Items2
  }

  showMenu(options);
}

/* ----- */
{
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  function showMenu({
    title = "Untitled",
    width: w = 100,
    height: h = 200,
    items: [item1, item2]
  }) {
    alert( `${title} ${w} ${h}` );   // My menu 100 200
    alert( item1 );   // Item1
    alert( item2 );   // Item2
  }

  showMenu(options);

  // if we need all default properties:
  // showMenu({});     -- not - showMenu();
}

/* ----- */
{
  // we can do {} default property for all object
  function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
  }

  showMenu();   // Menu 100 200
}