"use sctrict";

function sumInput() {
	let arr = [];

	do {
		let value = prompt("Enter a number", 0);

		if (value === '' || value === null || !isFinite(value)) break;

		arr.push(+value);
	} while (true)

	let result = 0;
	for (let elem of arr) {
		result += elem;
	}

	return result;
}

alert( sumInput() );