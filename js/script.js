const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.



// - prendo gli elementi html con ID
const upEl = document.getElementById("up");
const downEl = document.getElementById("down");
const activeImgEl = document.getElementById("active-img");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

let index = 0;

downEl.addEventListener('click', function(){
    
    // index++;

    index = updateIndex(index, 'giu');
    
    showSlide(images[index]);
    
    
});

upEl.addEventListener('click', function(){
    
    // index--;

    index = updateIndex(index, 'su');
    
    showSlide(images[index]);
    
    
});





// FUNZIONI
showSlide(images[index]);

function showSlide(carousel) {
    
    // console.log(carousel);
    
    activeImgEl.src = carousel.image;
    
    titleEl.innerText = carousel.title;
    
    descriptionEl.innerText = carousel.text;
    
};  

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
function updateIndex(attuale, direzione) {

    if(direzione == 'su') {

        if(attuale <= 0) {
            return images.length - 1;
        } else {
            return attuale - 1;
        }

    } else {
        
        if(attuale >= images.length-1) {
            return 0;
        } else {
            return attuale + 1;
        }
    }
};