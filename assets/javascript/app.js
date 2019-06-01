$(document).ready(function () {
	var index = 0;
	var countdownTimer = {
		time: 30,
		reset: function () {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function () {
			counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function () {
			clearInterval(counter);
		},
		count: function () {
			countdownTimer.time--;
			console.log(countdownTimer.time);
			//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
	/*
	
	 Which is the only American state to begin with the letter 'p'?
	  Pennsylvania.
	 Name the world's biggest island.
	  Greenland.
	 What is the world's longest river?
	  Amazon.
	 Name the world's largest ocean.
	  Pacific.
	 What is the diameter of Earth? 
	 8,000 miles.
	 Where would you find the world's most ancient forest? 
	 Australia.
	 Which British city have underground rail systems? 
	 Liverpool, Glasgow, Newcastle and London.
	 What is the capital city of Spain?
	  Madrid.
	 Which country is Prague in?
	  Czech Republic.
	 Which English town was a forerunner of the Parks Movement and the first city in Europe to have a street tram system? 
	 Birkenhead.
}
*/
	var correct = 0;
	var wrong = 0;
	var q1 = {
		question: 'Which is the only American state to begin with the letter "p"?',
		possibleAnswers: ['A. Paso',
			'B. Portland',
			'C. Pennsylvania',
			'D. Puerto Rico'],
		flags: [false, false, true, false],
		answer: 'C. Pennsylvania'
	};

	var q2 = {
		question: 'Name the worlds biggest island:',
		possibleAnswers: ['A. Hawaii',
			'B. Greenland',
			'C. Cuba',
			'D. Japan'],
		flags: [false, true, false, false],
		answer: 'B. Greenland'
	};

	var q3 = {
		question: 'What is the worlds longest river?',
		possibleAnswers: ['A. Nylo',
			'B. Amazon',
			'C. Colorado',
			'D. Bravo'],
		flags: [false, true, false, false],
		answer: 'B. Amazon'
	};

	var q4 = {
		question: 'Name the worlds largest ocean:',
		possibleAnswers: ['A. Pacific',
			'B. Atlantic',
			'C. Indian',
			'D. Arctic'],
		flags: [true, false, false, false],
		answer: 'A. Pacific'
	};

	var q5 = {
		question: 'What is the diameter of Earth?',
		possibleAnswers: ['A. 20,000',
			'B. 8,000',
			'C. 5,000',
			'D. 10,000'],
		flags: [false, true, false, false],
		answer: 'B. 8,000'
	};

	var q6 = {
		question: 'Where would you find the worlds most ancient forest?',
		possibleAnswers: ['A. Australia',
			'B. Russia',
			'C. Brazil',
			'D. Colombia'],
		flags: [true, false, false, false],
		answer: 'A. Australia'
	};

	var q7 = {
		question: 'Which British city have underground rail systems?',
		possibleAnswers: ['A. Glaswow',
			'B. Newcastle',
			'C. London',
			'D. Liverpool'],
		flags: [false, false, true, false],
		answer: 'C. London'
	};

	var q8 = {
		question: 'What is the capital city of Spain?',
		possibleAnswers: ['A. Madrid',
			'B. Barcelona',
			'C. Sevilla',
			'D. Valencia'],
		flags: [false, true, false, false],
		answer: 'B. Barcelona'
	};

	var q9 = {
		question: 'Which country is Prague in?',
		possibleAnswers: ['A. France ',
			'B. Italy',
			'C. London',
			'D. Czech Republic'],
		flags: [false, false, false, true],
		answer: 'D. Czech Republic'
	};

	var q10 = {
		question: 'Which English town was a forerunner of the Parks Movement and the first city in Europe to have a street tram system?',
		possibleAnswers: ['A. Amsterdan',
			'B. Birkenhead',
			'C. Paris',
			'D. Barcelona'],
		flags: [false, true, false, false],
		answer: 'B. Birkenhead'
	}

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	function loadQuestion(questionSelection) {
		console.log(questionSelection);
		countdownTimer.reset();
		$(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
		$("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
		$("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
		$("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
		$("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
		//  getAnswer();  
		//  nextQuestion(index);
	}

	//function nextQuestion() {
	//	index = index++;
	//	console.log(index);
	//}

	function setup() {
		index = 0;
		$('.question').append('<button id="startButton">Start</button>');
		$('#startButton').on('click', function () {
			$(this).hide();
			countdownTimer.start();
			loadQuestion(index);
		});
	}

	function getAnswer() {

		//  nextQuestion();
		$('.answerchoice').on('click', function () {
			console.log('alert', index);
			index++;
			console.log('click', index);
			$(".question").text('');
			$("#buttonA").text('');
			$("#buttonB").text('');
			$("#buttonC").text('');
			$("#buttonD").text('');
			loadQuestion();
		})
	}

	function answerCorrect() {
		correct++;
		
		console.log("correct");
	}

	function answerWrong() {
		wrong++;

		console.log("wrong");
	}

	function showScore() {
		$('.question').empty();
		$('.question').append("<h2><p>" + correct + " correct</p></h2>");
		$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
		countdownTimer.stop();
		$('.timer').empty();

	}
	
	//	$('#startButton').click(countdownTimer.start);

	setup();
	$('.answerchoice').on('click', function () {
		console.log($(this));
		if (this.id == 'buttonA') {
			var answerChosen = 'A';
		} else if (this.id == 'buttonB') {
			answerChosen = 'B';
		} else if (this.id == 'buttonC') {
			answerChosen = 'C';
		} else if (this.id == 'buttonD') {
			answerChosen = 'D';
		}
		if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
			answerCorrect();
		} else if (answerChosen == 'A') {
			answerWrong();
		}
		if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
			answerCorrect();
		} else if (answerChosen == 'B') {
			answerWrong();
		}
		if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
			answerCorrect();
		} else if (answerChosen == 'C') {
			answerWrong();
		}
		if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
			answerCorrect();
		} else if (answerChosen == 'D') {
			answerWrong();
		}

		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		index++;
		if (index < questionArray.length) {
			loadQuestion(index);
		} else {
			$(".answerchoice").hide();
			showScore();
		}
	});


	//	$('#start').click(countdownTimer.start);
});