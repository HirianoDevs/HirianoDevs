window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Pequeno delay para garantir que a animação seja vista
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        document.body.classList.add("loaded");
        
        // Remove do DOM após a transição para não pesar
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 1500); // 1.5 segundos de loading
});
