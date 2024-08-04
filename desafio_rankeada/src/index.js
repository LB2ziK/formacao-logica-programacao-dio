let resultadoSaldo = calculaRankeada(100, 4)

console.log("O Herói tem de saldo de " + resultadoSaldo.split(" ")[0] + " e está no nível de " + resultadoSaldo.split(" ")[1])

function calculaRankeada(qtdVitorias, qtdDerrotas) {
    let saldoRanked = (qtdVitorias - qtdDerrotas)
    let nivel = ""

    if (qtdVitorias < 10 ) {
        nivel = "Ferro"
    } else if (qtdVitorias >= 11 && qtdVitorias <= 20) {
        nivel = "Bronze"
    } else if (qtdVitorias >= 21 && qtdVitorias <= 50) {
        nivel = "Prata"
    } else if (qtdVitorias >= 51 && qtdVitorias <= 80) {
        nivel = "Ouro"
    } else if (qtdVitorias >= 81 && qtdVitorias <= 90) {
        nivel = "Diamante"
    } else if (qtdVitorias >= 91 && qtdVitorias <= 100) {
        nivel = "Lendário"
    } else if (qtdVitorias >= 101) {
        nivel = "Imortal"
    }

    saldoRanked = saldoRanked + " " + nivel
    return saldoRanked
}