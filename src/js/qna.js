function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    const results = JSON.stringify(value, null, 2);
    
    window.open("https://api.whatsapp.com/send/?phone=%2B6287834902806&text=" + JSON.stringify(value))
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

function openclose() {
    var fcard = document.getElementById('open');
    var scard = document.getElementById('contact-form');
    if (fcard.style.display === 'none'){
        fcard.style.display = 'block';
        scard.style.display = 'none';
    }else{
        fcard.style.display = 'none';
        scard.style.display = 'block';
    }
}