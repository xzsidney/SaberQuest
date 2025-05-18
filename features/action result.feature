Funcionalidade: Definir resultado de ações de aventura
  Como professor
  Quero determinar o que acontece quando um personagem tem sucesso ou falha em uma ação
  Para guiar a progressão da história

  Cenário: Criar resultado para ação
    Dado que estou editando uma ação de aventura
    Quando preencho nome do resultado
    E defino ação seguinte em caso de sucesso
    E defino ação seguinte em caso de falha
    Então o resultado deve ser salvo e associado corretamente

  Cenário: Atualizar resultado de uma ação
    Dado que estou visualizando os resultados
    Quando clico em "Editar"
    E altero a ação de falha
    Então a lógica de sequência deve ser atualizada

  Cenário: Remover um resultado de ação
    Dado que estou na lista de resultados
    Quando clico em "Excluir"
    Então o resultado é removido e a ação volta a ter resultados indefinidos
