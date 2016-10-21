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
	var randomData = dataPrep(document.getElementById("dataInput").value); // Preparing the data
	// insertion sort algorithm
	for (var i = 1; i < randomData.length; i++) {
		var curr = randomData[i];
		var temp = i;
		while (temp > 0 && randomData[temp - 1] >= curr) {
			var tempVal = randomData[temp - 1];
			randomData[temp] = tempVal;
			--temp;
		}
		randomData[temp] = curr;
	}

	 updateResult(randomData); // updating the result section with the sorted array
}

function updateResult(result){
	document.getElementById("resultId").innerHTML = result;
}