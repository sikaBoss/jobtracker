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

	if (!navigation || !menuButton) {
		return;
	}

	const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
	navigation.classList.toggle('is-open', !isExpanded);
	menuButton.setAttribute('aria-expanded', String(!isExpanded));
	menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
}

window.addEventListener('DOMContentLoaded', () => {
	const pageMap = {
		'index.html': 'home',
		'jobs.html': 'jobs',
		'matching.html': 'matching',
		'account.html': 'account',
		'Graduate.html': 'graduate',
		'Employer.html': 'employer'
	};

	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	showPage(pageMap[currentPage] || 'home');
});
