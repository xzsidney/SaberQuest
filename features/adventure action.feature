Funcionalidade: Gerenciar ações dentro da aventura
  Como professor
  Quero definir ações possíveis em cada etapa da aventura
  Para guiar as escolhas dos jogadores

  Cenário: Adicionar ação à aventura
    Dado que estou visualizando uma aventura
    Quando clico em "Nova Ação"
    E preencho nome, descrição, dificuldade e os tipos de ação (físico, social, mental)
    E associo à aventura atual
    Então a ação deve ser criada com sucesso

  Cenário: Editar uma ação existente
    Dado que estou visualizando as ações de uma aventura
    E clico em "Editar"
    Quando altero a dificuldade
    E clico em "Salvar"
    Então a ação deve ser atualizada

  Cenário: Excluir uma ação
    Dado que estou na lista de ações
    Quando clico em "Excluir" em uma ação
    E confirmo a exclusão
    Então a ação é removida do sistema
