function showPage(pageName) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((button) => {
        const buttonName = button.textContent.trim().toLowerCase();
        button.classList.toggle('active', buttonName.includes(pageName.toLowerCase()));
    });
}

function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    const menuButton = document.querySelector('.menu-btn');
    if (!navigation || !menuButton) return;
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}

function closeMenu() {
    const navigation = document.querySelector('.navigation');
    const menuButton = document.querySelector('.menu-btn');
    if (!navigation || !menuButton) return;
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
}

window.addEventListener('DOMContentLoaded', () => {
    const pageMap = {
        'index.html': 'home',
        'jobs.html': 'jobs',
        'matching.html': 'matching',
        'account.html': 'account',
        'Graduate.html': 'graduate',
        'Employer.html': 'employer',
        'login.html': 'account'
    };
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    showPage(pageMap[currentPage] || 'home');

    document.querySelectorAll('.navigation a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.querySelectorAll('[data-password-toggle]').forEach((button) => {
        button.addEventListener('click', () => {
            const input = document.getElementById(button.dataset.passwordToggle);
            if (!input) return;
            const visible = input.type === 'text';
            input.type = visible ? 'password' : 'text';
            button.setAttribute('aria-pressed', String(!visible));
            button.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
        });
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
});
