document.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    createHome(false, false);

});

function createHome(adm, firstLogin) {

    if (adm) {
        showAdmHome();
    } else if (firstLogin) {
        showFirstLogin();
    } else {
        showUserHome();
    }

}

function showAdmHome() {
    const body = document.querySelector('body');

    resetBody(body);

    body.innerHTML = `
        ${createNavBar(true)}
        <div class="container-title">
            <h1>Bem vindo(a)!</h1>
        </div>
        <div class="container-city">
            <h2>Picada Café</h2>
            <form action="submit" method="POST" class="form-first">
                <button id="save">Itinerário Coletas</button>
                <button id="save">Lixeiras Públicas</button>
                <button id="save">Informações Gerais</button>
                <button id="save">Avisos</button>
            </form>
        </div>
    `;
}

function showFirstLogin() {

    const body = document.querySelector('body');

    resetBody(body);

    body.innerHTML = `
        ${createNavBar(false)}
        <div class="container-title">
            <h1>Bem vindo(a)!</h1>
        </div>
        <div class="container-first">
            <h2>Vamos começar efetuando algumas configurações</h2>
            <form action="submit" method="POST" class="form-first">
                <div class="container-form container-form-first">
                    <label for="address">Endereço</label>
                    <input type="text" name="address" id="address" placeholder="Endereço">
                </div>
                <div class="container-form container-form-first">
                    <label for="number">Número</label>
                    <input type="number" name="number" id="number" placeholder="Número">
                </div>
                <div class="container-form container-form-first">
                    <label for="district">Bairro</label>
                    <input type="text" name="district" id="district" placeholder="Bairro">
                </div>
                <div class="container-form container-form-first">
                    <label for="city">Cidade</label>
                    <input type="text" name="city" id="city" placeholder="Cidade">
                </div>
                <div class="container-form checkbox">
                    <input type="checkbox" name="notifications" id="checkbox" checked>
                    <label for="notifications">Receber Notificações</label>
                </div>
                <button id="save">Salvar</button>
            </form>
        </div>
    `;

}

function showUserHome() {

    const body = document.querySelector('body');

    resetBody(body);

    body.innerHTML = `
        ${createNavBar(false)}
        <div class="container-title">
            <h1>Bem vindo(a)!</h1>
        </div>
        <div class="container-info">
            <div class="container-coleta">
                <h2>Próximas Coletas de Lixo </h2>
                <ul>
                    <li>27/02/2025</li>
                    <li>13/03/2025</li>
                    <li>27/03/2025</li>
                </ul>
            </div>
            <div class="container-trash-can">
                <h2>Lixeira mais Próxima</h2>
                <p>A lixeira mais próxima fica no endereço: Rua Aloisio Rohr, 149, Quatro Cantos, Picada Café.</p>
                <div id="map"></div>
            </div>
        </div>
    `;

}

function createNavBar(adm) {

    const img = `<div class="container-nav-img" title="Informações Gerais">
                    <img src="./img/paper.png">
                </div>`;

    return `
        <nav>
            <div class="container-nav">
                <div class="container-nav-img" title="Perfil">
                    <img src="./img/conta.png">
                </div>
                ${adm ? '' : img}
            </div>
        </nav>
    `;

}

function resetBody(body) {
    body.style.justifyContent = 'flex-start';
    body.style.alignItems = 'flex-start';
    body.innerHTML = ``;
}