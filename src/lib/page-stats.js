const StatsUpcoming = document.querySelector('.StatsEvents');
const StatsPast = document.querySelector('.StatsPast');
const StatsEventsUpcoming = document.querySelector('.StatsUpcoming');
const url = 'https://pro-talento.up.railway.app/api/amazing';
const urlPastEvents = 'https://pro-talento.up.railway.app/api/amazing?time=past';
const urlUpcomingEvents = 'https://pro-talento.up.railway.app/api/amazing?time=upcoming';

StatsDataTableUpcomingEvents(urlUpcomingEvents, StatsEventsUpcoming);
StatsDataTablePastEvents(urlPastEvents, StatsPast);

async function StatsDataTablePastEvents(urlPastEvents, template) {
    urlPastEvents = await fetch(urlPastEvents).then(response => response.json()).then(data => data.response);
    let categorys = [...new Set(urlPastEvents.map(event => event.category))]
    categorys.forEach((category) => {
        let eventsRows = urlPastEvents.filter(event => event.category === category);

        // REVENUES - INGRESOS
        let revenues = eventsRows.map(event => {
            return event.price * event.assistance
        });

        let total = revenues.reduce((acc, val) => {
            return acc + val;
        })

        // PERCENTAGES

        let asistencia = eventsRows.map(event => {
            return event.assistance;
        })

        let capacity = eventsRows.map(event => {
            return event.capacity;
        })

        let acumularasistencia = asistencia.reduce((acc, val) => {
            return acc + val;
        })

        let acumularcapacity = capacity.reduce((acc, val) => {
            return acc + val;
        })

        let percentage = Number((acumularasistencia / acumularcapacity) * 100).toFixed(2);
        template.innerHTML += `<tr>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4">${category}</td>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4">${Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4"> ${percentage}%</td>
                                </tr>`;
    });
}
async function StatsDataTableUpcomingEvents(urlUpcomingEvents, template) {
    urlUpcomingEvents = await fetch(urlUpcomingEvents).then(response => response.json()).then(data => data.response);
    let categorys = [...new Set(urlUpcomingEvents.map(event => event.category))]

    categorys.forEach((category) => {
        let eventsRows = urlUpcomingEvents.filter(event => event.category === category);

        // REVENUES - INGRESOS
        let revenues = eventsRows.map(event => {
            return event.price * event.estimate
        });

        let total = revenues.reduce((acc, val) => {
            return acc + val;
        })

        // PERCENTAGES

        let estimate = eventsRows.map(event => {
            return event.estimate;
        })

        let capacity = eventsRows.map(event => {
            return event.capacity;
        })

        let acumularestimate = estimate.reduce((acc, val) => {
            return acc + val;
        })

        let acumularcapacity = capacity.reduce((acc, val) => {
            return acc + val;
        })

        let percentage = Number((acumularestimate / acumularcapacity) * 100).toFixed(2);


        template.innerHTML += `<tr>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4">${category}</td>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4">${Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                    <td class="col-1 col-sm-1 col-md-2 col-lg-4"> ${percentage}%</td>
                                </tr>`;
    });
}

fetch(urlPastEvents)
    .then(response => response.json())
    .then(data => {
        let maxAttendanceEvent = { name: null, percentage: 0 };
        let minAttendanceEvent = { name: null, percentage: 1 };


        data.response.forEach(event => {
            const percentage = event.assistance / event.capacity;
            if (percentage > maxAttendanceEvent.percentage) {
                maxAttendanceEvent = { name: event.name, percentage: percentage };
            }
            if (percentage < minAttendanceEvent.percentage) {
                minAttendanceEvent = { name: event.name, percentage: percentage };
            }

            /*    console.log(`Nombre del evento: ${event.name} - Capacidad: ${event.capacity}`); */
        });

        let maxAttendanceCell = document.getElementById('maxAttendanceCell');
        maxAttendanceCell.textContent = maxAttendanceEvent.name;
        let maxAttendancePercentageCell = document.getElementById('maxAttendancePercentageCell');
        maxAttendancePercentageCell.textContent = (maxAttendanceEvent.percentage * 100).toFixed(2) + '%';

        let minAttendanceCell = document.getElementById('minAttendanceCell');
        minAttendanceCell.textContent = minAttendanceEvent.name;
        let minAttendancePercentageCell = document.getElementById('minAttendancePercentageCell');
        minAttendancePercentageCell.textContent = (minAttendanceEvent.percentage * 100).toFixed(2) + '%';


    });



fetch(url)
    .then(response => response.json())
    .then(data => {
        let maxCapacityEvent = { name: null, capacity: 0 };

        data.response.forEach(event => {
            if (event.capacity > maxCapacityEvent.capacity) {
                maxCapacityEvent = { name: event.name, capacity: event.capacity };
            }

        });

        let maxCapacityCell = document.getElementById('maxLargeCapacityEventCell');
        maxCapacityCell.textContent = maxCapacityEvent.name;
        let capacityCell = document.getElementById('capacityEventCell');
        capacityCell.textContent = maxCapacityEvent.capacity;
    });