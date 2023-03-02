let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch(nacionalidade) {
    case `brasil`:
    console.log(`Você é brasileiro(a).`)
    break    
    case `argentina`:
    console.log(`Você é argentino(a).`)
    break    
    case `uruguai`:
    console.log(`Você é uruguaio(a).`)
    break    
    case `chile`:
    console.log(`Você é chileno(a).`)
    break    
    case `colombia`:
    console.log(`Você é colombiano(a).`)
    break    
    default: {
    console.log(`nacionalidade não encontrada`)
    }
}  







