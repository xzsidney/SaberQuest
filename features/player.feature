Funcionalidade: Gerenciar personagem e jogar

  Como jogador
  Quero criar, visualizar, editar e excluir meu personagem
  Para poder participar das aventuras escolares

  # CREATE -- ok 
  Cenário: Criar personagem
    Dado que estou logado como jogador
    E acesso a página "Criar Personagem"
    Quando preencho nome e distribuo os atributos
    E clico em "Salvar"
    Então o personagem deve ser criado
    E deve aparecer na lista de personagens

  # READ  -- ok
  Cenário: Visualizar meus personagens
    Dado que estou logado como jogador
    Quando acesso a página "Meus Personagens"
    Então devo ver todos os personagens que criei
    E posso clicar para ver os detalhes de cada um

  # UPDATE  - ok
  Cenário: Editar personagem
    Dado que estou na tela de detalhes de um personagem
    Quando clico em "Editar"
    E altero o nome ou atributos permitidos
    E clico em "Salvar"
    Então as alterações devem ser salvas corretamente

  # DELETE  - ok
  Cenário: Excluir personagem
    Dado que estou na lista de personagens
    Quando clico no botão "Excluir" ao lado de um personagem
    E confirmo a exclusão
    Então o personagem deve ser removido da minha conta

  # GAMEPLAY -- Depende de aventura 
  Cenário: Entrar em uma aventura
    Dado que tenho um personagem criado
    Quando escolho uma narrativa disponível
    E clico em "Iniciar Aventura"
    Então sou levado à tela da aventura com ações possíveis

  Cenário: Realizar uma ação em uma aventura
    Dado que estou numa aventura em andamento
    Quando seleciono uma ação
    Então recebo um resultado com base no meu personagem e nos dados
    E meu progresso na aventura é atualizado
