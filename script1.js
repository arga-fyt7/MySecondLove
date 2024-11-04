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

// Tambahkan event listener untuk mousemove dan touchmove
document.addEventListener('mousemove', createLove);
document.addEventListener('touchmove', createLove);

  
