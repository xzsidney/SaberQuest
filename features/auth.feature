Funcionalidade: Autenticação de usuários

  Como visitante
  Quero fazer login e criar uma conta
  Para acessar o jogo SaberQuest

  Cenário: Fazer login com sucesso
    Dado que estou na página de login
    Quando preencho meu e-mail e senha corretamente
    E clico em "Entrar"
    Então devo ser redirecionado para meu painel

  Cenário: Criar uma nova conta
    Dado que estou na página de registro
    Quando preencho nome, email, senha e papel
    E clico em "Registrar"
    Então devo ver uma mensagem de sucesso e ir para a página de login
