let generador = document.getElementById("generador")

for (let i = 0; i < 12; i++) {
    let tarjeta = `<div class="card " style="width: 20rem; background-color: #424242;">
<img class="card-img-top"
    src="/assets/Ropa/${i}.jpg"
    rel="nofollow" alt="Card image cap">
<div class="card-body">
    <p class="card-text" style="color: white;">¿Le interesa?</p>
        <button class="btn btn-primary btn-warning">Comprar</button>
</div>` 

generador.innerHTML += tarjeta
}


