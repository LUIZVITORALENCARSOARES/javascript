var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

/*
    switch (expressão) {
        case valor 1:
            [bloco]
            break
        case valor 2:
            [bloco]
            break
        case valor 3:
            [bloco]
            break
        default:
            [bloco]
            break
    }
*/