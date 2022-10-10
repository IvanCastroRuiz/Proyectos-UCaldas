console.log("conectado");


document.addEventListener("pointerenter", () => {

    const contenedor_bombillo = document.querySelector(".contenedor");


    const on = document.querySelector(".on");

    on.addEventListener("click", () => {
        const main = document.querySelector("main");
        main.classList.replace("desactivado", "activo");
        const titulo = document.querySelector(".titulo");
        titulo.textContent = "Encendido";
        contenedor_bombillo.innerHTML = `
                                            <div class="contenedor d-flex gap-4 flex-column shadow p-3 bg-body rounded">

                                                <div class="contenedor-img">
                                                    <img src="./img/encendido.png" alt="bombillo encendido">
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button class="off btn btn-warning">Off</button>
                                                </div>
                                            </div>
        
                                        `;

        const off = document.querySelector('.off')

        off.addEventListener('click', () => {
            main.classList.replace('active', 'desactivado')
            const titulo = document.querySelector('.titulo');
            titulo.textContent = 'Apagado';
            contenedor_bombillo.innerHTML = `
                                                <div class="contenedor d-flex gap-4 flex-column">
                                                    <div class="contenedor-img">
                                                        <img src="./img/apagado.png" alt="">
                                                    </div>
                                                    <div class=" d-flex justify-content-center">
                                                        <button class="on btn btn-warning">On</button>
                                                    </div>
                                                </div>
                                            `
        });
    });
});