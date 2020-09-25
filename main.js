
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "corre") {
		correct++;
}
	if (question2 == "He") {
		correct++;
}	
	if (question3 == "Fast") {
		correct++;
	}
	
	var pictures = ["MIKE.png", "VIRIDIANA.png", "YUN.png"];
	var messages = ["Entendiste la lección!", "Te recomiendo poner más atención al ver las lecciones", "Necesitas ver el video nuevamente"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Tienes " + correct + " respuesta(s) correcta(s).";
	document.getElementById("picture").src = pictures[score];
	}
	

