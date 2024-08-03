let userName = getFirstName("Luis Henrique de Rissi de Angelis")

console.log("Seja bem vindo "+userName)

function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}