const { Archetype ,Attribute , Item , Skill } = require("../models"); 

const archetypesController = {
  // Lista todos
  indexPage: async (req, res) => {
    const archetypes = await Archetype.findAll();
    res.render("game_master/archetypes/index", { archetypes });
  },

  // Mostra formulário de criação
  newPage: (req, res) => {
    res.render("game_master/archetypes/new");
  },

  // Cria novo
  create: async (req, res) => {
    const { name, description, bonus } = req.body;
    await Archetype.create({ name, description, bonus });
    res.redirect("/archetypes");
  },

  // Mostrar detalhes
  showPage: async (req, res) => {
    const archetype = await Archetype.findByPk(req.params.id);
    res.render("game_master/archetypes/show", { archetype });
  },

  // Formulário de edição
  editPage: async (req, res) => {
    const archetype = await Archetype.findByPk(req.params.id);
    res.render("game_master/archetypes/edit", { archetype });
  },

  // Atualiza
  update: async (req, res) => {
    const { name, description, bonus } = req.body;
    await Archetype.update(
      { name, description, bonus },
      { where: { id: req.params.id } }
    );
    res.redirect("/archetypes/" + req.params.id);
  },

  // Deleta
  delete: async (req, res) => {
    await Archetype.destroy({ where: { id: req.params.id } });
    res.redirect("/archetypes");
  },
   
};

const attributesController = {
   // Lista todos os atributos
  indexPage: async (req, res) => {
    const attributes = await Attribute.findAll();
    res.render("game_master/attributes/index", { attributes });
  },

  // Mostra formulário de criação de atributo
  newPage: (req, res) => {
    res.render("game_master/attributes/new");
  },

  // Cria um novo atributo
  create: async (req, res) => {
   // const { name, description, levels } = req.body;
    const name = req.body.name;
   const description = req.body.description;
    const levels =  JSON.parse(req.body.levels); 
    await Attribute.create({ name, description, levels });
    res.redirect("/attributes");
  },

  // Mostra detalhes de um atributo
  showPage: async (req, res) => {
    const attribute = await Attribute.findByPk(req.params.id);
    res.render("game_master/attributes/show", { attribute });
  },

  // Formulário de edição de atributo
  editPage: async (req, res) => {
    const attribute = await Attribute.findByPk(req.params.id);
    res.render("game_master/attributes/edit", { attribute });
  },

  // Atualiza um atributo
  update: async (req, res) => {
    const { namea, descriptiona, levelsa } = req.body;
    const name = req.body.name;
   const description = req.body.description;
    const levels =  JSON.parse(req.body.levels) 
      
    const id = req.params.id;
    await Attribute.update(
      { name, description, levels },
      { where: { id: id } }
    );
    res.redirect("/attributes/" + id);
  },

  // Deleta um atributo
  delete: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log("deletando");
    await Attribute.destroy({ where: { id: id } });
    res.redirect("/attributes");
  },
};

