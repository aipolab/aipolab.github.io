/*
 * scripts.js
 *
 * A small JavaScript file responsible for interactive behaviour on the
 * AIPO Lab website. Currently it powers the mobile navigation menu
 * toggle. Additional scripts can be added here if more interactivity
 * is desired.
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the mobile navigation when clicking the hamburger icon
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  // Close mobile nav menu when a link is clicked (for a smoother UX)
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });
});