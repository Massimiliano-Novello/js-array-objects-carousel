//MILESTONE 1
//Creazione arrey
const immagesArrey = [
    {
        image: '01.png',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.png',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.png',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.png',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.png',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(immagesArrey);

const containerItems = document.querySelector(".slide-items");

for (let i = 0; i < immagesArrey.length; i++) {
    const currentImages = immagesArrey[i];
    
    const sliderItem = `<div class="item">
                            <img src="img/${currentImages.image}" alt="" />
                            <div class="img-title">
                                <h3>${currentImages.title}</h3>
                                <p>
                                     ${currentImages.text}
                                </p>
                            </div>
                        </div>`;
    console.log(sliderItem);

    containerItems.innerHTML += sliderItem;
}

//MILESTONE2
//Stato di partenza
let itemArrey = document.getElementsByClassName("item");
const topBtn = document.querySelector(".arrow-top");
const bottomBtn = document.querySelector(".arrow-bottom");

//Dichiarare variabile 0 per aggiungere classe active all'elemento
let classActive = 0;
itemArrey[classActive].classList.add("active");

//MILESTONE3
//Generare i bottoni
topBtn.addEventListener("click", function(){
    clearInterval(autoplay);
    myCarousel()
    autoplay = setInterval(showPerv, 3000)
});

bottomBtn.addEventListener("click", function(){
    clearInterval(autoplay);
    myCarousel()
    autoplay = setInterval(showPerv, 3000)
})

let autoplay = setInterval(myCarousel, 3000); 
const sliderParent = document.querySelector(".slide");

function myCarousel () {
    itemArrey[classActive].classList.remove("active");
    
    if(classActive === itemArrey.length - 1) {
        classActive = 0;
    } else {
        classActive++;
    }
    
    itemArrey[classActive].classList.add("active");
    
}

function showNext () {
    itemArrey[classActive].classList.remove("active");
    
    if(classActive === 0) {
        classActive = itemArrey.length - 1;
    } else {
        classActive--;
    }
    
    itemArrey[classActive].classList.add("active");
}

sliderParent.addEventListener("mouseover", stopAutoplay);
sliderParent.addEventListener("mouseout", startAutoplay)



function stopAutoplay () {
    clearInterval(autoplay)
}

function startAutoplay () {
    autoplay = setInterval(myCarousel, 3000)
}
