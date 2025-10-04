import express from 'express';

const app = express();

const users = []
app.post('/usuarios',(req, res) => {
    
    console.log (req)
    res.send('Ok, Deu Bom')
})

app.get('/usuarios',(req, res) => {
    res.send('ok Jorjão deu certo a rota de usuarios !Vc é foda!')
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');

})

// 1 tipo de rota / Método HTTP
// 2 Endereço da rota
//
//Criar Nossa API de usuarios
 
 //criar um usuario
  //listar todos os usuarios
   //Editar um usuario
    //Deletar um usuario
