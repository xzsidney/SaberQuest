 
const { AdventureAction, Adventure } = require("../models");

const adventuresController = {
  // Página de entrada da missão
  questPage: async (req, res) => { 
    res.render('game_master/quest/index', {
      title: 'Adventure Mission'
    });
  },

  // Lista todas as aventuras
  indexPage: async (req, res) => { 
    const adventures = await Adventure.findAll();
    res.render("game_master/adventures/index", { adventures });
  },

  // Formulário de nova aventura
  newPage: (req, res) => {
    res.render("game_master/adventures/new");
  },

  create: async (req, res) => {
  try {
    const { name, description, difficulty, reward, requirement, level } = req.body;

    // Validação simples (opcional)
    if (!name || !description || !difficulty || !reward || !level) {
      return res.status(400).send("Todos os campos obrigatórios devem ser preenchidos.");
    }

    await Adventure.create({ name, description, difficulty, reward, requirement, level });

    res.redirect("/adventures");
  } catch (error) {
    console.error("Erro ao criar aventura:", error);
    res.status(500).send("Erro interno ao criar aventura.");
  }
},
  // Cria nova aventura
  create2: async (req, res) => {
    const { name, description, difficulty, reward, requirement, level } = req.body;
    await Adventure.create({ name, description, difficulty, reward, requirement, level });
    res.redirect("/adventures");
  },

  

 // Página de detalhes da aventura
  showPage: async (req, res) => {
    try {
      const adventure = await Adventure.findByPk(req.params.id, {
        include: [
          {
            model: AdventureAction,
            as: 'actions'  // Certifique-se de que o alias 'actions' está correto
          }
        ]
      });

      if (!adventure) {
        return res.status(404).send('Aventura não encontrada');
      }

      res.render('game_master/adventures/show', { adventure });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar aventura !!');
    }
  } ,

 
  // Formulário de edição
  editPage: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    res.render("game_master/adventures/edit", { adventure });
  },

  // Atualiza aventura
  update: async (req, res) => {
    const { name, description, difficulty, reward, requirement, level } = req.body;
    await Adventure.update(
      { name, description, difficulty, reward, requirement, level },
      { where: { id: req.params.id } }
    );
    res.redirect("/adventures/" + req.params.id);
  },

  // Deleta aventura
  delete: async (req, res) => {
    await Adventure.destroy({ where: { id: req.params.id } });
    res.redirect("/adventures");
  },

  // Inicia aventura
  startAdventure: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    // Exemplo simples: adicionar status no campo reward só para mostrar a mudança (ideal seria ter campo status no model)
    adventure.reward = '[Started] ' + adventure.reward;
    await adventure.save();
    res.redirect(`/adventures/${adventure.id}`);
  },

  // Conclui aventura
  completeAdventure: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    adventure.reward = '[Completed] ' + adventure.reward;
    await adventure.save();
    res.redirect(`/adventures/${adventure.id}`);
  },

  // Mostra progresso da aventura (exemplo fictício)
  showProgress: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    const progress = '50%'; // Exemplo fixo, você pode futuramente integrar com ações reais
    res.render("game_master/adventures/showProgress", { adventure, progress });
  },

  // Desafiar professor (simples)
  challengeProfessor: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    res.send('Professor challenge started successfully!');
  },

  // Interagir com Giz Mágico (simples)
  interactWithMagicChalk: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).send('Adventure not found');
    }
    res.send('Interaction with the Magic Chalk completed successfully!');
  }
};

module.exports = adventuresController;
