const reviewCount = localStorage.getItem('reviewCount');
const reivewCountSpan = document.querySelector('#reviewCount');

reivewCountSpan.textContent = reviewCount;