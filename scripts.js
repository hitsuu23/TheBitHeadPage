document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion summary');
    const searchInput = document.querySelector('nav input[type="search"]');
    const loadingSpinner = document.getElementById('loading-spinner');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const openItem = document.querySelector('.accordion details[open]');
            if (openItem && openItem !== this.parentElement) {
                openItem.removeAttribute('open');
            }
        });
    });

    searchInput.addEventListener('input', function (e) {
        console.log('Search query:', e.target.value);
        // Implement search functionality here
    });

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scroll-to-top").style.display = "block";
        } else {
            document.getElementById("scroll-to-top").style.display = "none";
        }
    }

    document.getElementById('scroll-to-top').addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Display loading spinner on page load
    window.addEventListener('load', function() {
        loadingSpinner.style.display = 'none';
    });
    loadingSpinner.style.display = 'block';
});
