const database = "BD03-NoSQl-AtlasMongoDB";
const collection = "bd3-nosql-atv1";

use(database);

/* Alterando o nome do aluno*/
db['bd3-nosql-atv1'].updateOne(
  {"codigo": '2'} , //Critério de seleção do arquivo a ser atualizado
  {$set: {"nome": "Samara Nunes"}}, //O que será atualizado
 ); 

/* Alterando o RG e CPF do aluno*/
db['bd3-nosql-atv1'].updateMany(
  {"codigo": '3'} , //Critério de seleção do arquivo a ser atualizado
  {$set: {"cpf": "196.063.100-43"}}, //O que será atualizado
  {$set: {"rg": "14.531.737-7"}} //O que será atualizado
); 

/*Excluir um aluno*/ 
db['bd3-nosql-atv1'].deleteOne(
  {"codigo": '1'} //Critério de seleção do arquivo a ser excluído
);