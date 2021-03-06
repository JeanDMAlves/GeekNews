(async () => {
    const database = require('./db');
    const User = require('./user');
    const News = require('./news');
    const Messages = require('./message');
    const cors = require('cors');

    const nodemailer = require("nodemailer")
    const gmail = "trabalhosifurg@gmail.com"
    const senha = "#a123456789"
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmail,
            pass: senha
        }
    });
    
    await database.sync();

    const express = require('express');
    const server = express();
    server.use(express.json())
    server.use(cors())

    server.get('/message', (req, res) => {
        // Retorna as mensagens cadastradas no banco de dados
        Messages.findAll().then((dados) => {
            return res.json(dados);
        }); 
    })

    server.post('/message', (req,res) => {
        const name = req.body.name
        const phone = req.body.phone
        const message = req.body.message
        if(name && phone && message){
            Messages.create({
                Name: name,
                Phone: phone,
                Message: message
            })
             return res.json({"result": "Sua mensagem foi cadastrada em nosso banco de dados."})
        }
    })

    server.get('/news', (req, res) => {
        // Retorna os usuários cadastrados no banco de dados
        News.findAll().then((dados) => {
            return res.json(dados);
        }); 
    })

    server.post('/news', (req,res) => {
        const news = req.body.news;
        if(news){
             News.create({
                 img: news.img,
                 titulo: news.titulo,
                 noticia: news.noticia,
                 resumo: news.resumo,
                 autor: news.autor,
                 label: news.label
             })
             return res.json({"result": "Notícia cadastrada com sucesso"})
        }
    })

    server.post('/recover', (req, res) => {
        const email_user = req.body.email
        if(email_user){
            User.findOne({where: {email: email_user}}).then((dados) => {
                if(dados){
                    const mailOptions = {
                        from: gmail,
                        to: email_user,
                        subject: 'Recuperação de senha',
                        text: `Senha: ${dados.password}`
                    };

                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            return res.json({
                                "result": error 
                            })
                        }

                        return res.json({
                            "result": "Cheque seu email!!!" 
                        })
                        
                    })
                } else{
                    return res.json({
                        "result": "Email não cadastrado"
                    })
                }
            })
        }
        else{
            return res.json({"result": "Algum erro ocorreu"})
        }
    })


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
                User.findOne({where: {email: email}}).then((dados) => {
                    if(dados){
                        return res.json({
                            "message": "E-mail já está cadastrado no sistema",
                            "resultado": false
                        })
                    }else{
                        User.create({
                            email: email,
                            password: password
                        })
                        return res.json({
                            "message": "Usuário cadastrado com sucesso",
                            "resultado": true
                        })
                    }
                })
            }else{
                throw "Error"
            }
        } catch(error) {
            return res.json({
                "message": "Usuário não foi cadastrado",
                "resultado": false
            })
        } 
    })

    server.post('/login', (req, res) => {
        // Verifica se o usuário existe no banco de dados
        const user = req.body
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