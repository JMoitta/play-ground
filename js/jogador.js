var personagemCorpo;
var dx;
var dy;
var px;
var py;
var vel;
var tmp;

function inicia() {
	personagemCorpo = document.getElementById('personagem');
	dx = 0;
	dy = 0;
	px = 0;
	py = 0;
	vel = 4;
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	tmp = requestAnimationFrame(enterFrame);
}

function keydown(event) {
	var tecla = event.keyCode;
//	console.log('keydown: ' + tecla);
	if(tecla == 37) {
		dx = -1;
	} else if (tecla == 38) {
		dy = -1;
	} else if (tecla == 39) {
		dx = 1;
	} else if (tecla == 40) {
		dy = 1;
	}
}

function enterFrame () {
	px += dx * vel;
	py += dy * vel
//	console.log('px: ' + px);
//	console.log('py: ' + py);
	personagemCorpo.style.left = px + "px";
	personagemCorpo.style.top = py + "px";
	requestAnimationFrame(enterFrame)
}

function keyup(event) {
	var tecla = event.keyCode;
//	console.log('keyup: ' + tecla);
	if(tecla == 37) {
		dx = 0;
	} else if (tecla == 38) {
		dy = 0;
	} else if (tecla == 39) {
		dx = 0;
	} else if (tecla == 40) {
		dy = 0;
	}
}

window.addEventListener('load', inicia);