const input = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const removeBtn = document.querySelector('#removeBtn');
const gifList = document.querySelector('#gifList');

async function searchGifs(searchTerm){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const randomGif = randomNumber(res.data.data.length)
    const gifURL = res.data.data[randomGif].images.original.url
    appendGif(gifURL)
}

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    const searchTerm = input.ariaValueMax;
    searchGifs(searchTerm)
    input.value = '';
})

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function appendGif(url){
    const newGif = document.createElement('img');
    newGif.src = url;
    gifList.append(newGif)
}

removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    gifList.innerHTML = '';
})