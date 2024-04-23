function ordenarArray(array, propiedade){
        
    return array.sort((a,b)=>a[propiedade] - b[propiedade]);
}
console.log(ordenarArray([{a:1,b:2},{a:5,b:4}], 'b'));
console.log(ordenarArray([{a:2,b:10},{a:5,b:4}], 'b'));
console.log(ordenarArray([{a:1,b:7},{a:2,b:1}], 'b'));