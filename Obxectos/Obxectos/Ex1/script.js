const television = {
    marca:'Samsung',
    categoria: 'televisores',
    unidades: 4,
    prezo: 354.99,
    importe() {
        return this.prezo * this.unidades;
    }
}

console.log(television.importe());