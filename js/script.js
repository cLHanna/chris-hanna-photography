// =============================
// Disable Right-Click on Images
// =============================
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// =============================
// Prevent Dragging of All Images
// =============================
const observer = new MutationObserver(() => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });
});
observer.observe(document.body, { childList: true, subtree: true });

// =============================
// HERO "Menu" Button as Modal
// =============================
const toggleBtn = document.getElementById('mobile-nav-toggle');
const menuModal = document.getElementById('menu-modal');

if (toggleBtn && menuModal) {
  toggleBtn.addEventListener('click', () => {
    menuModal.classList.toggle('hidden');
  });

  // Close modal when clicking outside content
  menuModal.addEventListener('click', (e) => {
    if (e.target === menuModal) {
      menuModal.classList.add('hidden');
    }
  });

  // Close on link click
  menuModal.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuModal.classList.add('hidden');
    });
  });
}