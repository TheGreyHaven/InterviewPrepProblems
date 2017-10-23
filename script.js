function isCryptSolution(crypt, solution) {
	var solutionObj = {};
	for (var i = 0; i < solution.length; i++){
		solutionObj[solution[i][0]] = parseInt(solution[i][1]);
	}
	var cryptDecoded = [];
	for (var j = 0; j < crypt.length; j++){
		var decodedTemp = [];
		for (var k = 0; k < crypt[j].length; k++){
			var value = solutionObj[crypt[j][k]]
			if (k === 0 && parseInt(value) === 0 && crypt[j].length > 1){
				return false;
			}
			decodedTemp.push(value);
			var decodedTempStr = decodedTemp.join('');
			var decodedTempArr = decodedTempStr.split();
		}
		cryptDecoded.push(parseInt(decodedTempArr));
		
	}
	
	if (cryptDecoded[0] + cryptDecoded[1] === cryptDecoded[2]){

		return true;
	}
	return false;
}

crypt = ["TEN", "TWO", "ONE"];
solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']];

console.log(isCryptSolution(crypt, solution));






