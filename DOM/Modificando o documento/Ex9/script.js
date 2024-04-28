let liGroup = document.getElementsByTagName('li');

for (const li of liGroup) {
    if (li.getElementsByTagName('li').length != 0) {
        li.getElementsByTagName('li').length;
        console.log(li.firstChild.textContent += ' [' + li.getElementsByTagName('li').length + ']');
    }
}