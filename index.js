import {getElement} from './client.js';


'use strict';

// Enviando e-mails usando o Node.js e o famoso nodemailer
var nodemailer = require('nodemailer');

// Vamos criar a conta que irá mandar os e-mails
var conta = nodemailer.createTransport({
    service: 'Gmail', // Existem outros services, você pode procurar
                      // na documentação do nodemailer como utilizar
                      // os outros serviços
    auth: {
        user: '', // Seu usuário no Gmail
        pass: ';' // A senha da sua conta no Gmail :-)
    }
});

conta.sendMail({
    from: nome, email, // Quem está mandando
    to: 'Gabriel Marcos <>', // Para quem o e-mail deve chegar
    subject: 'Teste EMAIL', // O assunto
    html: '<strong>Oi Alan!</strong><p>Estou testando seu gist para enviar e-mails, amo você!</p>', // O HTMl do nosso e-mail
}, function(err){
    if(err)
        throw err;

    console.log('E-mail enviado!');
});
