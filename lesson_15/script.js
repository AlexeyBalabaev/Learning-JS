"use strict";

// Object
// Two variantes ctreating Object:
{
  let user1 = new Object();
  let user2 = {};
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30
  };

  alert( user.name );   // Jhon
  alert( user.age );    // 30

  user.isAdmin = true;

  delete user.age;
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30,
    "likes birds": true
  };
}

/* ----- */
{
  let user = {};

  user["likes birds"] = true;
  alert( user["likes birds"] );    // true
  delete user["likes birds"];
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30,
  };

  let key = "likes birds";

  user[key] = true;      // the same, that user["likes birds"] = true;
}