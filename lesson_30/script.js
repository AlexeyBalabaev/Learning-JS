"use strict";

// JSON

// It isn't the best a solution:
{
  let user = {
    name: "John",
    age: 30,

    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };

  alert(user);   // {name: "John", age: 30}
}

/* ----- */
{
  let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);

  alert(typeof json);   // string

  alert(json);
  /*
  {
    "name":"John",
    "age":30,
    "isAdmin":false,
    "courses":["html","css","js"],
    "wife":null
  }
  */
}

/* ----- */
{
  alert( JSON.stringify(1) );   // 1

  alert( JSON.stringify('test') );   // "test"

  alert( JSON.stringify(true) );   //true

  alert( JSON.stringify([1, 2, 3]) );   // [1,2,3]
}

/* ----- */
{
  let user = {   // will be skipped
    sayHi() {
      alert("Hello");
    },
    [Symbol("id")]:123,   // will be skipped
    something: undefined   // will be skipped
  };

  alert( JSON.stringify(user) );   // {}
}

/* ----- */
{
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      perticipants: ["john", "ann"]
    }
  };

  alert( JSON.stringify(meetup) );
  /*
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]}
  }
  */
}

/* ----- It'll be error
{
  let = room = { number: 23 };

  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };

  meetup.place = room;
  room.occupiedBy = meetup;

  JSON.stringify(meetup);     // Error
}
*/

/* ----- */
{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  room.occupiedBy = meetup;

  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference", "participants":[{},{}]}
}

/* ----- */
{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room   // meetup links to room
  };

  room.occupiedBy = meetup;   // room links to meetup

  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name";"Alice"}],
    "place":{"number":23}
  }
  */
}

/* ----- */
{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room    // meetup links to room
  };

  room.occupiedBy = meetup;   // room links to meetup

  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined: value;
  }) );

  /*
  : [object Object]
  title: Conference
  participants: [object Object],[object Object]
  0: [object Object]
  name: John
  1: [object Object]
  name: Alice
  place: [object Object]
  number: 23
  occupiedBy: [object Object]

  {"title":"Conference","participants":[{"name":"John"},{"name";"Alice"}],"place":{"number":23}}
  */
}

/* ----- */
{
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      ifEditor: true
    }
  };

  alert( JSON.stringify(user, null, 4) );
  /* indent 4 spaces
  {
      "name":"John",
      "age": 25,
      "roles":{
          "isAdmin":false,
          "isEditor":true
      }
  }
  */
}

/* ----- */
{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };

  alert( JSON.stringify(meetup) );
  /*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",   // this became a string
    "room": {"number":23}
  }
  */
}

/* ----- */
{
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };

  let meetup = {
    title: "Conference",
    room
  };

  alert( JSON.stringify(room) );   // 23
  alert( JSON.stringify(meetup) );
  /*
  {
    "title":"Conference",
    "room":23
  }
  */
}

/* ----- */
{
  let numbers = "[0, 1, 2, 3]";

  numbers = JSON.parse(numbers);

  alert( numbers[1] );   // 1
}

/* ----- */
{
  let user = '{ "name": "Jhon", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

  user = JSON.parse(user);

  alert( user.friends[1] );   // 1
}

/* ----- It'll be error
{
  let str = '{"title":"Conference","date":"2017-11-30T00:00:00.000Z"}';

  let meetup = JSON.parse(str);
  alert( meetup.date.getDate() );    // Error, becuase date - string
}
*/

/* ----- */
{
  let str = '{"title":"Conference","date":"2017-11-30T00:00:00.000Z"}';

  let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( meetup.date.getDate() );   // 30
}

/* ----- */
{
  let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( schedule.meetups[1].date.getDate() );   // 18
}