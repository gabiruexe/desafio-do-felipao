var nomeDoPersonagem = 'Gabriel';
var expDoPersonagem = 20560

if (expDoPersonagem < 1000) {
    var nivel = 'Ferro';
} else if (1001 <= expDoPersonagem && expDoPersonagem <= 2000) {
    var nivel = 'Bronze';
} else if (2001 <= expDoPersonagem && expDoPersonagem <= 5000) {
    var nivel = 'Prata';
} else if (6001 <= expDoPersonagem && expDoPersonagem <= 7000) {
    var nivel = 'Ouro';
} else if (7001 <= expDoPersonagem && expDoPersonagem <= 8000) {
    var nivel = 'Platina';
} else if (8001 <= expDoPersonagem && expDoPersonagem <= 9000) {
    var nivel = 'Ascendente';
} else if (9001 <= expDoPersonagem && expDoPersonagem <= 10000) {
    var nivel = 'Imortal';
} else {
    var nivel = 'Radiante';
}

console.log(`O herói de nome ${nomeDoPersonagem} está no nível de ${nivel}`);