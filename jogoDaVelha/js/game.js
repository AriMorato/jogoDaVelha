function JogoDaVelha(){
//***********************************VARIÁVEIS*******************************************
//Variaveis globais que serão usadas para controlar o jogo
let jogador = true;
let jogadas = new Set(); // matriz de valores únicos para reservar as jogadas
let registraJogada = [] //array de lances por jogador, é através dela que definiremos o vencedor
//*********************************INICIO**DO**JOGO*************************************

    const lanceJogador = ()=>{
        return new Promise((resolve, reject)=>{
        let id;
        td.addEventListener("click", (e)=>{
           if(!jogadas.has(id))jogadas.add(id);
           resolve(id =  parseInt(e.target.id), jogador);
           })
        })
    }

    const capturaJogada = (lance, player)=>{
        //monta a visualização da jogada do jogador e determina o mando da próxima jogada
        return new Promise((resolve, reject)=>{
           
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
                //verificaVencedor(registraJogada, jogador, key)
                resolve(registraJogada, jogador, key)
            })

        })
            

    }

}
