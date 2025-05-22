//

// Função para controle de inico da aventura 
function hideDivA() {
  document.getElementById('containerSenaText').style.display = 'none';
}

function showDivA() {
  document.getElementById('containerSenaText').style.display = 'block';
  document.getElementById('containerBtn').style.visibility = 'visible';
  let exibir = false;
  if (exibir === true) {
    document.getElementById('containerNPC').style.visibility = 'visible';
  } else {
    //vai alguma outra regra
  }

}

// aqui vai a logica do bnt de ação da cena


function chooseAction(actionId) {
  const roll = Math.floor(Math.random() * 10) + 1;

  // Gerar novos IDs numéricos fictícios com base no ID atual
  const newPhysicalId = actionId + 1;
  const newSocialId = actionId + 2;
  const newMentalId = actionId + 3;
  const npcSpeak = true

  if (npcSpeak === true) {
    document.getElementById('containerNPC').style.visibility = 'visible';
    document.getElementById("npcSpeaker").innerHTML = "<strong>Professora Helena:</strong> Seja bem-vinda! Pegue seu material e se acomode. A aula já vai começar. Rolagem: " + roll;
    document.getElementById("npcImage").setAttribute("src", "/img/adventures/02.jpg");

  }

  // Atualiza o titulo da Cena e o texto
  document.getElementById("sceneTitle").innerText = "Cena 02: Correndo na Escola" + roll;
  document.getElementById("sceneDesc").innerText = "Cena 02: Descrição" + roll;
  document.getElementById("sceneTextDesc").innerText = "Cena 02: Descrição" + roll;
  document.getElementById("sceneChar").innerText = "Cena 02: Char" + roll;
  document.getElementById("sceneTextChar").innerText = "Cena 02: Char Texto" + roll;

  // Atualiza oos dados dos BNT ação
  document.getElementById("title-physical").innerText = "💪 Brave Tackle";
  document.getElementById("desc-physical").innerText = "You charge forward and leap over desks.";
  document.getElementById("diff-physical").innerText = "Difficulty: " + "⭐".repeat(roll);

  document.getElementById("title-social").innerText = "🗣️ Class Clown";
  document.getElementById("desc-social").innerText = "You crack a joke to ease the tension.";
  document.getElementById("diff-social").innerText = "Difficulty: " + "⭐".repeat(roll);


  document.getElementById("title-mental").innerText = "🧠 Logical Scan";
  document.getElementById("desc-mental").innerText = "You calculate where the teacher is most distracted.";
  document.getElementById("diff-mental").innerText = "Difficulty: " + "⭐".repeat(roll);


  // Atualiza os onClick com novos IDs inteiros
  document.getElementById("physical").setAttribute("onclick", `chooseAction(${newPhysicalId})`);
  document.getElementById("social").setAttribute("onclick", `chooseAction(${newSocialId})`);
  document.getElementById("mental").setAttribute("onclick", `chooseAction(${newMentalId})`);

  console.log(`🎲 Rolado: ${roll} | Ação ID recebida: ${actionId}`);
}






// Regra para jogar o dado 
function rollDice() {
  const roll = Math.floor(Math.random() * 10) + 1;
  const resultEl = document.getElementById('roll-result');
  const penaltyEl = document.getElementById('penalty-effect');

  resultEl.innerHTML = '🎲 Rolando dado...';
  penaltyEl.style.display = 'none';

  setTimeout(() => {
    resultEl.innerHTML = `🎲 Resultado: ${roll}`;

    if (roll >= 6) {
      resultEl.innerHTML += '<br>✅ Sucesso!';
    } else {
      resultEl.innerHTML += '<br>❌ Falha!';
      penaltyEl.style.display = 'block';

      setTimeout(() => {
        penaltyEl.style.display = 'none';
      }, 2500);
    }
  }, 1000);
}


