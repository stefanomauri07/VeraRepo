onload = () =>{
        
        document.body.classList.remove("container");

};
const audio = new Audio('img/Canzone.mp3');
audio.loop=true;
document.addEventListener('click', () => {
            audio.play()
                .then(() => {
                    console.log("Audio partito!");
                    const svg = document.getElementById("svgPeso");
                    const text = document.getElementById("textDamn");
                    text.textContent= "Alza il volume ;)";
                    setTimeout(() => 
                        {
                                text.textContent = "buon natale angia 💓💓"; 
                        
                                setTimeout(() => {
                                        svg.style.display = "none";
                                }, 10000); // 10 secondi dopo il cambio testo
                        }, 10000); // 10 secondi iniziali

                })
                .catch((error) => {
                    console.error("Errore nell'avvio dell'audio:", error);
                });
                
        }, { once: true });