let ligazon = document.querySelectorAll('a');
console.log(ligazon.length);
console.log(ligazon[ligazon.length - 2].href);
let ligazonProba = document.querySelectorAll('[href="http://proba"]');
console.log(ligazonProba.length);
console.log(document.querySelectorAll('p')[2].querySelectorAll('a').length);
for (const a of ligazonProba) {
    a.style.color = 'orange';
}
