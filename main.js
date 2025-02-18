// Tambahkan animasi menggunakan JavaScript
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const toggleButton = document.querySelector('.logo button');

// Tambahkan gaya awal untuk transisi
sidebar.style.transition = 'all 0.5s ease-in-out';
content.style.transition = 'margin-left 0.5s ease-in-out';
toggleButton.style.transition = 'background-color 0.3s, transform 0.3s';

toggleButton.style.padding = '10px 20px';
toggleButton.style.border = 'none';
toggleButton.style.backgroundColor = '#4CAF50';
toggleButton.style.color = '#fff';
toggleButton.style.borderRadius = '20px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontSize = '14px';
toggleButton.style.fontWeight = 'bold';
toggleButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

toggleButton.addEventListener('mouseover', () => {
  toggleButton.style.backgroundColor = '#45A049';
  toggleButton.style.transform = 'scale(1.05)';
});

toggleButton.addEventListener('mouseout', () => {
  toggleButton.style.backgroundColor = '#4CAF50';
  toggleButton.style.transform = 'scale(1)';
});

let sidebarVisible = true;
toggleButton.addEventListener('click', () => {
  if (sidebarVisible) {
    sidebar.style.opacity = '0';
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 500);
    content.style.marginLeft = '20px';
    toggleButton.textContent = 'Tampilkan';
  } else {
    sidebar.style.display = 'block';
    setTimeout(() => {
      sidebar.style.opacity = '1';
    }, 10);
    content.style.marginLeft = '280px';
    toggleButton.textContent = 'Sembunyikan';
  }
  sidebarVisible = !sidebarVisible;
});
