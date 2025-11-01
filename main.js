document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#security-nav .nav-link');
  const sections = document.querySelectorAll('.content-section');

  // Ensure default active (Security First) on page load
  const defaultActive = document.querySelector('#security-nav .nav-link.active');
  if (defaultActive) {
    const targetId = defaultActive.getAttribute('data-target');
    document.getElementById(targetId).classList.remove('d-none');
  }

  // Add click behavior
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active and hide all sections
      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(sec => sec.classList.add('d-none'));

      // Add active to clicked and show target
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.remove('d-none');
    });
  });
});
const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
      menu.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
