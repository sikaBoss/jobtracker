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
