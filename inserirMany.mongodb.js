/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-NoSQl-AtlasMongoDB";

/* Criação da Constante que representa o nome da coleção */
const collection = "bd3-Nosql-atv1";

/* Define o BD que será utilizado*/
use(database);

/* Criação da coleção */
db.createCollection(collection);

/*Inserindo os alunos*/
db['bd3-Nosql-atv1'].insertMany([
  {
    cod_aluno: 1,
    nome: "Lucas Andrade",
    cpf: "81452963745",
    rg: "254198376",
    telefone_aluno: "11948753210",
    telefone_responsavel: "11962358741",
    email: "lucas.andrade92@gmail.com",
    data_nascimento: "14/05/2005"
  },
  {
    cod_aluno: 2,
    nome: "Mariana Souza",
    cpf: "36985214700",
    rg: "741258963",
    telefone_aluno: "11974259683",
    telefone_responsavel: "11935628947",
    email: "mariana_souza88@hotmail.com",
    data_nascimento: "29/08/2004"
  },
  {
    cod_aluno: 3,
    nome: "Rafael Lima",
    cpf: "85214796325",
    rg: "325698741",
    telefone_aluno: "11925896314",
    telefone_responsavel: "11948715926",
    email: "rafa.lima_2004@yahoo.com",
    data_nascimento: "10/12/2003"
  },
  {
    cod_aluno: 4,
    nome: "Beatriz Costa",
    cpf: "41785296314",
    rg: "963258741",
    telefone_aluno: "11936587412",
    telefone_responsavel: "11965412378",
    email: "bia.costa77@outlook.com",
    data_nascimento: "03/07/2005"
  },
  {
    cod_aluno: 5,
    nome: "Pedro Henrique",
    cpf: "25896314785",
    rg: "741369852",
    telefone_aluno: "11985214736",
    telefone_responsavel: "11975396241",
    email: "pedro.henrique_15@gmail.com",
    data_nascimento: "21/03/2006"
  },
  {
    cod_aluno: 6,
    nome: "Larissa Mendes",
    cpf: "96325874125",
    rg: "258147963",
    telefone_aluno: "11965478932",
    telefone_responsavel: "11936521487",
    email: "lari.mendes_99@hotmail.com",
    data_nascimento: "08/01/2004"
  },
  {
    cod_aluno: 7,
    nome: "Gabriel Rocha",
    cpf: "74125896314",
    rg: "147852369",
    telefone_aluno: "11975321489",
    telefone_responsavel: "11989632145",
    email: "gab.rocha21@gmail.com",
    data_nascimento: "16/09/2005"
  },
  {
    cod_aluno: 8,
    nome: "Juliana Martins",
    cpf: "85236974125",
    rg: "369741258",
    telefone_aluno: "11921478536",
    telefone_responsavel: "11965487321",
    email: "juliana.martins_08@yahoo.com",
    data_nascimento: "12/11/2003"
  },
  {
    cod_aluno: 9,
    nome: "Thiago Oliveira",
    cpf: "96314785236",
    rg: "852147369",
    telefone_aluno: "11947851236",
    telefone_responsavel: "11932147856",
    email: "thiago.oliveira_54@outlook.com",
    data_nascimento: "27/02/2006"
  },
  {
    cod_aluno: 10,
    nome: "Camila Ferreira",
    cpf: "74196325814",
    rg: "963258147",
    telefone_aluno: "11965432187",
    telefone_responsavel: "11925874196",
    email: "camila.ferreira93@gmail.com",
    data_nascimento: "05/06/2004"
  }
]);

/* Listando todos os alunos */
db['bd03NosqlAtv1'].find()