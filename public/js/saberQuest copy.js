 

// controll div   visible - hidden  Adventur
function ifoQuest(adventureInfo) { 
    const overlay = document.getElementById(adventureInfo);
    overlay.classList.toggle('visible');
}


// controll div   visible  NPC 
function visibleNPCContainer() { 
  const container = document.querySelector('.npc-container');
  if (container) {
    container.classList.add('visible');
  }
}

//Action tour 
document.addEventListener('click', function(event) {
    const btn = event.target.closest('.bntAction');
    if (btn) {
      const id = btn.getAttribute('data-id');
      carregarAventura(id, btn);
    }
});

// action text in div
function carregarAventura(id, btn) {
   visibleNPCContainer();
   fetch(`/quest/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar aventura!');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('actionInfo').innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        `;

        // Atualizar apenas o botão clicado corretamente
        let novoId = parseInt(btn.getAttribute('data-id')) + 1;
        btn.setAttribute('data-id', novoId);
       // btn.innerText = `Mostrar Aventura ${novoId}`;
      })
      .catch(err => {
        document.getElementById('actionInfo').innerHTML = 'Erro ao carregar aventura.';
      });
}











/*
 document.addEventListener('click', function(event) {
    // Verifica se o elemento clicado ou o pai tem a classe btnMostrar
    const btn = event.target.closest('.btnMostrar');
    if (btn) {
      const id = btn.getAttribute('data-id');
      carregarAventura(id);
    }
  });

  function carregarAventura(id) {
    
    fetch(`/quest/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar aventura!');
        }
        
        return response.json();
      })
      .then(data => {
        document.getElementById('adventureInfo1').innerHTML = `
          <h1>ok</h1>
          <h3>${data.name}</h3>
          <p>${data.description}</p>
        `;

          // Agora sim: Atualiza apenas o botão clicado
        let novoId = parseInt(btn.getAttribute('data-id')) + 1;
        btn.setAttribute('data-id', novoId);
        btn.innerText = `Mostrar Aventura ${novoId}`;
      
      })
      .catch(err => {
        document.getElementById('adventureInfo1').innerHTML = 'Erro ao carregar aventura.';
      });


        

  }

 
function carregarAventura(id) {
    fetch(`/quest/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar aventura!');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('npd_Speak').innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.description}</p>
        `;

        // Atualizar o data-id do botão para o próximo id (por exemplo, +1)
        const btn = document.getElementById('btnMostrar');
        let novoId = parseInt(btn.getAttribute('data-id')) + 1;
        btn.setAttribute('data-id', novoId);
      })
      .catch(err => {
        document.getElementById('npd_Speak').innerHTML = 'Erro ao carregar aventura.';
      });
  }


function carregarAventura1(id) {
    const routerAction =`/quest/${id}` ; 
    fetch(routerAction)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar aventura!');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('npd_Speak').innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.description}</p>
        `;
      })
      .catch(err => {
        document.getElementById('npd_Speak').innerHTML = 'Erro ao carregar aventura.X';
      });
}
      */