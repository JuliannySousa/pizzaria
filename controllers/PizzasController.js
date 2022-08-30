// Importando o array de pizzas
const { name, resolveInclude } = require('ejs');
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render("index.ejs", {pizzas});
    },
    
    show: (req, res) => {
        let id = req.params.id
        let pizza = pizzas.find(p=>p.id == id);

        res.render("pizza.ejs", {pizza})
        

    },

    search:(req,res) =>{
        let search = req.query.q
        let pizzaSearch = pizzas.filter(p => p.nome.toLocaleLowerCase().includes(search))
        res.render('index.ejs', {pizzas:pizzaSearch})

            
    },

}