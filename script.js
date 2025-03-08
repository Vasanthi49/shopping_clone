let search = document.querySelector('.searchbar');
let favorite = document.querySelector('.favorite');
let checkout = document.querySelector('.checkout');
let login = document.querySelector(".login");
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
}

document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
}

document.querySelector('#checkout').onclick = () => {
    checkout.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
}

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');  
    search.classList.remove('active'); 
    favorite.classList.remove('active');
    checkout.classList.remove('active');

}