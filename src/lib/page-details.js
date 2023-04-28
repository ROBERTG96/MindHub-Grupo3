let urlApi = 'https://pro-talento.up.railway.app/api/amazing';

async function getApi() {

    try {
        let res = await fetch(urlApi)
        res = await res.json();
        return res;
    } catch (error) {
        console.error(error);
    }
}

const Card = document.getElementById("details_card");
const CardImg = document.getElementById("image");
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

async function CargarDetails() {

    let response = await getApi();

    let responseDetail = response.response.filter(eventos => {
        return eventos.id === id
    })

    let detail = responseDetail[0];


    if (detail.assistance === undefined) {
        CardImg.innerHTML = `
    <div class='card_details' >
    <img src="${detail.image}" class='card_details' styles="height:400px" alt="${detail.name}"></img>
    </div>
    `
        Card.innerHTML = `
    <div class="container-flex mb-5"> 
     <h3 class="card-title my-2">Category: ${detail.category}</h3>
         <h2 class="card-title">${detail.name}</h2>  
         <p class="card-text"> ${detail.description}</p>
         <div class="mt-3 h-80">
         <ul class="list-group list-group-flush">
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Date"><i class="bi bi-calendar-event-fill icon_detail"></i> ${detail.date}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Category"><i class="bi bi-bookmark-star-fill icon_detail"></i> ${detail.category}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Capacity"><i class="bi bi-people-fill icon_detail"></i> ${detail.capacity}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Estimate"><i class="bi bi-ticket-detailed icon_detail"></i> ${detail.estimate}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Place"><i class="bi bi-geo-alt-fill icon_detail"></i> ${detail.place}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Price"><strong><i class="bi bi-currency-exchange icon_detail"></i> ${detail.price}</strong></p>
         </ul>
         <div class="card-body">
         <a class="btn background-color text-light w-100"  data-toggle="tooltip" data-placement="bottom" title="Contact For - ${detail.name}" href="./contact.html" target='_blank'"> <i class="bi bi-send-check-fill icon_view"></i></a>
         </div>
         </div>
     `
    } else {

        CardImg.innerHTML = `
        <div class='card_details' >
        <img src="${detail.image}" class='card_details' styles="height:400px" alt="${detail.name}"></img>
        </div>
        `

        Card.innerHTML = `
        <div class="container-flex mb-5"> 
         <h3 class="card-title my-2">Category: ${detail.category}</h3>
             <h2 class="card-title">${detail.name}</h2>  
             <p class="card-text"> ${detail.description}</p>
             <div class="mt-3 h-80">
             <ul class="list-group list-group-flush">
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Date"><i class="bi bi-calendar-event-fill icon_detail"></i> ${detail.date}</p>
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Category"><i class="bi bi-bookmark-star-fill icon_detail"></i> ${detail.category}</p>
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Capacity"><i class="bi bi-people-fill icon_detail"></i> ${detail.capacity}</p>
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Assistance"><i class="bi bi-ticket-detailed icon_detail"></i> ${detail.assistance}</p>
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Place"><i class="bi bi-geo-alt-fill icon_detail"></i> ${detail.place}</p>
             <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Price"><strong><i class="bi bi-currency-exchange icon_detail"></i> ${detail.price}</strong></p>
             </ul>
             <div class="card-body">
             <a class="btn background-color text-light w-100"  data-toggle="tooltip" data-placement="bottom" title="Contact For - ${detail.name}" href="./contact.html" target='_blank'"> <i class="bi bi-send-check-fill icon_view"></i></a>
             </div>
             </div>
         `
    }
}

CargarDetails(); 