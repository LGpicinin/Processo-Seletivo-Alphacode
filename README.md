Os métodos Create e GetAll estão funcionando bem. 
O Delete funciona, entretanto é necessário recarregar a página para que seja possível visualizar a mudança.
O Update utiliza o mesmo espaço do login, então quando você aperta no botão de editar, só é necessário ir para a parte de cima da página e atualizar os valores. Porém, as vezes, mesmo apertando no botão de editar, os dados do contato não aparecem nos inputs.
Agora falarei dos comandos para rodar o app e o server.
App: npm install; npm run start.
Server: php artisan migrate ; php artisan serve.
