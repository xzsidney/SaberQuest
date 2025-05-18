Funcionalidade: Gerenciar aventuras
  Como administrador ou professor
  Quero criar, visualizar, editar e excluir aventuras
  Para controlar o conteúdo de gameplay narrativo

  Cenário: Criar nova aventura -- OK
    Dado que estou autenticado como professor
    Quando acesso a página "Nova Aventura"
    E preencho os campos nome, descrição, dificuldade, recompensa, requisito e nível
    E clico em "Salvar"
    Então a aventura deve ser salva no banco de dados

  Cenário: Editar uma aventura existente OK
    Dado que estou na lista de aventuras
    E clico em "Editar" em uma aventura
    Quando altero o campo descrição
    E clico em "Salvar"
    Então as alterações devem ser aplicadas

  Cenário: Excluir uma aventura  OK
    Dado que estou na lista de aventuras
    Quando clico em "Excluir" em uma aventura
    E confirmo a exclusão
    Então a aventura deve ser removida do banco
