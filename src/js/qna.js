function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(value, null, 2);
    console.log({value})
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

// function open() {
//     document.querySelector(".open").style.display = "none";
//     document.querySelector(".contact-form").style.visibility = "visible";
// }

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