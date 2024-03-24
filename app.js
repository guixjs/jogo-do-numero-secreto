let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroSecreto()
let tentativas = 1

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p', 'escolha um número de 1 a 100')
}
mensagemInicial()
function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute==numeroSecreto){
        exibirTexto('h1','Parabéns!!!');
        let palavraTentativa = tentativas>1? 'tentativas' : 'tentativa'
        let mensagemTentativa = `você acertou o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
         } else {
            if(chute>numeroSecreto){
                exibirTexto('p', 'o número secreto é menor')
                    }else {
                    exibirTexto('p', 'o número secreto é maior')
         }
         tentativas++
         limparCampo();
    }
}
function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1 )
    let quantidadeDeNumeroEscolhidos = listaDeNumerosSorteados.length;

    if(quantidadeDeNumeroEscolhidos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
       return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}