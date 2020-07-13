var rand1 = Math.floor(Math.random() * 6 + 1)
var rand2 = Math.floor(Math.random() * 6 + 1)
var randimg1 = "images/dice"+rand1 + ".png"
var randimg2 = "images/dice"+rand2 + ".png"



var img1 = document.querySelector('.img1')
var img2 = document.querySelector('.img2')

var title = document.querySelector('h1')
if (rand1 > rand2) {
    title.innerHTML = 
    '&#x1F6A9;Jogador 1 ganhou!'
} else if (rand1 < rand2) {
    title.innerHTML = 'Jogador 2 ganhou!&#x1F6A9;'
} else {
    title.innerHTML = 'Empate'
}

img1.setAttribute('src',randimg1)

img2.setAttribute('src',randimg2)