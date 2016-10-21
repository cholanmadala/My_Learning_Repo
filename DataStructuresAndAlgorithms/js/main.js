function dataPrep(x) {
	var data = x;
	var x = data.split(',');
	var propData = [];
	for (var i = 0; i < x.length; i++) {
		propData.push(parseInt(x[i]));
	}
	return propData;
}

function insertionSort() {
	var x = dataPrep(document.getElementById("dataInput").value);
	for (var i = 1; i < x.length; i++) {
		var curr = x[i];
		var temp = i;
		while (temp > 0 && x[temp - 1] >= curr) {
			var tempVal = x[temp - 1];
			x[temp] = tempVal;
			--temp;
		}
		x[temp] = curr;
	}
	document.getElementById("resultId").innerHTML = x;
}
