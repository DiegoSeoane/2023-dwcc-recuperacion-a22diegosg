console.log('Apartado A');
let library = [
    {
        title: 'El Señor De Los Anillos',
        author: 'Tolkien',
        estado: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title: 'La poética',
        author: 'Aristoteles',
        estado: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title:'La tormenta de nieve',
        author:'Tolstoi',
        estado: {
            own: true,
            reading: true,
            read: false
        }
    }
];
console.log(library);

console.log('Apartado B');

for (const libro of library) {
    libro.estado.read = true;
}
console.log(library);

console.log('Apartado C');

let {title:firstBook} = library[0];

console.log(firstBook);

console.log('Apartado D');

let libreria = [];
for (const libro of library) {
    JSON.stringify(libro.estado);
    let book = JSON.stringify(libro);
    libreria.push(book);
}

console.log(libreria.join(' '));