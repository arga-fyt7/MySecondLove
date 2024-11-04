function createLove(event) {
  // Tentukan posisi X dan Y berdasarkan jenis event
  const x = event.pageX || event.touches[0].pageX;
  const y = event.pageY || event.touches[0].pageY;

  // Membuat elemen love
  const love = document.createElement('div');
  love.classList.add('love');
  love.style.left = `${x}px`;
  love.style.top = `${y}px`;
  love.innerText = '♡';

  // Menambahkan warna pelangi secara acak
  love.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

  document.body.appendChild(love);

  // Menghapus elemen setelah animasi selesai
  setTimeout(() => {
    love.remove();
  }, 2000);
}
// Fungsi untuk mencegah scroll saat animasi berlangsung
function preventScroll(event) {
  event.preventDefault();
}

// Menambahkan event listener
document.addEventListener('mousemove', createLove);         // Desktop
document.addEventListener('touchstart', createLove);        // Sentuhan awal pada layar
document.addEventListener('touchmove', createLove);         // Gerakan sentuhan
document.addEventListener('touchmove', preventScroll, { passive: false }); // Mencegah scroll saat animasi
