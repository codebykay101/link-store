// Menu toggle functionality 
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
// Product slider functionality
document.addEventListener('DOMContentLoaded', function () {
    // Product slider functionality
    const productContainer = document.getElementById('product-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalCards = document.querySelectorAll('.product-card').length;
    const cardWidth = document.querySelector('.product-card').offsetWidth + 25; // Include the gap

    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            productContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            productContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    
    // Cart product slider functionality
    const cartSliderContainer = document.querySelector('.cart-products-cards');
    const cartLeftButton = document.querySelector('.left-button');
    const cartRightButton = document.querySelector('.right-button');

    let isDownCart = false;
    let startXCart;
    let scrollLeftCart;

    cartSliderContainer.addEventListener('mousedown', (e) => {
        isDownCart = true;
        cartSliderContainer.classList.add('active');
        startXCart = e.pageX - cartSliderContainer.offsetLeft;
        scrollLeftCart = cartSliderContainer.scrollLeft;
    });

    cartSliderContainer.addEventListener('mouseleave', () => {
        isDownCart = false;
        cartSliderContainer.classList.remove('active');
    });

    cartSliderContainer.addEventListener('mouseup', () => {
        isDownCart = false;
        cartSliderContainer.classList.remove('active');
    });

    cartSliderContainer.addEventListener('mousemove', (e) => {
        if (!isDownCart) return;
        e.preventDefault();
        const x = e.pageX - cartSliderContainer.offsetLeft;
        const walk = (x - startXCart) * 4; // Fast scroll
        cartSliderContainer.scrollLeft = scrollLeftCart - walk;
    });

    cartLeftButton.addEventListener('click', () => {
        cartSliderContainer.scrollBy({
            left: -250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    cartRightButton.addEventListener('click', () => {
        cartSliderContainer.scrollBy({
            left: 250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    // Instagram slider functionality
    const sliderContainer = document.querySelector('.slider-container');
    const instaPrevButton = document.querySelector('.insta-prev');
    const instaNextButton = document.querySelector('.insta-next');

    let isDownSlider = false;
    let startXSlider;
    let scrollLeftSlider;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDownSlider = true;
        sliderContainer.classList.add('active');
        startXSlider = e.pageX - sliderContainer.offsetLeft;
        scrollLeftSlider = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isDownSlider = false;
        sliderContainer.classList.remove('active');
    });

    sliderContainer.addEventListener('mouseup', () => {
        isDownSlider = false;
        sliderContainer.classList.remove('active');
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDownSlider) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startXSlider) * 4; // Fast scroll
        sliderContainer.scrollLeft = scrollLeftSlider - walk;
    });

    instaPrevButton.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: -250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    instaNextButton.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: 250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    // Flash sales offer countdown functionality
    function countdownTimer(endDate) {
        let days, hours, minutes, seconds;
        const timer = document.getElementById('days').parentElement.parentElement;

        endDate = new Date(endDate).getTime();

        if (isNaN(endDate)) {
            return;
        }

        setInterval(calculate, 1000);

        function calculate() {
            const startDate = new Date();
            const startTime = startDate.getTime();

            let timeRemaining = parseInt((endDate - startTime) / 1000);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);

                seconds = parseInt(timeRemaining);

                document.getElementById("days").innerHTML = parseInt(days, 10);
                document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
                document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
                document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
            } else {
                return;
            }
        }
    }

    (function () {
        countdownTimer('06/30/2024 00:00:00 AM'); // Set your end date here
    }());

    // FAQ section toggle functionality
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const toggle = item.querySelector('.faq-toggle');

            answer.classList.toggle('show');
            toggle.textContent = toggle.textContent === '+' ? '-' : '+';

            document.querySelectorAll('.faq-answer').forEach(answerItem => {
                if (answerItem !== answer) {
                    answerItem.classList.remove('show');
                    answerItem.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
                }
            });
        });
    });
});
