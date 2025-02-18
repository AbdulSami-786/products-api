let div = document.querySelector(".container")
let body = document.querySelector(".body")
let load = document.querySelector(".load")
fetch("https://fakestoreapi.com/products")
.then((res)=>{
return res.json()
})
.then((re)=>{
console.log(re);
re.map((ite)=>{
console.log(ite);
div.innerHTML += `    <div class="item">
            <div class="img">

                <img src="${ite.image}" alt="">
            </div>
        <div class="text">
            <h1>${ite.title.slice(0 , 15)}...</h1>
            <h2>Price : ${ite.price}Rs</h2>
            <h3>${ite.description.slice(0 , 35)}...</h3>
        </div>
        </div>`

})
})
.catch((err)=>{
    return err
})
.catch((er)=>{
alert("Plz connect net")
})
.finally(()=>{
load.style.display="none"
body.style.display="block"
})