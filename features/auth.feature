Funcionalidade: Autenticação de usuários

  Como visitante
  Quero criar, acessar, atualizar e excluir minha conta
  Para participar da plataforma SaberQuest com segurança

  # CREATE -OK
  Cenário: Registrar novo usuário com sucesso
    Dado que estou na página de registro
    Quando preencho nome, email, senha e tipo de usuário
    E clico em "Registrar"
    Então minha conta deve ser criada
    E devo ver uma mensagem de sucesso

  # READ -- ok
  Cenário: Visualizar meu perfil
    Dado que estou logado no sistema
    Quando acesso a rota /profile
    Então devo ver meus dados pessoais (nome, email, role)

  # UPDATE -- ok
  Cenário: Atualizar dados da conta
    Dado que estou logado
    E estou na página de edição de perfil
    Quando altero meu nome e email
    E clico em "Salvar"
    Então os dados devem ser atualizados corretamente

  # DELETE -- ok
  Cenário: Excluir conta
    Dado que estou logado
    Quando clico no botão "Excluir minha conta"
    E confirmo a exclusão
    Então minha conta deve ser removida do sistema
    E devo ser deslogado automaticamente
