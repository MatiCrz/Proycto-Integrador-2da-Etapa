const cursos= [
    {
        id:1,
        name: "FRONTEND BASICO",
        img: "../Imagenes/html-logo.png",
        text: "HTML+CSS+JS"
    },
    {
        id:2,
        name: "BACKEND BASICO",
        img: "../Imagenes/Python-logo.png",
        text: "Python+MySQL+JS."
    },
    {
        id:3,
        name: "FRAMEWORK",
        img: "../Imagenes/Boostrap-logo.png",
        text: "Bootstrap"
    }
    ]
    
    let card = document.getElementById ("card-template");
    
    cursos.map((x) => {
        card.innerHTML += `
        <div class="col-lg-4 col-sm-4 mt-5">
              <div class="card card-color">
                <div class="card-body">
                  <div class="row">
                  <div class="col-6"> 
                  <h4 class="card-title">${x.name}</h4> 
                  <h6 class="card-text">${x.text}</h6> 
                </div>
                  <div class="col-6">
                  <a href="#" class="btn btn-secondary button-border">Comprar <br> Curso</a>
                  <button type="button" class="btn btn-outline-light button-border" style="margin-top: 0.3em;" disabled>$2500 50% OFF</button>  
                </div>
                </div>
              </div>
            </div>
          </div>
        `;

    } )

    let card2 = document.getElementById ("card-template2");
    
    cursos.map((x) => {
        card2.innerHTML += `
        <div class="col-lg-4 col-sm-4 mt-5">
              <div class="card card-color">
                <div class="card-body">
                  <div class="row">
                  <div class="col-6"> 
                  <h4 class="card-title">${x.name}</h4> 
                  <h6 class="card-text">${x.text}</h6> 
                </div>
                  <div class="col-6">
                  <a href="#" class="btn btn-secondary button-border">Comprar <br> Curso</a>
                  <button type="button" class="btn btn-outline-light button-border" style="margin-top: 0.3em;" disabled>$2500 50% OFF</button>  
                </div>
                </div>
              </div>
            </div>
          </div>
        `;

    } )