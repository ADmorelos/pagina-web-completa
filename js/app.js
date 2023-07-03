const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu-navegacion");


//console.log(menu)
//econsole.log(hamburguesa)

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})


