import StarRating from './star-rating/index.js';

const $containers = [...document.querySelectorAll('.star-rating')];
const $currentRatings = document.querySelectorAll('.current-rating > span');

const $cssLink = [...document.querySelectorAll('link')]
const $cssLinkPosition = $cssLink[$cssLink.length - 1]
const link = document.createElement('link')
link.href = "star-rating/theme.css"
link.rel = "stylesheet"
$cssLinkPosition.insertAdjacentElement('afterend', link) 


$containers.forEach(($container, i) => {
  StarRating($container);

  $container.addEventListener('rating-change', e => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});
