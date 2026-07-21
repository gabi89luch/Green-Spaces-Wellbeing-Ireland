/* ============================================================
   Scroll-to-Top Button
   ------------------------------------------------------------
   Shared script for all 6 pages.
   Shows the button when the user scrolls past 300px and
   smoothly scrolls back to the top when clicked.
   Works on both desktop and mobile (responsive CSS handles sizing).
   ============================================================ */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const scrollTopBtn = document.getElementById('scrollTop');

        if (!scrollTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

})();
