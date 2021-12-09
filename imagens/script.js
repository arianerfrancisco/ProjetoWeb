var a = "olá";

console.log(a)

function find() {
    console.log("A função foi encontrada");
}

find()

var maiorValor = (function(a,b) {
    var result;
    a>b ? result = " A é maior " : result = " B é maior"
    return result;
}) (25,40);

console.log(maiorValor)