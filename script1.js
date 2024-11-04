document.addEventListener('mousemove', (event) => {
    // Membuat elemen love
    const love = document.createElement('div');
    love.classList.add('love');
    love.style.left = `${event.pageX}px`;
    love.style.top = `${event.pageY}px`;
    love.innerText = '♡';
  
    // Menambahkan warna pelangi secara acak
    love.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  
    document.body.appendChild(love);
  
    // Menghapus elemen setelah animasi selesai
    setTimeout(() => {
      love.remove();
    }, 5000);
  });
  