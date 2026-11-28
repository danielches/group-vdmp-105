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

semesterTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const selectedSemester = tab.getAttribute('data-semester');

    semesterTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });

    semesterPanels.forEach((panel) => {
      const isSelected = panel.getAttribute('data-panel') === selectedSemester;
      panel.classList.toggle('is-active', isSelected);
      panel.hidden = !isSelected;
    });
  });

  tab.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    let nextIndex;
    switch (event.key) {
      case 'ArrowLeft': nextIndex = (index - 1 + semesterTabs.length) % semesterTabs.length; break;
      case 'ArrowRight': nextIndex = (index + 1) % semesterTabs.length; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = semesterTabs.length - 1; break;
      default: return;
    }

    event.preventDefault();
    semesterTabs[nextIndex].click();
    semesterTabs[nextIndex].focus();
  });
});
