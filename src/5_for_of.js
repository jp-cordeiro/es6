var lista = ["teste",34,{name:"Fulano"}];

//ES5
// for(var i in lista){
//     console.log(lista[i]);
// }

//ES6
//O i passa a ser o valor do array e não mais o índice
for(let i of lista){
    console.log(i);
}
