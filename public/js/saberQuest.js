function toggleElemento(id) {
  var elemento = document.getElementById(id);
  if (!elemento) {
    console.error('Elemento com id "' + id + '" não encontrado.');
    return;
  }
  elemento.classList.toggle('hidden');
}

// ----------------------- Texto das ações
  function mostrarTexto(mensagem) {
            const div_Test = document.getElementById('text_Action'); 
            div_Test.innerHTML = 'Texto da ação do botão.'
        }

        function esconderTexto() {
            const div_Test = document.getElementById('text_Action'); 
            div_Test.innerHTML = ''
        }


         function play(num) {
            alert('Você clicou em Play do quadrado ' + num);
        }