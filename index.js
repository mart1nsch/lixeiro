document.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    createHome(false);

});

function createHome(adm) {

    if (adm) showAdmHome();
    else showUserHome();

}

function showAdmHome() {

}

function showUserHome() {

    const body = document.querySelector('body');

    body.style.justifyContent = 'flex-start';
    body.style.alignItems = 'flex-start';

    body.innerHTML = ``;

    body.innerHTML = `
        ${createNavBar()}
        <div class="container-title">
            <h1>Bem vindo(a)!</h1>
        </div>
        <div class="container-info">
            <div class="container-coleta">
                <h2>Próximas Coletas de Lixo: </h2>
                <ul>
                    <li>27/02/2025</li>
                    <li>13/03/2025</li>
                    <li>27/03/2025</li>
                </ul>
            </div>
        </div>
    `

}

function createNavBar() {

    return `
        <nav>
            <div class="container-nav-img">
                <img src="./img/conta.png">
            </div>
        </nav>
    `

}