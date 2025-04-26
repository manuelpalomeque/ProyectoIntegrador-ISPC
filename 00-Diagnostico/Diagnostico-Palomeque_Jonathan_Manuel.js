// Actividad  1: Fundamentos de JavaScript ----------------------------------
 // a) Escribir un programa que  declare dos variables (nombre y edad)

 let nombre = "Manuel";
 let edad = 33 ;

 // Imprimir mensaje:
 console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

 // b)  en base al siguiente aary usar map y filter

 const numeros = [3,7,12,5,2];

 let mapeado = numeros.map((numero)=>{return numero**2});
 console.log(` Los numeros al cuadrado son: ${mapeado}`);

 let filtrado = numeros.filter((numero) => {return numero >5});
 console.log(` Los numeros mayores a 5 son: ${filtrado}`);

 // c) Funcion flecha que reciba un numero y devuelva si e spar o impar

 const par_impar = (nro) => {if(nro % 2 === 0){return `El numero ${nro} es par.`} else {return `El numero ${nro} es impar.`}};
 console.log(par_impar(21))
 console.log(par_impar(2))


 // Actividad 2: Desestructuracion y objetos ----------------------------------
