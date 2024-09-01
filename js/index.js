document.addEventListener("DOMContentLoaded", function() {
  const nav = document.getElementById('main-nav');
  nav.classList.add('nav');
  
  const navHeader = document.createElement('div');
  navHeader.classList.add('nav__header');

  const logo = document.createElement('div');
  logo.innerHTML = '<a href="#">FASHION</a>';
  logo.classList.add('nav__logo');

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav__links');
  navLinks.id = 'nav-links';

  const menuItems = [
    { href: '#catalogue', text: 'Catalogue' },
    { href: '#fashion', text: 'Fashion' },
    { href: '#favourite', text: 'Favourite' },
    { href: '#lifestyle', text: 'Lifestyle' }
  ];

  menuItems.forEach(item => {
    const li = document.createElement('li', 'nav__link');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  const signUpBtn = document.createElement('li');
  signUpBtn.innerHTML = '<button class="nav__button">SIGN UP</button>';

  navHeader.appendChild(logo);
  navLinks.appendChild(signUpBtn);
  nav.appendChild(navHeader);
  nav.appendChild(navLinks);
});
