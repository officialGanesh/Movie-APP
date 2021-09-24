console.log("Movies 🔥");

let searchBox = document.querySelector("#searchBox");
let movieName = document.getElementById('movieName');

searchBox.addEventListener('click',()=>{

    if(movieName.value===''){
        alert("No movie name");
    }else{

        let apikey = 'you api key ';
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
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" style="padding: 8px;font-size: 17px;" class="btn alert-primary">Check Movie</a>
        </div>`
        
        movieBox.append(div);       
        
        
    });



};