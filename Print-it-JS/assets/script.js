const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments flèche gauche et flèche droite :
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');

// Récupération des éléments de la bannière
const bannerImg = document.querySelector('#banner .banner-img');
const bannerText = document.querySelector('#banner p');
const conteneurBulletPoints = document.querySelector('.dots');

// Initialisation de l'index du slide courant
let index = 0;

// Fonction pour affichage des bullet points
function affichBulletPoints() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        conteneurBulletPoints.appendChild(dot);
    });
}
affichBulletPoints();

// Fonction pour rendre le slide dynamique:

function màjSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
}
// Gestion evenement : Clic flêche gauche :
arrowLeft.addEventListener('click', () => {
    index --;
	if (index <0)
		index =0;
    màjSlide(index);
});
// Gestion evenement : Clic flêche droite :
arrowRight.addEventListener('click', () => {
    index ++;
	if (index >slides.length-1)
		index =slides.length-1;
	màjSlide(index);
});