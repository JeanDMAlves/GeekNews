(async () => {
    const database = require('./db');
    const User = require('./user');
    await database.sync();

    const express = require('express');
    const server = express();
    server.use(express.json())
    
    server.get('/users', (req, res) => {
        // Retorna os usuários cadastrados no banco de dados
        User.findAll().then((dados) => {
            return res.json(dados);
        }); 
    })

    server.post('/users', (req, res) => {
        // Cadastra um usuário novo no banco de dados
        const user = req.body
        try {
            const email = user.email
            const password = user.password
            if(email && password){
                User.create({
                    email: email,
                    password: password
                })
                return res.json({
                    "message": "Usuário cadastrado com sucesso"
                })
            }else{
                throw "Error"
            }
        } catch(error) {
            return res.json({
                "message": "Usuário não foi cadastrado"
            })
        }
        
    })

    server.post('/login', (req, res) => {
        // Verifica se o usuário existe no banco de dados
        const user = req.body
        // console.log(user)
        User.findAll().then((dados) => {
            for(item of dados){
                if((user.email == item.email) && (user.password == item.password)){
                    return res.json({'status': true})
                }
            }
            return res.json({'status': false})
        }); 
    })

    server.listen(3000);
})()