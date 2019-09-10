"use sctrict";

let room = {
  number: 23
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{name: "John"}, {name: "Pete"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup) ? undefined : value;
}) );