
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 11

function AjustaTamanhoJanelaJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura,largura)
}

AjustaTamanhoJanelaJogo()

var cronometro = setInterval(function() {
		tempo -= 1
		if (tempo < 0 ) {
			window.location.href = 'vitoria.html'
		} else
		document.getElementById('cronometro').innerHTML = tempo	
	}, 1000)

function posicaoRandomica() {

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 95
	var posicaoY = Math.floor(Math.random() * altura) - 95
		if (posicaoX < 0) {
			posicaoX = 0
		} else {
			posicaoX = posicaoX
		}

		if (posicaoY < 0) {
			posicaoY = 0
		} else {
			posicaoY = posicaoY
		}

		console.log(posicaoX, posicaoY)

	//criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorioMosquito()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorioMosquito() {
	var classe = Math.floor(Math.random() * 3)
		switch (classe) {
			case 0:
				return 'mosquito1'
			case 1:
				return 'mosquito2' 
			case 2:
				return 'mosquito3'  
		}
}

