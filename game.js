let timer;
let cars;
let cx;
let gameBegin;

let summa = prompt("Введите вашу сумму");
let c = prompt("На какую машину (от 0 до 4) вы делаете ставку");
let stavka = prompt("Сколько вы ставите на выигрыш");

function go() {

	if (gameBegin == 1) return;
	gameBegin = 1;
	cars = [];
	for (let i = 0; i < 5; i++) {
		cars[i] = document.getElementById("p" + i);
		cars[i].style.border = "none";
	}
	cx = new Array();
	for (let i = 0; i < 5; i++) {
		cx[i] = 680;
	}
	timer = window.setInterval(timerGo, 50);
}

function timerGo() {
	for (let i = 0; i < 5; i++) {
		//случайный шаг перемещения для автомобиля 
		cx[i] = cx[i] - Math.floor((Math.random() * 7 + 2));
		if (cx[i] <= 0) {
			window.clearInterval(timer);
			gameBegin = 0;
			if (i == c) {
				alert("Вы победили");
				summa += stavka;
			} else {
				alert("Вы проиграли. До финиша доехала машина с номером " + i);
				summa -= stavka;
				alert("Ваша сумма = " + summa);
			}
			cars[i].style.border = "5px ridge yellow";
			return;
		}
		cars[i].style.left = cx[i] + "px";
	}
}