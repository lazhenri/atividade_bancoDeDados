const mongoose = require('mongoose');
//estrutura do seu model (atributos da sua entidade)
const tarefasSchema = new mongoose.Schema({
    id : { type : Number },
    descricao: { type: String },
    dataInclusao: { type: String },
    conclusao: { type: Boolean },
    nomeColaborador: { type: String }
},{
    //gera por padrao uma versao para cada atualidade do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const tarefas = mongoose.model('tarefas', tarefasSchema);

// exportar o model para ser utilisado
module.exports = tarefas;