"use sctrict";

let styles = ['Jazz', 'Blues'];
alert(styles);

styles.push("Rock'n'Roll");
alert(styles);

styles[Math.floor((styles.length -1) / 2 )] = 'Classic';
alert(styles);

alert( styles.shift() );
alert(styles);

styles.unshift('Rap', 'Reggy');
alert(styles);