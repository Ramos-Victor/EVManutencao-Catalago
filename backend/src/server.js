import app from './app.js'

// Define a porta 3000
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
