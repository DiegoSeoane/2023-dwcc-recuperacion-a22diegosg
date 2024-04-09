function areaCir(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area.toFixed(2);
}
console.log(areaCir(2));