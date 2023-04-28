let urlApi = 'https://pro-talento.up.railway.app/api/amazing';

let ApiGlobal;

async function getApi() {
    try {
        let res = await fetch(urlApi)
        res = await res.json();
        console.log(res);
        categoriasUnicas(res.response)
        return res;

    } catch (error) {
        console.error(error);
    }
}
getApi();


// filtering data
let categoriasUnique = new Array();

function categoriasUnicas(eventos) {

    const rowCategoryStats = document.querySelector('#upcomingTemplate');

    for (let i = 0; i < eventos.length; i++) {
        if (!categoriasUnique.includes(eventos[i].category)) {
            categoriasUnique.push(eventos[i]);
        }
    }

    for (let i = 0; i < categoriasUnique.length; i++) {
        const rows = rowCategoryStats.innerHTML = `
        <td>${categoriasUnique[i].category} </td>
        <td>${categoriasUnique[i].price} </td>
        <td>${categoriasUnique[i].capacity} </td>
   `;
        console.log(rows);
       return rowCategoryStats.appendChild(rows)

    }

}

