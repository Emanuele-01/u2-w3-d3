fetch("https://striveschool-api.herokuapp.com/books")
.then(responseObj => responseObj.json())
.then((libri) => {
    let containar = document.querySelector('.containar');
    containar.innerHTML= ""
    let linea = document.createElement('div');
    linea.className = 'row';
    linea.classList.add('row-cols-4');
    linea.classList.add('d-flex');
    linea.classList.add('align-items-end');
    containar.appendChild(linea);

    console.log(libri);

        libri.forEach((libro) => {
        const col = document.createElement("div")
            col.className = "col"
            col.innerHTML = `<div class="card";>
            <img src="${libro.img}" class="img-fluid card-img-top" alt="libro">
            <div class="card-body">
            <h5 class="card-title">
            ${libro.title}</h5>
            <p class="card-text">
            ${libro.price}</p>
            <a href="#" class="btn btn-primary">Coppalo</a>
            <a href="#" class="btn btn-primary">Remove</a>
            </div>
        </div>`
        
        const removeBtn = col.querySelector(".btn")
        removeBtn.addEventListener("click", () =>{
        col.remove()
    })
            linea.appendChild(col);
    });
});

