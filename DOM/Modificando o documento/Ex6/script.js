let arbore = {
    "Fish": {
    "trout": {},
    "salmon": {}
    },
    "Tree": {
    "Huge": {
    "sequoia": {},
    "oak": {}
    },
    "Flowering": {
    "apple tree": {},
    "magnolia": {}
    }
    }
    };


    let body = document.querySelector('body');
    function createTree(data){
        body.append(createTreeInside(data));
    }
function createTreeInside(data){
    if (!Object.keys(data).length) return;
    let ul = document.createElement('ul');
    
    for (const obxecto in data) {
        let li = document.createElement('li');
        li.innerHTML = obxecto;
        let ulInsider = createTreeInside(data[obxecto]);
        if (ulInsider) {
            li.append(ulInsider);            
        }
        ul.append(li);        
    }
    return ul;
}
createTree(arbore);