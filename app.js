const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2")
const searchInput = document.querySelector("#searchinput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search");
const clearButton = document.querySelector("#clear");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners() {
    form2.addEventListener("submit", search);
    clearButton.addEventListener("click",clear);
}

function clear(e){
    searchInput.value= " ";
    // Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    imageListWrapper.innerHTML=""
}

function search(e) {

    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : " Client-ID 3xOznhqWXs-Y6QpXAPuwNloOJuK4Nb8sA8cnVR02E50"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
            Array.from(data.results).forEach((img)=>{
                // console.log(img.urls.small)
                addImgToUI(img.urls.small)

            })
    })
    .catch((err)=>console.log(err))
    
    e.preventDefault()
}

function addImgToUI(url){
    const div = document.createElement("div");
    div.className= "card";

    const img = document.createElement("img");
    img.setAttribute("src",url)
    img.className="image"
    img.width="400"
    img.height="400"
    
    div.appendChild(img)
    imageListWrapper.appendChild(div)
}