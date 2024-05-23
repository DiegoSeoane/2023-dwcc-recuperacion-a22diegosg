let ul = document.querySelector('#result');
let filter = document.querySelector('#filter');


function userData() {
    let loading = document.querySelector('li');
    let json = fetch('https://randomuser.me/api?results=50').then((response)=>
        response.json()).then((res)=>{      
            loading.remove();                              
            for (const persona of res.results) {
                let li = document.createElement('li');
                let userInfo = document.createElement('div');
                let name = document.createElement('h4');
                let place = document.createElement('p');
                
                name.innerHTML = persona.name.first + ' ' + persona.name.last;
                place.innerHTML = persona.location.city + ', ' + persona.location.country;
                
                userInfo.classList.add('user-info');
                userInfo.append(name);
                userInfo.append(place);
                
                let img = document.createElement('img');                
                img.src = persona.picture.large;
                
                li.append(img);
                li.append(userInfo);

                ul.append(li);                
            }
        });
}

function filterData() {
    filter.addEventListener('input',()=>{
        let lista = document.querySelectorAll('li')
        let filText = filter.value;
        for (const li of lista) {
            if (!li.innerText.toLocaleLowerCase().includes(filText.toLowerCase())) {                
                li.classList.add('hide')
            }else{
                li.classList.remove('hide');
            }
        }
    })    
}

userData();
filterData();