function arrayToCamelCase(array) {
    for (const elementos of array) {
        let [primeira, segunda] = elementos.split('_')
        let palabra = primeira + segunda.charAt(0).replace(segunda.charAt(0), segunda.charAt(0).toUpperCase()) + segunda.slice(1).toLowerCase();
        console.log(palabra);
    }

}

arrayToCamelCase(['first_name', 'last_NAME']);