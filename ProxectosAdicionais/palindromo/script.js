function reverseString(string) {
    return string.split("").reverse().join("");
}

function isPalidrome(string) {
let stringSenEspazo = string.split(' ').join('').toLowerCase();
    if (stringSenEspazo === reverseString(stringSenEspazo)) {
        return true;
    }else{
        return false;
    }
}

console.log(isPalidrome('Dabale arroz a la zorra el abad'));