let urlApi = 'https://pro-talento.up.railway.app/api/amazing';

let Api = new Array();

async function getApi(){
    try {
        let res = await fetch(urlApi)
        res = await res.json();
        return res;

    } catch (error) {
        console.error(error);
    }
}

async function HomeApi() {

    try {

        let res = await fetch(urlApi)
        res = await res.json();

        tarjetasHome(res.response);
        categoriasUnicas(res.response)
        templateCategoryCheckboxHome();

    } catch (error) {
        console.error(error);
    }

}

HomeApi();

function resetTemplateCardHome() {
    document.querySelector("#TemplateCardHome").innerHTML = ''
}

function newCard(evento) {
    let divForCard = document.createElement("div");
    divForCard.className = "col-lg-3 col-sm-6";
    divForCard.innerHTML = `<div class="card h-100" style="max-width: 400px;">
        <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="bi bi-calendar-event-fill me-2"></i>${evento.date}</li>
          <li class="list-group-item"><i class="bi bi-bookmark-star-fill me-2"></i>${evento.category}</li>
          <li class="list-group-item"><i class="bi bi-people-fill me-2"></i>${evento.capacity}</li>
          <li class="list-group-item"><i class="bi bi-geo-alt-fill me-2"></i>${evento.place}</li>
          <li class="list-group-item"><i class="bi bi-currency-exchange me-2"></i>${evento.price}</li>
        </ul>
        <div class="card-footer">
          <a href="./details.html" class="btn btn-primary text-light w-100" onclick="detalleCard(${evento.id})" >View Details</a>
        </div>
      </div>
      `;

    return divForCard;


}

function tarjetasHome(eventos) {
    let divCarouselActive = document.createElement("div");
    divCarouselActive.className = "carousel-item active";
    divCarouselActive.innerHTML = `<div class="container">
            <div class="row" id="card_template"> 
            </div>
          </div>
          `;

    if (eventos.length < 4) {
        for (let i = 0; i < eventos.length; i++) {

            let card = newCard(eventos[i]);
            divCarouselActive.querySelector("#card_template").appendChild(card);
        }
        document.getElementById("TemplateCardHome").appendChild(divCarouselActive)
    } else {
        for (let i = 0; i < 4; i++) {
            let card = newCard(eventos[i]);
            divCarouselActive.querySelector("#card_template").appendChild(card);
        }
        document.getElementById("TemplateCardHome").appendChild(divCarouselActive)
    }

    for (let i = 4; i < eventos.length; i += 4) {
        let divCarouselGeneral = document.createElement('div');
        divCarouselGeneral.className = 'carousel-item';
        divCarouselGeneral.innerHTML = `<div class="container">
              <div class="row" id="card_template"> 
              </div>
            </div>
            `;

        for (let j = i; j < i + 4; j++) {

            if (eventos[j] != undefined) {
                let card = newCard(eventos[j]);
                divCarouselGeneral.querySelector('#card_template').appendChild(card);
            }
        }
        document.getElementById('TemplateCardHome').appendChild(divCarouselGeneral);
    }
}

const details_card = document.querySelector("details_card");

function detalleCard(id) {
    for (let i = 0; i < Api.length; i++) {
        if (Api[i].id === (id)) {
            localStorage.clear();
            return localStorage.setItem(
                "detail_temp",
                JSON.stringify(Api[i])
            );
        }
    }
}


// filtering data
let categoriasUnique = new Array();

function categoriasUnicas(Api) {
    for (let i = 0; i < Api.length; i++) {
        if (!categoriasUnique.includes(Api[i].category)) {
            categoriasUnique.push(Api[i].category);
        }
    }
}


function newCategory(categoryUnique) {

    const divCategory = document.createElement('div');
    divCategory.innerHTML = `
    <li class="nav-item" >
                            <input type="checkbox" id="${categoryUnique}" class="class_check"  onclick="getValueCheckbox()" value="${categoryUnique}">
                            <label for="${categoryUnique}">${categoryUnique}</label>
                        </li>`
    return divCategory;
}

function templateCategoryCheckboxHome() {

    const rowCategory = document.querySelector('#templateCategory');

    for (let i = 0; i < categoriasUnique.length; i++) {
        const templateCategoryCheckbox = newCategory(categoriasUnique[i])
        rowCategory.appendChild(templateCategoryCheckbox)
    }
}


function getValueCheckbox() {


    let CheckedCategory = Array.from(document.querySelectorAll('.class_check:checked')).map(val => val.value) // obtener valor del input checked
    let arrayHome = Api; // array de eventos inicial
    let filtrado = Api.filter(c => CheckedCategory.includes(c.category)) // almacenar nuevo objeto filtrado 

    if (CheckedCategory.length > 0) {
        resetTemplateCardHome();
        tarjetasHome(filtrado);
    } else {
        resetTemplateCardHome();
        tarjetasHome(arrayHome);
    }
}


async function searchCards() {
    // Obtener referencia al campo de búsqueda y al contenedor del carrusel
    const searchInput = document.querySelector('#search');

    let arrayFilter = new Array();
    let response = await getApi();
    arrayFilter.push(response.response);

    console.log(arrayFilter[0]);
    // Agregar un evento "input" al campo de búsqueda
    searchInput.addEventListener('input', function (event) {

        // Obtener el valor del campo de búsqueda
        const searchTerm = event.target.value.trim().toLowerCase();

       let nameFilter = arrayFilter[0].filter(evento => evento.name.includes(searchTerm))
        console.log('Filtrado:', nameFilter);




    })

}

// Llamar a la función de búsqueda
searchCards();