function sudoku2(grid){
	var rowChecked = checkRow(grid);
	if(rowChecked == true){
		var turnedMatrix = turnMatrix90(grid);
		turnedNChecked = checkRow(turnedMatrix);
		if(turnedNChecked == true){
			checked9 = check9(grid);
			if (checked9 == true){
				return true;
			}
		}
	}
	return false;	
}

function turnMatrix90(grid){
	var colArr = [];
	for (var i = 0; i < grid.length; i++){
		
		var tempArr = [];
		for (var j = grid.length - 1; j >= 0; j--){
			tempArr.push(grid[j][i]);
			
		}
		colArr.push(tempArr);
	}
	return colArr;
}

function checkRow(grid){
	for(var i = 0; i < grid.length; i++){
		rowObj = {};
		for(var j = 0; j < grid.length; j++){
			// console.log(grid[i][j]);
			if (grid[i][j] != '.' && rowObj.hasOwnProperty(grid[i][j])){
				return false;
			}else if (grid[i][j] != "."){
				rowObj[grid[i][j]] = grid[i][j];
			}
		}
	}
	return true;
}



function check9(grid){
	masterCount = 0;
	var jStart = 0;
	var jStop = 3;
	while (masterCount < 3){	
		var start = 0;
		var stop = 3;
		var count = 0;
		while (count < 3){
			var myArr = [];
			for (var i = start; i < stop; i++){
				var tempArr = [];
				for (var j = jStart; j < jStop; j++){
					tempArr.push(grid[i][j]);
				}
				myArr.push(tempArr);
			}
			var myObj = {};
			myArr = myArr.join(",");
			myArr = myArr.split(",");
			for (var k = 0; k < myArr.length; k++){
				if (myArr[k] != '.' && myObj.hasOwnProperty(myArr[k])){
					return false;
				}else{
					myObj[myArr[k]] = k;
				}
			}
			// console.log(myObj);
			start += 3;
			stop += 3;
			count++;
		}
		jStart += 3;
		jStop += 3;
		masterCount++;
	}
	return true;
}










