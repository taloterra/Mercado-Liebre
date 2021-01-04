const express = require('express') ;
const path = require('path') ;
const app = express() ;

const publicPath = path.resolve(__dirname, './public') ;
app.use( express.static(publicPath) ) ;

//app.listen(3000, () => {
//    console.log('Servidor corriendo en el puerto 3000') ;
//}) ;


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor Corriendo")
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html')) ;
})