const num = Number(prompt("Digite um número."))

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
// Faça isso:
// 1. Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){
if(num %2 === 0){
    if(num %3 === 0){
        console.log("Esse número é divisível por 2 e 3");
    }else{
        console.log("Esse número é divisível por 2 mas não é divisível por 3");
    }
}else{
    console.log("Esse número não é divisível nem por 2 e nem por 3");
}
//         }
//     }
// ```
// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
if(num % 2 === 0 && num %3 === 0){
    console.log("Esse numero é divisível por 2 e 3")
}else {
    console.log("Esse número não é divisível por 2 e 3")}
//     }
