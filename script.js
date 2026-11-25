const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const semesterTabs = document.querySelectorAll('.semester-tab');
const semesterPanels = document.querySelectorAll('.semester-panel');

semesterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedSemester = tab.getAttribute('data-semester');

    semesterTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
    });

    semesterPanels.forEach((panel) => {
      const isSelected = panel.getAttribute('data-panel') === selectedSemester;
      panel.classList.toggle('is-active', isSelected);
      panel.hidden = !isSelected;
    });
  });
});
