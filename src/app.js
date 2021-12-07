const empresa = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

//string de conexao
mongoose.connect ("mongoose://localhost:27017/senac", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//conexao com o mongo
let db = mongoose.connection;

// Captura de erro ou sucesso na conexao
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
    console.log("conexao feita com sucesso,")
})

//rotas
const index = require("./routes/index")
const tarefas = require("./router/tarefasRoute")

//configurar body parser
app.use(bodyParser.json();
//app.use(express.json()); - podemos usar a propria funcao de parse

app.use(function (req, res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app