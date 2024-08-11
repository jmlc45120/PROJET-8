const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments flèche gauche et flèche droite :
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');

// Ajout des event listeners aux clics sur flèches
arrowLeft.addEventListener('click', () => {
    console.log('CLIC Flèche gauche');
});

arrowRight.addEventListener('click', () => {
    console.log('CLIC Flèche droite');
});
// Récupération du conteneur des points
const conteneurBulletPoints = document.querySelector('.dots');
