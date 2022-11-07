function createGame(team1, hour, team2) {
    return `
    <li>
        <img src="./assets/countries-icons/icon-${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/countries-icons/icon-${team2}.svg" alt="Bandeira do ${team1}">
    </li>`
};


let delay = -0.3
function createCard(date, day, game) {
    delay += 0.3
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${game}
        </ul>
    </div>`;
};

document.querySelector('#cards').innerHTML = 
    createCard(
        '24/11', 
        'quinta',
        createGame('brazil', '16:00', 'serbia')
    ) +
    createCard(
        '28/11', 
        'segunda',
        createGame('brazil', '13:00', 'switzerland') + 
        createGame('portugal', '16:00', 'uruguay')
    ) +
    createCard(
        '02/12', 
        'sexta',
        createGame('brazil', '16:00', 'camaroon')
    )
