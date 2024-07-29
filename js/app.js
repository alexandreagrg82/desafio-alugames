let jogosAlugados = [];
let qtd = 0;



function alterarStatus(n) {
    let jogoClicado = document.getElementById(`game-${n}`);
    let nome = jogoClicado.querySelector('.dashboard__item__name').textContent;
    
    if (jogoClicado.querySelector('a').innerHTML == 'Alugar') {
        jogoClicado.querySelector('div').classList.add('dashboard__item__img--rented');    
        jogoClicado.querySelector('a').classList.add('dashboard__item__button--return');
        jogoClicado.querySelector('a').innerHTML = 'Devolver';
        jogosAlugados.push(nome);
        
           
    } else {
        //obs verificação, pois na atividade um dos jogos já vem alugado de acordo com a classe passada no html
        if (jogosAlugados.indexOf(nome) == -1 ) {
            jogosAlugados.push(nome);
            qtd = 1;                    
        } else {
            if (confirm('Tem certeza que deseja devolver?')) {
                jogoClicado.querySelector('div').classList.remove('dashboard__item__img--rented');    
                jogoClicado.querySelector('a').classList.remove('dashboard__item__button--return');
                jogoClicado.querySelector('a').innerHTML = 'Alugar';
                let index = jogosAlugados.indexOf(nome);
                jogosAlugados.splice(index, 1);
                
            } 
        }
        
             
    }
    qtdAluguel();
    
    
        
}

function qtdAluguel() {
    qtd = jogosAlugados.length
    console.log(`Qtd de jogos alugados: ${qtd}`);
    console.log(jogosAlugados);
}
  

// =============================================
// outra solução

let alugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${alugados}`);
}



function alterarStatus2(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alugados++;
    }
    contarEExibirJogosAlugados(); 
}

     
// Inicializa a contagem considerando que os jogos já começam alugados
//document.addEventListener('DOMContentLoaded', function() {
//    alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
//    contarEExibirJogosAlugados();
//});