const itemsController = {
  indexPage: async (req, res) => {
    const items = await Item.findAll();
    res.render("game_master/items/index", { items });
  },

  newPage: (req, res) => {
    res.render("game_master/items/new");
  },

  create: async (req, res) => {
    try {
      const { name, price, durability, archetype } = req.body;

      // Captura os valores dos inputs e transforma em objeto JSON
      const bonus = {
        bonus01: req.body.bn01 || "...",
        bonus02: req.body.bn02 || "...",
        bonus03: req.body.bn03 || "...",
      };

       // Verificar se todos os valores dos bônus estão presentes
      for (let key in bonus) {
        if (!bonus[key]) {
          return res.status(400).send(`O campo ${key} é obrigatório.`);
        }
      }

      // Criar o objeto JSON com os bônus
      const bonusJson = {
        bonus01: bonus.bonus01,
        bonus02: bonus.bonus02,
        bonus03: bonus.bonus03,
      };

      console.log(bonusJson);
      // Criação no banco de dados
      await Item.create({
        name,
        price,
        durability,
        bonus: bonusJson, 
        archetype,
      });

      res.redirect("/items");
    } catch (err) {
      console.error("Erro ao criar item:", err);
      res.status(500).send("Erro ao criar item.");
    }
  },

  create2: async (req, res) => {
    try {
      const name = req.body.name;
      const price = parseInt(req.body.price);
      const durability = parseInt(req.body.durability);
      const archetype = req.body.archetype;

      let bonus;
      try {
        bonus = JSON.parse(req.body.bonus);
      } catch (error) {
        return res.status(400).send("Erro: JSON inválido no campo bônus.");
      }

      await Item.create({ name, price, durability, archetype, bonus });
      res.redirect("/items");
    } catch (error) {
      console.error("Erro ao criar item:", error);
      res.status(500).send("Erro interno ao criar o item.");
    }
  },

  showPage: async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    res.render("game_master/items/show", { item });
  },

  editPage: async (req, res) => {
    const id = req.params.id;

    try {
      const item = await Item.findByPk(id);

      if (!item) {
        return res.status(404).send("Item não encontrado.");
      }

      res.render("game_master/items/edit", { item });
    } catch (error) {
      console.error("Erro ao carregar página de edição:", error);
      res.status(500).send("Erro ao carregar página de edição.");
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const price = req.body.price;
      const durability = req.body.durability;
      const archetype = req.body.archetype;

      // Receber os valores dos inputs e processá-los
      const bonus = {
        bn01: req.body.bn01,
        bn02: req.body.bn02,
        bn03: req.body.bn03,
      };

      // Verificar se todos os valores dos bônus estão presentes
      for (let key in bonus) {
        if (!bonus[key]) {
          return res.status(400).send(`O campo ${key} é obrigatório.`);
        }
      }

      // Criar o objeto JSON com os bônus
      const bonusJson = {
        bonus01: bonus.bn01,
        bonus02: bonus.bn02,
        bonus03: bonus.bn03,
      };

      // Atualizar o item no banco de dados
      await Item.update(
        { name, price, durability, archetype, bonus: bonusJson },
        { where: { id } }
      );

      // Redirecionar após sucesso
      res.redirect("/items");
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
      res.status(500).send("Erro interno ao atualizar o item.");
    }
  },
  update2: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const price = parseInt(req.body.price);
      const durability = parseInt(req.body.durability);
      const archetype = req.body.archetype;

      let bonus;
      try {
        bonus = JSON.parse(req.body.bonus);
      } catch (error) {
        res.redirect(`/items/${id}`);
        return;
      }

      await Item.update(
        { name, price, durability, archetype, bonus },
        { where: { id } }
      );

      res.redirect(`/items/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
      res.status(500).send("Erro interno ao atualizar o item.");
    }
  },

  delete: async (req, res) => {
    await Item.destroy({ where: { id: req.params.id } });
    res.redirect("/items");
  },
};

const skillsController ={
  indexPage: async (req, res) => {
    const skills = await Skill.findAll();
    res.render('game_master/skills/index', { skills });
  },

  newPage: (req, res) => {
    res.render('game_master/skills/new');
  },

  create: async (req, res) => {
    const {
      name,
      description,
      type,
      level,
      manaCost,
      healthCost,
      damage,
      range,
      archetypes
    } = req.body;

    await Skill.create({
      name,
      description,
      type,
      level,
      manaCost,
      healthCost,
      damage,
      range,
      archetypes
    });

    res.redirect('/skills');
  },

  showPage: async (req, res) => {
    const skill = await Skill.findByPk(req.params.id);
    res.render('game_master/skills/show', { skill });
  },

  editPage: async (req, res) => {
    const skill = await Skill.findByPk(req.params.id);
    res.render('game_master/skills/edit', { skill });
  },

  update: async (req, res) => {
    const {
      name,
      description,
      type,
      level,
      manaCost,
      healthCost,
      damage,
      range,
      archetypes
    } = req.body;

    await Skill.update(
      {
        name,
        description,
        type,
        level,
        manaCost,
        healthCost,
        damage,
        range,
        archetypes
      },
      {
        where: { id: req.params.id }
      }
    );

    res.redirect('/skills/' + req.params.id);
  },

  delete: async (req, res) => {
    await Skill.destroy({ where: { id: req.params.id } });
    res.redirect('/skills');
  }

};
module.exports = { archetypesController, attributesController, itemsController, skillsController };


 
/*

 [
  {
    "name": "Matemático",
    "description": "Especialista em números, lógica e padrões. Resolve problemas complexos com facilidade.",
    "bonus": "Bônus em Cognição e Percepção"
  },
  {
    "name": "Linguista",
    "description": "Mestre da linguagem, domina a comunicação oral e escrita com eloquência.",
    "bonus": "Bônus em Cognição e Vontade"
  },
  {
    "name": "Historiador",
    "description": "Conhece os fatos e eventos do passado, usando a experiência histórica para orientar decisões.",
    "bonus": "Bônus em Cognição e Constituição"
  },
  {
    "name": "Geógrafo",
    "description": "Estudioso do espaço, território e natureza. Sabe se orientar e analisar ambientes.",
    "bonus": "Bônus em Percepção e Destreza"
  },
  {
    "name": "Biólogo",
    "description": "Explora os mistérios da vida, entendendo plantas, animais e organismos diversos.",
    "bonus": "Bônus em Percepção e Cognição"
  },
  {
    "name": "Químico",
    "description": "Manipula substâncias e compreende reações com precisão científica.",
    "bonus": "Bônus em Cognição e Destreza"
  },
  {
    "name": "Físico",
    "description": "Interpreta o universo com leis da natureza, dominando movimento, energia e matéria.",
    "bonus": "Bônus em Cognição e Força"
  },
  {
    "name": "Artista",
    "description": "Expressa sentimentos e ideias com criatividade, seja em palco, tela ou som.",
    "bonus": "Bônus em Vontade e Destreza"
  },
  {
    "name": "Educador Físico",
    "description": "Mestre do corpo e do movimento, sempre pronto para desafios físicos e atléticos.",
    "bonus": "Bônus em Força e Constituição"
  }
]

*/
