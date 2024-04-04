function enmascarar(string) {
    let novafrase = string.substring(string.length - 4)
    return novafrase.padStart(string.length, "*");
}

console.log(enmascarar('1234123412347777'));