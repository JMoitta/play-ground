var personagemCorpo;
var jogador1Personagem
var jogador1Direcao;
var dy;
var px;
var jogador1Posicao;
var vel;
var tmp;

function inicia() {
	personagemCorpo = document.getElementById('jogador2');
	jogador1Personagem = document.getElementById('jogador1');
	jogador1Direcao = 0;
	dy = 0;
	jogador1Posicao = 185;
	py = 185;
	vel = 6;
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	tmp = requestAnimationFrame(enterFrame);
}

function keydown(event) {
	var tecla = event.keyCode;
	console.log('keydown: ' + tecla);
	if (tecla == 38) {
		dy = -1;
	} else if (tecla == 40) {
		dy = 1;
	}
	
	if (tecla == 87) {
		jogador1Direcao = -1;
	} else if (tecla == 83) {
		jogador1Direcao = 1;
	}
}

function enterFrame () {
	py += dy * vel;
	if(py < 0) {
		py = 0;
	}
	if(py > 370) {
		py = 370;
	}
	
	jogador1Posicao += jogador1Direcao * vel;
	if(jogador1Posicao < 0) {
		jogador1Posicao = 0;
	}
	if(jogador1Posicao > 370) {
		jogador1Posicao = 370;
	}
//	console.log('px: ' + px);
//	console.log('py: ' + py);
	personagemCorpo.style.top = py + "px";
	jogador1Personagem.style.top = jogador1Posicao + "px";
	requestAnimationFrame(enterFrame)
}

function keyup(event) {
	var tecla = event.keyCode;
//	console.log('keyup: ' + tecla);
	if (tecla == 38) {
		dy = 0;
	} else if (tecla == 40) {
		dy = 0;
	}
	if (tecla == 87) {
		jogador1Direcao = 0;
	} else if (tecla == 83) {
		jogador1Direcao = 0;
	}
}

window.addEventListener('load', inicia);