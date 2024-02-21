const hamburgerBtn = document.querySelector('header .icon');
const headerLinks = document.querySelector('header>nav>ul');
const mobileMenu = document.querySelector('.mobile-nav');

const fixWidths = () => {
  const width = window.innerWidth;

  if (width <= 900) {
    hamburgerBtn.style.display = 'inline-block';
    headerLinks.style.display = 'none';
  } else {
    hamburgerBtn.style.display = 'none';
    headerLinks.style.display = 'inline-block';
  }
};

const showVerticalMobileMenu = () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
};

const closeMobileMenu = () => {
  mobileMenu.style.display = 'none';
};

window.addEventListener('resize', fixWidths);
fixWidths();
