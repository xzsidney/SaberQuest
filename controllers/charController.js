const { Character ,Attribute , Item , Skill } = require("../models"); 

 
 
const charController = {
  // Página de personagem
  charPage: (req, res) => {
   const personagem = {
        nome: "Sucrose",
        vida: "12,962",
        ataque: "790",
        defesa: "1,168",
        maestriaElemental: "169",
        taxaCritica: "12.5%",
        danoCritico: "105.4%",
        recargaEnergia: "118.1%",
        bonusDanoAnemo: "27.0%",
        arma: {
            nome: "The Widsith",
            atkBase: "388",
            subAtributoNome: "Dano Crítico",
            subAtributoValor: "45.4%"
        },
        artefatos: [
            {
                nome: "Flor da Lembrança",
                raridade: 5,
                imagem: "flor.png", // Substitua pelo caminho da imagem da flor
                atributoPrincipal: { nome: "Vida", valor: "3,571" },
                subAtributos: [
                    { nome: "Taxa Crítica", valor: "+5.0%" },
                    { nome: "ATK", valor: "+4.1%" },
                    { nome: "DEF", valor: "+7.9%" },
                    { nome: "Maestria Elemental", valor: "+33" }
                ]
            },
            {
                nome: "Pluma da Busca",
                raridade: 5,
                imagem: "pluma.png", // Substitua pelo caminho da imagem da pluma
                atributoPrincipal: { nome: "ATK", valor: "232" },
                subAtributos: [
                    { nome: "DEF%", valor: "+3.6%" },
                    { nome: "Recarga de Energia", valor: "+11.7%" },
                    { nome: "Maestria Elemental", valor: "+33" }
                ]
            },
            {
                nome: "Ampulheta dos Eons",
                raridade: 5,
                imagem: "ampulheta.png", // Substitua pelo caminho da imagem da ampulheta
                atributoPrincipal: { nome: "Maestria Elemental", valor: "167" },
                subAtributos: [
                    { nome: "Taxa Crítica", valor: "+4.7%" },
                    { nome: "ATK%", valor: "+5.2%" },
                    { nome: "DEF", valor: "+15" },
                    { nome: "Vida", valor: "+406" }
                ]
            },
            {
                nome: "Cálice de Anemo",
                raridade: 5,
                imagem: "calice.png", // Substitua pelo caminho da imagem do cálice
                atributoPrincipal: { nome: "Bônus de Dano Anemo", valor: "43.5%" },
                subAtributos: [
                    { nome: "DEF", valor: "+15" },
                    { nome: "Dano Crítico", valor: "+6.5%" },
                    { nome: "Recarga de Energia", valor: "+9.3%" },
                    { nome: "Vida", valor: "+191" }
                ]
            },
            {
                nome: "Tiara da Sabedoria",
                raridade: 5,
                imagem: "tiara.png", // Substitua pelo caminho da imagem da tiara
                atributoPrincipal: { nome: "Dano Crítico", valor: "43.5%" },
                subAtributos: [
                    { nome: "ATK%", valor: "+2.8%" },
                    { nome: "Vida", valor: "+39" },
                    { nome: "Taxa Crítica", valor: "+5.0%" },
                    { nome: "DEF", valor: "+167" }
                ]
            }
        ],
        conjuntoArtefatos: "Viridescent Venerer"
    };

    // AQUI é onde a variável precisa ser passada
    res.render("game_master/char/index", { personagem: personagem });
  },
    listPage: (req, res) => {
    const characters = [
      {
        id: 1,
        name: "Shadowblade",
        level: 5,
        className: "Mage",
        hp: 38,
        mp: 52,
        hpPercent: 76,
        mpPercent: 86,
        status: "Ready"
      },
      {
        id: 2,
        name: "Ironfist",
        level: 4,
        className: "Warrior",
        hp: 60,
        mp: 12,
        hpPercent: 90,
        mpPercent: 20,
        status: "Injured"
      }
    ];

    res.render("game_master/char/allChar", { characters });
  },
   
 
};
 
 module.exports = charController;