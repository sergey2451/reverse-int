module.exports = function reverse (n) {
  	let newStr = '';
	let str = String(Math.abs(n));

	for (let i = str.length-1; i >= 0; i--) {
		newStr += str[i]
	}
	return +newStr;
}
