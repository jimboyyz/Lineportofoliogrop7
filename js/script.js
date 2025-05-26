// 🌅 Scroll Reveal Animations - Biarkan elemen muncul perlahan, seperti mentari pagi
ScrollReveal({
  distance: '60px',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
});

// 🌇 Bagian Beranda - Sambut pengunjung seperti senja menyambut malam
ScrollReveal().reveal('.home-content h3', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.home-content h1', { origin: 'right', delay: 500 });
ScrollReveal().reveal('.home-content h3 span', { origin: 'bottom', delay: 700 });
ScrollReveal().reveal('.home-content p', { origin: 'left', delay: 900 });
ScrollReveal().reveal('.home-content .social-media a', { origin: 'bottom', interval: 200, delay: 1100 });
ScrollReveal().reveal('.home-img img', { origin: 'bottom', delay: 1300 });

// 🍂 Bagian Tentang - Ungkap kisah di balik layar
ScrollReveal().reveal('.about-img', { origin: 'left', delay: 400 });
ScrollReveal().reveal('.about-content', { origin: 'right', delay: 600 });

// 🌻 Layanan (Pertanyaan Hidup)
ScrollReveal().reveal('.services h2, .services h3', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.services-box', { origin: 'bottom', interval: 200, delay: 600 });

// 🎨 Portofolio - Tempat karya bersinar
ScrollReveal().reveal('.portfolio h2', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 200, delay: 600 });

// 📚 Blog - Ruang untuk mencurahkan isi hati
ScrollReveal().reveal('.blog h2', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.blog-post', { origin: 'bottom', interval: 200, delay: 600 });

// 🌌 Typed.js - Kata-kata yang terus hidup
const typed = new Typed('.multiple-text', {
  strings: ['Mathematicians', 'Problem Solvers', 'Innovators', 'Dreamers'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});

// 🍁 Ubah Header Saat Scroll - Seperti langit berubah warna
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scroll-header', window.scrollY > 50);

  // 🧭 Scroll Spy - Penanda jalan dalam perjalanan halaman
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 70;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.navbar a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
});

// 📱 Toggle Menu - Buka dunia kecil dari pojok kanan
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// 🚪 Tutup Navbar Saat Link Diklik - Seperti kembali ke pangkuan senja
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});
