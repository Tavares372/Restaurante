const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchMessage = document.getElementById('search-message');
const closeSearch = document.getElementById('close-search');
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');
const pedidoForm = document.getElementById('pedido-form');
 
// abre e fecha a barra de pesquisa
searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
});
 
closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});
 
// abre e fecha o menu no celular
menuBars.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
 
// botão "adicionar" dos pratos
document.querySelectorAll('.add-to-cart').forEach((botao) => {
    botao.addEventListener('click', () => {
        alert('Prato adicionado ao carrinho!');
    });
});
 
// ícone de usuário (login ainda não existe no site)
const userBtn = document.getElementById('user-btn');
 
userBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Área do cliente em breve! Por enquanto, faça seu pedido pelo formulário.');
});
 
// envio do formulário de pedido
pedidoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Pedido enviado com sucesso! Em breve entraremos em contato.');
    pedidoForm.reset();
});
 
// pesquisa: procura o prato pelo nome e rola até ele
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    const termo = searchBox.value.trim().toLowerCase();
    if (termo === '') return;
 
    let encontrou = false;
 
    document.querySelectorAll('.pratos .box').forEach((box) => {
        const nomePrato = box.querySelector('h3').textContent.toLowerCase();
        if (nomePrato.includes(termo)) {
            encontrou = true;
            searchForm.classList.remove('active');
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
 
    if (encontrou) {
        searchBox.value = '';
    } else {
        searchMessage.textContent = 'Sentimos muito, não temos este prato ainda em nosso menu.';
        searchMessage.classList.add('active');
        setTimeout(() => searchMessage.classList.remove('active'), 3000);
    }
});
 