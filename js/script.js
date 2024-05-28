const pantalla = document.querySelector(".pantalla");
const bonotes = document.querySelectorAll(".btn");

bonotes.forEach(boton => {
    boton.addEventListener("click", () =>{
        
        const botonapretado = boton.textContent;

        if(boton.id === "C"){
            pantalla.textContent = "0";
            return;
        }
        if(pantalla.textContent === "0"){
            pantalla.textContent = botonapretado
        }else{
            pantalla.textContent += botonapretado;

        }

        
    })
})