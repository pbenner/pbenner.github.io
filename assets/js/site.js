(() => {
  const openNavButton = document.getElementById('open-nav');
  if (!openNavButton) return;

  const setExpanded = (expanded) => {
    openNavButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    document.body.classList.toggle('nav-open', expanded);
  };

  openNavButton.addEventListener('click', () => {
    const expanded = openNavButton.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('nav-open')) return;
    const nav = openNavButton.closest('nav');
    if (!nav) return;
    if (!nav.contains(event.target)) setExpanded(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setExpanded(false);
  });
})();

