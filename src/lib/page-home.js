const ArrayData = {
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image": "../assets/eventsImages/collectivities_party.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            "image": "../assets/eventsImages/korean_style.jpg",
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            "image": "../assets/eventsImages/event3.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            "image": "../assets/eventsImages/event4.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            "image": "../assets/eventsImages/comicon.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            "image": "../assets/eventsImages/halloween.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            "image": "../assets/eventsImages/metallica.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            "image": "../assets/eventsImages/electronic_fest.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            "image": "../assets/eventsImages/event14.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Campo de Fútbol",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            "image": "../assets/eventsImages/15k.jpg",
            "name": "15K NY",
            "date": "2021-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            "image": "../assets/eventsImages/book_fair.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            "image": "../assets/eventsImages/just_for_kitchen.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            "image": "../assets/eventsImages/Batman.png",
            "name": "Batman",
            "date": "2021-3-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            "image": "../assets/eventsImages/avengers.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
}


let allEvents = ArrayData.eventos;

let newArrayEvents = new Array();

// transformar array para agregar identificador
for (let i = 0; i < allEvents.length; i++) {

    const newObjet = {
        "id": i,
        "image": allEvents[i].image,
        "name": allEvents[i].name,
        "date": allEvents[i].date,
        "description": allEvents[i].description,
        "category": allEvents[i].category,
        "place": allEvents[i].place,
        "capacity": allEvents[i].capacity,
        "assistance": allEvents[i].assistance,
        "price": allEvents[i].price
    }
    newArrayEvents.push(newObjet)
}

function resetTemplateCardHome() {
    document.querySelector("#TemplateCardHome").innerHTML = ''
}

function newCard(evento) {
    let divForCard = document.createElement("div");
    divForCard.className = "col-lg-3 col-sm-6";

    divForCard.innerHTML = `<div class="card h-100" style="max-width: 400px;">
        <img src="${evento.image}" class="card-img-top" alt="...">
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
          <a href="./details.html" class="btn btn-primary w-100" onclick="detalleCard(${evento.id})" >View Details</a>
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
    for (let i = 0; i < newArrayEvents.length; i++) {
        if (newArrayEvents[i].id === parseInt(id)) {
            localStorage.clear();
            return localStorage.setItem(
                "detail_temp",
                JSON.stringify(newArrayEvents[i])
            );
        }
    }
}

newCard(newArrayEvents);
tarjetasHome(newArrayEvents);


// filtering data
let categoriasUnique = new Array();

function categoriasUnicas(newArrayEvents) {
    for (let i = 0; i < newArrayEvents.length; i++) {
        if (!categoriasUnique.includes(newArrayEvents[i].category)) {
            categoriasUnique.push(newArrayEvents[i].category);
        }
    }
}

categoriasUnicas(newArrayEvents)

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

templateCategoryCheckboxHome();

let templateCategory = new Array();

function getValueCheckbox() {


    let CheckedCategory = Array.from(document.querySelectorAll('.class_check:checked')).map(val => val.value) // obtener valor del input checked
    let arrayHome = newArrayEvents; // array de eventos inicial
    let filtrado = newArrayEvents.filter(c => CheckedCategory.includes(c.category)) // almacenar nuevo objeto filtrado 

    if (CheckedCategory.length > 0) {
        resetTemplateCardHome();
        tarjetasHome(filtrado);
    } else {
        resetTemplateCardHome();
        tarjetasHome(arrayHome);
    }
}


function searchCards() {
    // Obtener referencia al campo de búsqueda y al contenedor del carrusel
    const searchInput = document.querySelector('#search');
    const carouselContainer = document.querySelector('#carousel2-container');


    // Agregar un evento "input" al campo de búsqueda
    searchInput.addEventListener('input', function (event) {
        // Obtener el valor del campo de búsqueda
        const searchTerm = event.target.value.trim().toLowerCase();

        // Iterar sobre cada diapositiva del carrusel
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            // Obtener las tarjetas (cards) de la diapositiva actual
            const cards = item.querySelectorAll('.card');
            let filteredCards = [];

            // Iterar sobre cada tarjeta de la diapositiva actual
            cards.forEach(card => {
                const eventName = card.querySelector('.card-title').textContent.trim().toLowerCase();

                // Si la tarjeta coincide con el término de búsqueda, agregarla a la lista de tarjetas filtradas
                if (eventName.includes(searchTerm)) {
                    filteredCards.push(card);
                } else {
                    // Ocultar la card si no coincide con la búsqueda
                    card.style.display = 'none';
                }
            });

            // Mostrar solo las tarjetas filtradas
            filteredCards.forEach(card => card.style.display = 'block');
        });
    });

}

// Llamar a la función de búsqueda
searchCards();