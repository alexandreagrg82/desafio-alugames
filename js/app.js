let jogosAlugados = []

function alterarStatus(n) {
    let jogoClicado = document.getElementById(`game-${n}`);

    if (jogoClicado.querySelector('a').innerHTML == 'Alugar') {
        jogoClicado.querySelector('div').classList.add('dashboard__item__img--rented');    
        jogoClicado.querySelector('a').classList.add('dashboard__item__button--return');
        jogoClicado.querySelector('a').innerHTML = 'Devolver';
        jogosAlugados.push(jogoClicado.querySelector('.dashboard__item__name').textContent);
        
        
    } else {
        if (confirm('Tem certeza que deseja devolver?')) {
            jogoClicado.querySelector('div').classList.remove('dashboard__item__img--rented');    
            jogoClicado.querySelector('a').classList.remove('dashboard__item__button--return');
            jogoClicado.querySelector('a').innerHTML = 'Alugar';
            let index = jogosAlugados.indexOf(jogoClicado.querySelector('.dashboard__item__name').textContent);
            jogosAlugados.splice(index, 1);
            
        }
    }  
    qtdAluguel();
        
}

function qtdAluguel() {
    let qtd = jogosAlugados.length
    console.log(`Qtd de jogos alugados: ${qtd}`);
    console.log(jogosAlugados);
}
  

// =============================================
// outra solução

let contagemAlugados = 0;

function alterarStatus2(n) {
    let gameClicado = document.getElementById(`game-${n}`);
    
    // recuperando o elemento da página, no caso uma classe que é referenciada por meio de um . (ponto)
    let imagem =  gameClicado.querySelector('.dashboard__item__img');
    let botao =  gameClicado.querySelector('.dashboard__item__button');
    
    
    //let nomeJogo =  gameClicado.querySelector('.dashboard__item__name');
    //teste, exibindo o jogo clicado recuperando com .textContent ou .innerHTML
    //alert(nomeJogo.textContent);
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Tem certeza que deseja devolver?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        jogosAlugados++;


    }

    contarEExibirJogosAlugados();    
}

function contarEExibirJogosAlugados() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
//document.addEventListener('DOMContentLoaded', function() {
//   jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
//   contarEExibirJogosAlugados();
//});
