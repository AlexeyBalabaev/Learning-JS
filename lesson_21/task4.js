"use sctrict";

function extractCurrencyValue(str) {
	return +str.slice(1);
}

alert( extractCurrencyValue('$120') == 120 );   // true
alert( extractCurrencyValue('$1500') );         // 1500
alert( extractCurrencyValue('$7') == 7 );       // 7