function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menino-bebe-1.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'homem-jovem-1.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'homem-adulto-1.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homem-idoso-1.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menina-bebe-1.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'mulher-jovem-1.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'mulher-adulta-1.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'mulher-idosa-1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}