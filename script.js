function showPage(pageName) {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((button) => {
        const buttonName = button.textContent.trim().toLowerCase();
        const isActive = buttonName.includes(pageName.toLowerCase());
        button.classList.toggle('active', isActive);
    });
}

function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    const menuButton = document.querySelector('.menu-btn');

    if (!navigation || !menuButton) return;

    const isOpen = navigation.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
    );
    menuButton.textContent = isOpen ? '×' : '☰';
}

window.addEventListener('DOMContentLoaded', () => {
    const pageMap = {
        'index.html': 'home',
        'jobs.html': 'jobs',
        'matching.html': 'matching',
        'account.html': 'account',
        'graduate.html': 'graduate',
        'Graduate.html': 'graduate',
        'employer.html': 'employer',
        'Employer.html': 'employer'
    };

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    showPage(pageMap[currentPage] || 'home');

    // Close the mobile menu after selecting a page.
    document.querySelectorAll('.navigation a').forEach((link) => {
        link.addEventListener('click', () => {
            const navigation = document.querySelector('.navigation');
            const menuButton = document.querySelector('.menu-btn');

            if (navigation && menuButton && navigation.classList.contains('is-open')) {
                navigation.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open navigation');
                menuButton.textContent = '☰';
            }
        });
    });

    // Password show/hide buttons.
    document.querySelectorAll('[data-password-toggle]').forEach((button) => {
        button.addEventListener('click', () => {
            const input = document.getElementById(button.dataset.passwordToggle);
            if (!input) return;

            const isVisible = input.type === 'text';
            input.type = isVisible ? 'password' : 'text';

            button.setAttribute('aria-pressed', String(!isVisible));
            button.setAttribute(
                'aria-label',
                isVisible ? 'Show password' : 'Hide password'
            );
        });
    });
});
