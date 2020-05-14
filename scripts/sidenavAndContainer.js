const sidenav = document.querySelector('.sidenav');
const dashMain = document.querySelector('.dash-main');

let toggleSidenavState = 0;

const toggleSidenav = () => {
  switch (toggleSidenavState) {
    case 0:
      sidenav.style.left = '0px';
      sidenav.style.boxShadow = '2px 0px 7px -3px rgba(0, 0, 0, 1)';
      toggleSidenavState = 1;

      break;
    case 1:
      sidenav.style.left = '-240px';
      sidenav.style.boxShadow = 'none';
      toggleSidenavState = 0;
      break;
  }
};
// toggle sidenav
document.addEventListener('click', (e) => {
  if (toggleSidenavState && e.clientX > 261) {
    toggleSidenav();
  }
});
// responsive container
window.addEventListener('resize', () => {
  const width = window.innerWidth - 261;
  document.querySelector('.dash-main').style.width = width + 'px';
});
// set width of container after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth - 261;
  document.querySelector('.dash-main').style.width = width + 'px';
  // empty carousel container
});
// carousel
// carouselContainer.innerHTML = '';
