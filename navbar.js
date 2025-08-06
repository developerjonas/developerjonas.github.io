// navbar.js

const mainNavItems = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Projects', href: 'projects.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Lab-Notes', href: '/lab-notes' },
  { label: 'Mailbox', href: '/' },
  { label: 'Resume/CV', href: 'resume.html' },
  { label: 'Contact', href: 'contact.html' }
];

function createNavLink({ label, href }) {
  const li = document.createElement('li');
  li.className = 'nav-item';
  li.innerHTML = `<a href="${href}" class="nav-link text-light px-2">${label}</a>`;
  return li;
}

function populateNav(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  items.forEach(item => container.appendChild(createNavLink(item)));
}

document.addEventListener('DOMContentLoaded', () => {
  populateNav('nav-links', mainNavItems);
  populateNav('mobile-nav-links', mainNavItems);
  populateNav('auth-links', authNavItems);
  populateNav('mobile-auth-links', authNavItems);
});
