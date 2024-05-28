const pantalla = document.querySelector(".pantalla");
const bonotes = document.querySelectorAll(".btn");

bonotes.forEach(boton => {
    boton.addEventListener("click", () =>{
        
        const botonapretado = boton.textContent;

        if(boton.id === "C"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return;
        }
        if (boton.id=== "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }
            
            return;
        }

        if(pantalla.textContent === "0"){
            pantalla.textContent = botonapretado
        }else{
            pantalla.textContent += botonapretado;

        }

        
    })
})