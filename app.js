window.onload = function () {
	var funkyFunctions = {
		salsa: function () {
			var danceMoves = [3, 2, 1, 5, 6];
			var numSteps = 0;
			for (var i = 0; i < danceMoves.length; i++) {

				numSteps = numSteps + danceMoves[i];

			}
			return numSteps;
		},

		chickenDance: function () {
			var numclucks = 0;
			for (var i = 0; i < 5; i++) {
				numclucks = numclucks + 5;
			}
			var chicken = {
				funky1: function () {
					numclucks = numclucks + 10;
					return numclucks;
				},
				funky2: function () {

					return chicken.funky1();

				}
			}
			return chicken.funky2();

		},


		shuffle: function () {
			var type = ["melbourne", "electronic", "hardstyle"]
			var myShuffle = {
				type: "melbourne",
				isPopular: true,
				numClaps: 300
			}
			if (myShuffle.isPopular === true) {
				return myShuffle.numClaps;

			} else {
				return "bob";
			}


		}
	}


	var retrieve = funkyFunctions.salsa();
	console.log(retrieve);
	var retrieve2 = funkyFunctions.chickenDance();
	console.log(retrieve2);
	var retrieve3 = funkyFunctions.shuffle();
	console.log(retrieve3);
	console.log(retrieve + retrieve2 + retrieve3)
}



