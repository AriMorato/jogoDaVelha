//*******************************JOGO**DA**VELHA*****************************************
//O Objetivo desse jogo é demonstrar meus conhecimentos em JavaScript
//Para o desenvolvimento desta aplicação considerei as seguiintes premissas:
//1 - Não há recurso para personalização dos ícones da partida o jogador 1 será sempre a bola
//2 - Toda partida, será um jogo novo Uma melhoria seria o controle de partidas tipo melhor de 3 ou de 5

//***********************************VARIÁVEIS*******************************************
//Variaveis globais que serão usadas para controlar o jogo
let jogador = true;
let jogadas = new Set(); // matriz de valores únicos para reservar as jogadas
let registraJogada = [] //array de lances por jogador, é através dela que definiremos o vencedor
//*********************************INICIO**DO**JOGO*************************************

const elemento=document.querySelectorAll('td');

elemento.forEach((td)=>{
    let id;
    td.addEventListener("click", (e)=>{
       id =  parseInt(e.target.id);
       if(!jogadas.has(id))jogadas.add(id);
       
       //envio de parâmetros para
       capturaJogada(id, jogador)
       jogador = !jogador
    })
})
    function capturaJogada(lance, player){
    
    //monta a visualização da jogada do jogador e determina o mando da próxima jogada
        switch (player) {
            case true:
                document.getElementById(lance).style.backgroundImage = "url('../img/circulo.png')"
                document.getElementById('gamer02').style.backgroundColor = '#e4b302'
                document.getElementById('gamer01').style.backgroundColor = ''
            break;
        
        case false:
                document.getElementById(lance).style.backgroundImage = "url('../img/asterisco.png')"
                document.getElementById('gamer01').style.backgroundColor = '#e4b302'
                document.getElementById('gamer02').style.backgroundColor = ''
            break;
       }
    
    //literal de combinações de lances que determinam um vencedor considerando as 
    //posições dos lances no tabuleiro : h = horizontal, v = vertical, d = diagonal
        console.log('capturaJgada')
        const lancesVencedores = { 
            h1:[1,2,3],
            h2:[4,5,6],
            h3:[7,8,9],
            v1:[1,4,7],
            v2:[2,5,8], 
            v3:[3,6,9],
            d1:[1,5,9],
            d2:[3,5,7]
        }
        
        Object.entries(lancesVencedores).filter((n)=>{
           let key;
           if( n[1].includes(lance)){
            key = n[0]
            registraJogada.push({'player': jogador, 'posicao': key, 'valor': lance}) 
            }
            verificaVencedor(registraJogada, jogador, key)
        })

    }
    
function verificaVencedor(registraJogada, gamer, key){
    let msgFimDeJogo
    let vencedor = registraJogada.filter((n)=>n.player==gamer).filter((k)=>k.posicao==key)
    if(vencedor.length==3){
          
        vencedor.map((v)=>{
            document.getElementById(v.valor).style.backgroundColor='#f76157'
            gamer == true ? player=1 : player = 2
            msgFimDeJogo ="Parabéns Jogador nº " + player + " você VENCEU"
            modal(msgFimDeJogo);
        })
    }else if(jogadas.size==9){
            msgFimDeJogo = 'FIM de Jogo. Tentem novamente!!!' 
            modal(msgFimDeJogo);
        }
}

//*******************************Fim**de**jogo*******************************************
function modal(msgFimDeJogo){
   
    document.getElementById('winner').innerText = msgFimDeJogo
    document.getElementById('gamer01').style.backgroundColor = ''
    document.getElementById('gamer02').style.backgroundColor = ''
    let modal = document.getElementById('controlGame').style.display = "block";
    
    reiniciaPartida();
}

function reiniciaPartida(){
    let btn = document.getElementById('botao');
    btn.addEventListener('click', (e)=>{
        jogador = true;
        jogadas.clear();
        registraJogada = [];
                
        document.getElementById('winner').innerText =''
        document.getElementById('controlGame').style.display = "none"
        
        let tdItens = document.querySelectorAll('td');
        for(item of tdItens){
            document.getElementById(item.id).style.backgroundColor = '#c3c2c2';
            document.getElementById(item.id).style.backgroundImage=''
        } 
    })
}
//****************************************ARI*********************************************