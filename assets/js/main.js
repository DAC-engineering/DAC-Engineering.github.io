document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Solutions Dropdown Mobile
    const solutionsDropdownBtn = document.getElementById('solutions-dropdown-btn');
    const solutionsDropdown = document.getElementById('solutions-dropdown');
    
    if (solutionsDropdownBtn && solutionsDropdown) {
        solutionsDropdownBtn.addEventListener('click', () => {
            solutionsDropdown.classList.toggle('hidden');
            const icon = solutionsDropdownBtn.querySelector('.lucide-chevron-down');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    }

    // Set active nav link based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '/') {
            link.classList.add('active');
        } else if (currentPath === '/' && href === 'index.html') {
             link.classList.add('active');
        } else if (currentPath === '/DAC-Engineering.github.io/' && href === 'index.html') {
             link.classList.add('active');
        }
    });
});
