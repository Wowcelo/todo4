import chalk from "chalk";
import readlineSync from "readline-sync";

let QualSeuNome = readlineSync.question('Qual seu nome ?:  ');
let QualSeuProblema = readlineSync.question('Qual o item que deseja pesquisar?:  ');
let QualFinalidade = readlineSync.question('Qual finalidade do seu pedido?:  ');
console.log(chalk.bgRedBright(`${QualSeuNome} ${QualSeuProblema} ${QualFinalidade}`))