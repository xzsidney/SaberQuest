

// controll div   visible - hidden  Adventur
function ifoQuest(adventureInfo) {
  const overlay = document.getElementById(adventureInfo);
  overlay.classList.toggle('visible');
}

// Função para mostrar o NPC Container (mantendo sua função original)
function visibleNPCContainer(value) {
  const container = document.querySelector(value);
  if (container) {
    container.style.visibility = 'visible';
    container.style.opacity = '1';
    container.style.transition = 'opacity 0.5s ease';
  }
}



async function jogarDado() {
    var valorDado = await rollDice();
    console.log("O valor do dado foi:", valorDado);
}

function rollDice() {
    return new Promise((resolve) => {
        const dice = document.getElementById('dice');
        dice.style.display = 'flex'; // Torna visível ao começar
        let count = 0;
        let rolledValue = 0;
        
        const interval = setInterval(() => {
            rolledValue = Math.floor(Math.random() * 6) + 1;
            dice.textContent = rolledValue;
            dice.style.transform = `rotate(${Math.random() * 360}deg)`;
            count++;
            
            if (count > 20) {
                clearInterval(interval);
                dice.style.transform = 'rotate(0deg)';
                resolve(rolledValue);
            }
        }, 50);
    });
}
 
 //Action tour 
document.addEventListener('click', function (event) {
  const btn = event.target.closest('.bntAction');
  if (btn) {
    const id = btn.getAttribute('data-id');
    carregarAventura(id, btn);
   exemploUso()
  }
});

function carregarAventura(id) {
   const dice = document.getElementById('dice');
   dice.style.display = 'none';  
  visibleNPCContainer('.npc-container');
  fetch(`/quest/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar aventura!');
      }
      return response.json();
    })
    .then(data => {
      // Limpa o conteúdo antes de animar
      document.getElementById('actionInfo').innerHTML = '<span id="typed-description"></span>';

      // Aplica o efeito de digitação com Typed.js
      new Typed('#typed-description', {
        strings: [data.description],
        typeSpeed: 40,
        startDelay: 300,
        showCursor: true,
        cursorChar: '|',
        loop: false
      });

      // Lógica para atualizar cada botão de forma diferente
      document.querySelectorAll('.bntAction').forEach(botao => {
        let currentId = parseInt(botao.getAttribute('data-id'));
        let novoId;

        // Definindo a lógica de atualização com base na classe do botão
        if (botao.classList.contains('btn-danger')) {  
          novoId = data.physicalAction;  
        } else if (botao.classList.contains('btn-success')) {  
          novoId = data.socialAction;  
        } else if (botao.classList.contains('btn-primary')) {   
          novoId = data.mentalAction;   
        }

        // Atualiza o data-id de cada botão com o novo valor
        botao.setAttribute('data-id', novoId);
      });
    })
    .catch(err => {
      document.getElementById('actionInfo').innerHTML = 'Erro ao carregar aventura.';
    });
}


// animar o texto

function iniciarTyped(text) {
  var typed = new Typed('#typed-text', {
    text,
    typeSpeed: 50,     // Velocidade da digitação
    backSpeed: 30,     // Velocidade ao apagar (se quiser usar loop ou backspace)
    startDelay: 300,   // Delay inicial
    backDelay: 1000,   // Delay antes de apagar
    smartBackspace: true,
    loop: false,       // Defina como true se quiser looping infinito
    showCursor: true,
    cursorChar: '|'
  });
}


/***********************  Get valou ******************************* */

async function buscarQuest(id) {
    try {
        const resposta = await fetch(`/quest/${id}`);
        if (!resposta.ok) throw new Error('Erro na requisição');
        const dados = await resposta.json(); // Se o retorno for JSON
        return dados; // Aqui retorna os dados da requisição
    } catch (erro) {
        console.error('Erro ao buscar quest:', erro);
        return null; // Retorna null em caso de erro
    }
}

async function exemploUso() {
    let valorRetorno = await buscarQuest(5);
    console.log('Valor retornado:', valorRetorno); 
}

