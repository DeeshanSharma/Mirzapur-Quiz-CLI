const color = require('chalk');
const read = require("readline-sync");

// Defining some of the colors
const wrong = color.redBright;
const right = color.green;
const warning = color.yellowBright;
const prompt = color.hex('#19BDFF');
const display = color.hex('#FF00FF')
const final = color.hex('#FF69B4');
const finalScore = color.hex('#FF7F50');
const questionColor = color.hex('#9580ff');


var userName = read.question(prompt("Hii.. What's your name: "));

console.log(display(`\nHello and Welcome ${userName}..! I am sure that you have watched Mirzapur.\nSo this is the time to check your memory.\nLet the party begin...`))

var score = 0;
var level = 1;
var temp = 0;

function checkLevel(score, result) {
	if (result == 't') {
		if (score % 2 == 0) {
			level += 1;
			console.log(warning("\n\t\t\tYeah..! You just Leveled up keep it up..!"))
		}
	}
	if (level < 1) {
		level = 1;
	}
}

function question(que, options, corAns) {
	console.log(questionColor(`\n${que}`));
	temp += 1;
	for (var i = 0; i < options.length; i++) {
		console.log(questionColor(`${i + 1}. ${options[i]}`));
	}
	usrAns = read.question(prompt("\nWhat you think: "));
	if (usrAns == corAns) {
		score += 1;
		console.log(right('\nCongratulations..! You are right'));
		checkLevel(score, 't');
	}

	else {
		level -= 1;
		checkLevel(score, 'f')
		console.log(wrong(`\nDamn..! You are wrong..! Correct Answer is ${options[corAns - 1]}.`));
		if (temp == 8 && usrAns == 1){
			console.log(wrong("\nUs vale seen ki baat nhi hori thi yha..\nGandi Soch..!\n\t\tSoch badlo... LOL"));
		}
		console.log(warning("\n\t\t\tShit..!! You droped by one Level but don't worry."))
	}
	console.log(display(`\nYour current Score: ${score}\nYour current Level: ${level}`))
}

question("Who said this?\nTmhare papa bhi gaali diye the tum bhi diye ho\nVo bhi pele gye the\nTum bhi pele jaoge..\n", ["Sharad", "Rati Shankar", "Munna Bhaiya", "Guddu Bhaiya"], 4);

question("Who said this to whom?\nKuch log bahubali peda hote h\nInko hm bnayenge..\n", ["Kaleen Bhaiya to Maqbool", "Bauji to Kaleen Bhaiya", "Kaleen Bhaiya to Bauji", "Kaleen Bhaiya to JP Yadav"], 3);

question("What is the famaous dialogue of Bharose vale Chacha?\n", ["Mamla izzat ka nhi dar ka h", "Mamla dar ka nhi izzat ka h", "Chacha pgl h unse na hopayega"], 2);

question("Who is shown alive in the post credit seen?\n", ["Bade Tyagi", "Chote Tyagi", "Dono zinda h chupan chupai khel rhe h", "Mene ye seen dekha hi nhi h"], 2);

question("What did Sweety and Guddu had on their date?\n", ["Sonepapdi", "Began ka bharta", "Nothing vo dono bhukhe hi rhe the", "Aloo Patiz"], 4);

question("What Guddu ordered at Munna Bhaiya's house?\n", ["Kadhi chawal", "Bundi ka raeta", "Eggs", "Kuch to order kiye the abhi yaad nhi h"], 3);

question("What that Grocery Store person used to call Guddu's Mother?\n", ["Aunty Ji", "Bhabhi Ji", "Panditayn", "Mata Shree"], 3);

question("What Golu was doing in the library?\n", ["Vhi akele vala kaam", "Sleeping", "Eating", "Studying"], 4);

function finalRes(score) {
	if (score >= 6) {
		console.log(final("\n\n\t\t\tHmmm.. Thats great you remeber most of the things."))
	}
	else {
		console.log(final("\n\n\t\t\tI would suggest you to watch it again"))
	}
	console.log(finalScore(`\n\nYou Scored ${score}/8. And managed to reach Level ${level}.\nGood Bye ${userName}..! See You Again`))
}

finalRes(score);