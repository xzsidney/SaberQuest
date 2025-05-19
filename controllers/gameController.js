const gameController = {
  showPlayScreen: async (req, res) => {
    // Dados mockados da aventura
    const adventure = {
      id: 1,
      name: "Primeiro Dia de Aula",
      description: "Você acaba de chegar na nova escola e está prestes a conhecer seus colegas e professores. Como você deseja começar sua jornada acadêmica?"
    };

    // Simulação de personagem logado
    const character = {
      name: "João Estudioso",
      level: 1,
      strength: 4,
      dexterity: 3,
      constitution: 3,
      perception: 2,
      cognition: 5,
      willpower: 4
    };

    res.render('game/play', {
      user: req.session.user,
      character,
      adventure
    });
  }
};

module.exports = gameController;
