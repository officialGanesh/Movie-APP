console.log("Movies 🔥");

let searchBox = document.querySelector("#searchBox");
let movieName = document.getElementById('movieName');

searchBox.addEventListener('click',()=>{

    if(movieName.value===''){

        function showAlert(){
            
            let cont = document.querySelector('.container');
            let title = document.getElementById('title');

            let element = document.createElement('div');
            element.id = 'showAlert'
            element.classList = 'alert alert-info';
            element.setAttribute('role','alert')
            element.innerHTML = '<h4>Find Movie</h4>';

            cont.insertBefore(element,title);
        };
        showAlert();

        setTimeout(() => {
            document.querySelector('#showAlert').remove()
        }, 2000);
        
    }else{

        let apikey = 'Your api key';
        url = `http://www.omdbapi.com/?apikey=${apikey}&s=${movieName.value.toLowerCase()}`;
    
        fetchData(url);
        movieName.value = ''
    };
    
});


async function fetchData(url){

    let movieBox = document.querySelector('#box');

   let movieData = await fetch(url).then(res=>{return res.json()}).then(data=>{return data.Search}).catch(error=>{console.log(error)});
    
    movieData.forEach((e)=>{

        let div = document.createElement('div');
        div.classList ='card';
        div.style.cssText = `width:18rem;margin: 8px; border: 1.5px solid black;`
        div.innerHTML = `<img src="${e.Poster}" class="card-img-top" alt="Movie Image" style="margin-top:8px;">
        <div class="card-body">
        <h4 class="card-title">${e.Title}</h4>
        <hr>
        <a href="${e.imdbID}" style="padding: 8px;font-size: 17px;" class="btn alert-primary">Check Movie</a>
        </div>`
        
        movieBox.append(div);       
        
        
    });



};