//códigos a serem reescritos

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }


// b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

// parte a))
const nome = prompt(`Qual é o seu nome?`)

nome === `José` ? console.log(`Oi, Zé!`) : console.log(`Olá, ${nome}`)


// parte b)) 
const idade = Number(prompt(`Qual é a sua idade?`))

idade >= 18 ? console.log(`Pode tirar carteira de motorista!`) : console.log(`Ainda não pode tirar carteira de motorista!`)



