Funcionalidade: Gerenciar personagem e jogar

  Como jogador
  Quero criar e gerenciar meu personagem
  Para participar das aventuras escolares

  Cenário: Criar personagem
    Dado que estou logado como jogador
    Quando acesso a tela de criação de personagem
    E preencho o nome e atributos iniciais
    Então o personagem é criado e aparece na lista

  Cenário: Visualizar personagens
    Dado que estou logado como jogador
    Quando acesso "Meus Personagens"
    Então devo ver todos os personagens que criei
