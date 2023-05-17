export function capitalizeEveryWord(str) {
	return str.replace(/\b\w/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1);
	});
}
