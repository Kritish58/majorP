const navMenu = document.getElementById('nav-menu');
//state
let toggleState = 0;
const toggleMenu = () => {
  switch (toggleState) {
    case 0:
      toggleState = 1;
      navMenu.style.left = '0px';
      break;
    case 1:
      toggleState = 0;
      navMenu.style.left = '-180px';
      break;
  }
};

//get document click event
document.addEventListener('click', (e) => {
  if (e.clientX > 180 && toggleState === 1) {
    toggleMenu();
  }
});
