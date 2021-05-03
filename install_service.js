var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço
var svc = new Service({
//Nome do servico
name:'Contador de arquivos',
//Descricao que vai aparecer no Gerenciamento de serviço do Windows
description: 'Programa que conta arquivos de uma pasta.',
//caminho absoluto do seu script
script: 'C:\\aplicativo-js\\main.js'
});
svc.on('install',function(){
svc.start();
});
// instalando o servico
svc.install();