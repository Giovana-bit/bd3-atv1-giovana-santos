const database = "BD03-NoSQl-AtlasMongoDB";
const collection = "bd3-nosql-atv1";

use(database);

/*Selecionar todos os alunos*/
db['bd3-Nosql-atv1'].find();

/* selecionar os alunos ocultando cod_aluno */
db['bd3-Nosql-atv1'].find(
    {"cpf": "81452963745"},
    {"cod_aluno": 0,}
);