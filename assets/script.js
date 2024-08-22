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

// Récupération des éléments HTML flèche gauche et flèche droite :
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');

// Récupération des éléments HTML de la bannière :
const bannerImg = document.querySelector('#banner .banner-img');
const bannerText = document.querySelector('#banner p');
const conteneurBulletPoints = document.querySelector('.dots');

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

// Initialisation de l'index du slide courant :
let indexSlideEnCours = 0;

// Gestion evenement : Clic flêche gauche :
arrowLeft.addEventListener('click', () => {
    indexSlideEnCours --;
    // Bouclage carrousel première vers dernière image :
	if (indexSlideEnCours <0)
		indexSlideEnCours =3;
    màjSlide(indexSlideEnCours);
});

// Gestion evenement : Clic flêche droite :
arrowRight.addEventListener('click', () => {
    indexSlideEnCours ++;
    // Bouclage carrousel dernière vers première image :
	if (indexSlideEnCours >3)
		indexSlideEnCours =0;
	màjSlide(indexSlideEnCours);
});

// Fonction de gestion du carrousel :
function màjSlide(indexSlideEnCours) {
    bannerImg.src = `./assets/images/slideshow/${slides[indexSlideEnCours].image}`;
    bannerText.innerHTML = slides[indexSlideEnCours].tagLine;
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[indexSlideEnCours].classList.add('dot_selected');
}

// Changement aspect curseur au survol des flêches :
arrowLeft.style.cursor = 'pointer';
arrowRight.style.cursor = 'pointer';