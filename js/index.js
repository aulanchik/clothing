document.addEventListener("DOMContentLoaded", function() {
  const nav = document.getElementById('main-nav');
  nav.classList.add('nav');

  const container = document.createElement('div');
  container.classList.add('nav__container');

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
    const li = document.createElement('li');
    li.classList.add('nav__link');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  const signUpBtn = document.createElement('li');
  signUpBtn.innerHTML = '<button>Sign Up</button>';
  navLinks.appendChild(signUpBtn);

  navHeader.appendChild(logo);
  container.appendChild(navHeader);
  container.appendChild(navLinks);

  nav.appendChild(container);
});
