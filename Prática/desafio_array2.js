// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número 
// Par encontrado

const numeros = []

numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.push(4);
numeros.push(5);
numeros.push(6);
numeros.push(7);
numeros.push(8);
numeros.push(9);
numeros.push(10);


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
    console.log(numero);
}
}
